/** Extracts a display-friendly hostname from a resource URL, e.g. "www.example.com". */
export function getHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
