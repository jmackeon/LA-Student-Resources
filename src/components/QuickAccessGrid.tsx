import type { Resource } from "../data/resources";
import { QuickAccessCard } from "./QuickAccessCard";

interface QuickAccessGridProps {
  resources: Resource[];
}

export function QuickAccessGrid({ resources }: QuickAccessGridProps) {
  return (
    <ul className="quick-access-grid">
      {resources.map((resource) => (
        <li key={resource.url}>
          <QuickAccessCard resource={resource} />
        </li>
      ))}
    </ul>
  );
}
