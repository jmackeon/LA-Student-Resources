import type { ResourceGroup } from "../utils/groupByCategory";
import { useScrollIntoViewOnMount } from "../hooks/useScrollIntoViewOnMount";
import { GroupedResourceList } from "./GroupedResourceList";

interface AllResourcesPanelProps {
  groups: ResourceGroup[];
}

export function AllResourcesPanel({ groups }: AllResourcesPanelProps) {
  const ref = useScrollIntoViewOnMount<HTMLDivElement>();

  return (
    <div className="all-resources-panel" id="all-resources-panel" ref={ref}>
      <GroupedResourceList groups={groups} />
    </div>
  );
}
