import type { RefObject } from "react";
import type { Resource } from "../data/resources";
import { QuickAccessGrid } from "./QuickAccessGrid";
import { ViewAllResourcesCard } from "./ViewAllResourcesCard";

interface QuickAccessViewProps {
  headingRef: RefObject<HTMLHeadingElement | null>;
  pageTitle: string;
  subtitle: string;
  resources: Resource[];
  totalCount: number;
  onViewAll: () => void;
}

export function QuickAccessView({
  headingRef,
  pageTitle,
  subtitle,
  resources,
  totalCount,
  onViewAll,
}: QuickAccessViewProps) {
  return (
    <div className="quick-access-view">
      <div className="stage-intro">
        <h1 className="stage-intro__title" ref={headingRef} tabIndex={-1}>
          {pageTitle}
        </h1>
        <p className="stage-intro__subtitle">{subtitle}</p>
      </div>

      <QuickAccessGrid resources={resources} />

      <ViewAllResourcesCard totalCount={totalCount} onSelect={onViewAll} />
    </div>
  );
}
