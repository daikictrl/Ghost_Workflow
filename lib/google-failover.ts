import fs from "fs";
import path from "path";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

/**
 * Manually reads and parses the .env file to extract all occurrences of GOOGLE_AI_API_KEY
 * because standard env loaders overwrite duplicates.
 */
export function getGoogleApiKeys(): string[] {
  const keys: string[] = [];
  try {
    const envPath = path.join(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const lines = content.split(/\r?\n/);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("GOOGLE_AI_API_KEY=")) {
          const part = trimmed.substring("GOOGLE_AI_API_KEY=".length).trim();
          let val = part;
          if (
            (val.startsWith('"') && val.endsWith('"')) ||
            (val.startsWith("'") && val.endsWith("'"))
          ) {
            val = val.substring(1, val.length - 1);
          }
          if (val && !keys.includes(val)) {
            keys.push(val);
          }
        }
      }
    }
  } catch (e) {
    console.error("Error reading/parsing .env file for Google API keys:", e);
  }

  // Fallback to the loaded process.env if keys list is empty
  if (keys.length === 0 && process.env.GOOGLE_AI_API_KEY) {
    // Split by comma to support multiple keys in a single env var for cloud environments
    const envKeys = process.env.GOOGLE_AI_API_KEY.split(",").map(k => k.trim()).filter(Boolean);
    for (const key of envKeys) {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
  }

  return keys;
}

/**
 * Runs the generator function with failover across the parsed Google AI API keys.
 */
export async function runWithFailover<T>(
  fn: (model: any) => Promise<T>,
  modelName: string = "gemini-2.5-flash"
): Promise<T> {
  const keys = getGoogleApiKeys();
  if (keys.length === 0) {
    throw new Error("No GOOGLE_AI_API_KEY found in .env or process.env");
  }

  let lastError: any = null;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    try {
      const google = createGoogleGenerativeAI({ apiKey: key });
      const model = google(modelName);
      return await fn(model);
    } catch (err: any) {
      console.warn(`[Google AI Failover] Key index ${i} failed. Error:`, err);
      lastError = err;
      // Switch to next key in loop
    }
  }

  throw new Error(`All Google AI API keys failed. Last error: ${lastError?.message || lastError}`);
}
