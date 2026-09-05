import type { ResourceCategory } from "../data/resources";
import { CategoryCard } from "./CategoryCard";

interface CategoryGridProps {
  categories: ResourceCategory[];
  counts: Map<ResourceCategory, number>;
  activeCategory: ResourceCategory | null;
  onSelect: (category: ResourceCategory) => void;
}

export function CategoryGrid({ categories, counts, activeCategory, onSelect }: CategoryGridProps) {
  return (
    <div className="category-grid" role="group" aria-label="Resource categories">
      {categories.map((category) => (
        <CategoryCard
          key={category}
          category={category}
          count={counts.get(category) ?? 0}
          isActive={category === activeCategory}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
