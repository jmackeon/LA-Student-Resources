import type { Resource } from "../data/resources";
import { ResourceTile } from "./ResourceTile";
import { EmptyState } from "./EmptyState";

interface ResourceGridProps {
  resources: Resource[];
  showCategory?: boolean;
  emptyTitle?: string;
  emptyHint?: string;
  emptyActionLabel?: string;
  onEmptyAction?: () => void;
}

export function ResourceGrid({
  resources,
  showCategory,
  emptyTitle,
  emptyHint,
  emptyActionLabel,
  onEmptyAction,
}: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <EmptyState title={emptyTitle} hint={emptyHint} actionLabel={emptyActionLabel} onAction={onEmptyAction} />
    );
  }

  return (
    <ul className="resource-grid">
      {resources.map((resource) => (
        <li key={resource.url}>
          <ResourceTile resource={resource} showCategory={showCategory} />
        </li>
      ))}
    </ul>
  );
}
