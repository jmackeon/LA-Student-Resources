import type { RefObject } from "react";
import type { Resource } from "../data/resources";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { QuickAccessGrid } from "./QuickAccessGrid";
import { ViewAllResourcesCard } from "./ViewAllResourcesCard";

interface QuickAccessViewProps {
  headingRef: RefObject<HTMLHeadingElement | null>;
  pageTitle: string;
  subtitle: string;
  resources: Resource[];
  totalCount: number;
  query: string;
  onQueryChange: (value: string) => void;
  searchResults: Resource[];
  onViewAll: () => void;
}

export function QuickAccessView({
  headingRef,
  pageTitle,
  subtitle,
  resources,
  totalCount,
  query,
  onQueryChange,
  searchResults,
  onViewAll,
}: QuickAccessViewProps) {
  const isSearching = query.trim().length > 0;

  return (
    <div className="quick-access-view">
      <div className="stage-intro">
        <h1 className="stage-intro__title" ref={headingRef} tabIndex={-1}>
          {pageTitle}
        </h1>
        <p className="stage-intro__subtitle">{subtitle}</p>
      </div>

      <SearchBar value={query} onChange={onQueryChange} />

      {isSearching ? (
        <SearchResults results={searchResults} onClear={() => onQueryChange("")} />
      ) : (
        <>
          <QuickAccessGrid resources={resources} />
          <ViewAllResourcesCard totalCount={totalCount} onSelect={onViewAll} />
        </>
      )}
    </div>
  );
}
