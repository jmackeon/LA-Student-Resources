import type { Resource } from "../data/resources";
import { ResourceTile } from "./ResourceTile";
import { EmptyState } from "./EmptyState";

interface ResourceGridProps {
  resources: Resource[];
}

export function ResourceGrid({ resources }: ResourceGridProps) {
  if (resources.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="resource-grid">
      {resources.map((resource) => (
        <li key={resource.url}>
          <ResourceTile resource={resource} />
        </li>
      ))}
    </ul>
  );
}
