import { visibleResources, type Resource } from "../data/resources";
import { getHostname } from "./hostname";

// Unicode "Combining Diacritical Marks" block (0x0300–0x036F). Stripping these
// after NFD normalization turns e.g. "é" into a plain "e" for tolerant matching.
const COMBINING_MARK_START = 0x0300;
const COMBINING_MARK_END = 0x036f;

/** Lowercases, trims, and strips accents so e.g. "codedex" matches "Codédex". */
function normalize(value: string): string {
  return Array.from(value.trim().toLowerCase().normalize("NFD"))
    .filter((char) => {
      const code = char.codePointAt(0) ?? 0;
      return code < COMBINING_MARK_START || code > COMBINING_MARK_END;
    })
    .join("");
}

/**
 * Searches all approved (visible) resources by name, hostname, and category.
 * Local, in-memory, case-insensitive, and accent-tolerant — never touches the
 * network. Returns an empty array for a blank query.
 */
export function searchResources(query: string): Resource[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  return visibleResources
    .filter((resource) => {
      const haystack = normalize([resource.name, getHostname(resource.url), resource.category].join(" "));
      return haystack.includes(normalizedQuery);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
