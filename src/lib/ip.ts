import crypto from "crypto";

/**
 * Extracts the IP address conservatively.
 * Note: In a production environment like Vercel or Cloudflare, `x-forwarded-for`
 * or request.ip is used, but headers can be spoofed if not at the edge.
 */
export function extractIP(request: Request): string {
  // Try Next.js 13+ standard ways first if available
  const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for");
  
  if (ip) {
    return ip.split(",")[0].trim();
  }
  
  return "127.0.0.1";
}

/**
 * Creates a server-side HMAC of the IP address so we don't store raw PII
 * while still being able to track unique visitors for rate limiting.
 */
export function hashIP(ip: string): string {
  const secret = process.env.IP_HASH_SECRET;
  
  if (!secret) {
    // Fallback if env is misconfigured, but we should log a warning.
    console.warn("IP_HASH_SECRET is not set. Falling back to SHA-256 without HMAC.");
    return crypto.createHash("sha256").update(ip).digest("hex");
  }

  return crypto.createHmac("sha256", secret).update(ip).digest("hex");
}
