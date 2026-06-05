import { z } from "zod";

export const AiStatusMessageSchema = z.object({
  text: z.string().optional(),
  status: z.string().optional(),
  timestamp: z.number(),
});

export type AiStatusMessage = z.infer<typeof AiStatusMessageSchema>;

export const AiChatMessageSchema = z.object({
  id: z.string().optional(),
  sender: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  timestamp: z.number(),
  userId: z.string().optional(),
});

export type AiChatMessage = z.infer<typeof AiChatMessageSchema>;
