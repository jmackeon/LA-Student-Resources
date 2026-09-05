import type { ResourceCategory } from "../data/resources";

/** DOM id for a category's expanded panel, shared between the trigger card (aria-controls) and the panel itself. */
export function categoryPanelId(category: ResourceCategory): string {
  return `category-panel-${category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
}
