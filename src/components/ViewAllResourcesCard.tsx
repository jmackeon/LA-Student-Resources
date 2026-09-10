import { LayoutGrid } from "lucide-react";

interface ViewAllResourcesCardProps {
  totalCount: number;
  onSelect: () => void;
}

export function ViewAllResourcesCard({ totalCount, onSelect }: ViewAllResourcesCardProps) {
  return (
    <button type="button" className="view-all-card" onClick={onSelect}>
      <span className="view-all-card__icon" aria-hidden="true">
        <LayoutGrid size={26} strokeWidth={1.75} />
      </span>
      <span className="view-all-card__text">
        <span className="view-all-card__title">View All Resources</span>
        <span className="view-all-card__subtitle">
          Browse all {totalCount} approved learning platforms by category.
        </span>
      </span>
    </button>
  );
}
