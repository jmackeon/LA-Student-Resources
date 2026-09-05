import { X } from "lucide-react";
import type { Resource, ResourceCategory } from "../data/resources";
import { CATEGORY_META } from "../data/categoryMeta";
import { categoryPanelId } from "../utils/categoryPanelId";
import { useScrollIntoViewOnMount } from "../hooks/useScrollIntoViewOnMount";
import { ResourceGrid } from "./ResourceGrid";

interface CategoryPanelProps {
  category: ResourceCategory;
  resources: Resource[];
  onClose: () => void;
}

export function CategoryPanel({ category, resources, onClose }: CategoryPanelProps) {
  const meta = CATEGORY_META[category];
  const Icon = meta.icon;
  const ref = useScrollIntoViewOnMount<HTMLElement>();

  return (
    <section className="category-panel" id={categoryPanelId(category)} ref={ref} aria-label={`${category} resources`}>
      <div className="category-panel__header">
        <div className="category-panel__heading">
          <span className="category-panel__icon" style={{ ["--tile-color" as string]: `var(${meta.colorVar})` }}>
            <Icon size={22} aria-hidden="true" />
          </span>
          <div>
            <h2 className="category-panel__title">{category}</h2>
            <p className="category-panel__count">
              {resources.length} resource{resources.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
        <button type="button" className="category-panel__close" onClick={onClose}>
          <X size={16} aria-hidden="true" />
          Close category
        </button>
      </div>
      <ResourceGrid resources={resources} />
    </section>
  );
}
