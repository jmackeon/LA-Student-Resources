import type { Resource, ResourceCategory } from "../data/resources";
import { CATEGORY_META } from "../data/categoryMeta";
import { ResourceGrid } from "./ResourceGrid";

interface CategorySectionProps {
  category: ResourceCategory;
  resources: Resource[];
}

export function CategorySection({ category, resources }: CategorySectionProps) {
  const meta = CATEGORY_META[category];
  const Icon = meta.icon;

  return (
    <section className="category-section" aria-label={`${category} resources`}>
      <h2 className="category-section__heading">
        <span className="category-section__icon" style={{ ["--tile-color" as string]: `var(${meta.colorVar})` }}>
          <Icon size={16} aria-hidden="true" />
        </span>
        {category}
        <span className="category-section__count">{resources.length}</span>
      </h2>
      <ResourceGrid resources={resources} />
    </section>
  );
}
