import { ChevronDown } from "lucide-react";
import type { ResourceCategory } from "../data/resources";
import { CATEGORY_META } from "../data/categoryMeta";
import { categoryPanelId } from "../utils/categoryPanelId";

interface CategoryCardProps {
  category: ResourceCategory;
  count: number;
  isActive: boolean;
  onSelect: (category: ResourceCategory) => void;
}

export function CategoryCard({ category, count, isActive, onSelect }: CategoryCardProps) {
  const meta = CATEGORY_META[category];
  const Icon = meta.icon;

  return (
    <button
      type="button"
      className="category-card"
      data-active={isActive || undefined}
      aria-expanded={isActive}
      aria-controls={categoryPanelId(category)}
      aria-label={`${category}, ${count} resource${count === 1 ? "" : "s"}${isActive ? ", expanded" : ""}`}
      onClick={() => onSelect(category)}
      style={{ ["--card-color" as string]: `var(${meta.colorVar})` }}
    >
      <span className="category-card__icon" aria-hidden="true">
        <Icon size={32} strokeWidth={1.75} />
      </span>
      <span className="category-card__name">{category}</span>
      <span className="category-card__count">
        {count} resource{count === 1 ? "" : "s"}
      </span>
      <span className="category-card__chevron" aria-hidden="true">
        <ChevronDown size={18} />
      </span>
    </button>
  );
}
