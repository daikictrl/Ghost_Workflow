import { Liveblocks } from "@liveblocks/node";

const globalForLiveblocks = globalThis as unknown as {
  liveblocks: Liveblocks | undefined;
};

export const liveblocks =
  globalForLiveblocks.liveblocks ??
  new Liveblocks({
    secret:
      process.env.LIVEBLOCKS_SECRET_KEY ||
      process.env.LIVEBLOCKS_SECRETE_KEY ||
      "sk_mock_secret_key_for_build",
  });

if (process.env.NODE_ENV !== "production") {
  globalForLiveblocks.liveblocks = liveblocks;
}

// A premium, curated palette of vibrant, dark-mode compatible colors.
const COLOR_PALETTE = [
  "#f43f5e", // Rose 500
  "#ec4899", // Pink 500
  "#d946ef", // Fuchsia 500
  "#a855f7", // Purple 500
  "#6366f1", // Indigo 500
  "#3b82f6", // Blue 500
  "#0ea5e9", // Sky 500
  "#06b6d4", // Cyan 500
  "#14b8a6", // Teal 500
  "#10b981", // Emerald 500
  "#f97316", // Orange 500
];

/**
 * Deterministically maps any string user ID to a consistent color from our palette.
 */
export function getUserColor(userId: string): string {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COLOR_PALETTE.length;
  return COLOR_PALETTE[index];
}
