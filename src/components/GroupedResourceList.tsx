import type { ResourceGroup } from "../utils/groupByCategory";
import { CategorySection } from "./CategorySection";

interface GroupedResourceListProps {
  groups: ResourceGroup[];
}

export function GroupedResourceList({ groups }: GroupedResourceListProps) {
  return (
    <div className="grouped-resource-list">
      {groups.map((group) => (
        <CategorySection key={group.category} category={group.category} resources={group.resources} />
      ))}
    </div>
  );
}
