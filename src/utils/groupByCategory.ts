import { CATEGORIES, type Resource, type ResourceCategory } from "../data/resources";

export interface ResourceGroup {
  category: ResourceCategory;
  resources: Resource[];
}

/** Groups resources by category (in CATEGORIES order), sorted alphabetically within each group. Empty groups are omitted. */
export function groupByCategory(items: Resource[]): ResourceGroup[] {
  const byCategory = new Map<ResourceCategory, Resource[]>();
  for (const category of CATEGORIES) byCategory.set(category, []);
  for (const item of items) {
    byCategory.get(item.category)?.push(item);
  }

  return CATEGORIES.map((category) => ({
    category,
    resources: [...(byCategory.get(category) ?? [])].sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((group) => group.resources.length > 0);
}
