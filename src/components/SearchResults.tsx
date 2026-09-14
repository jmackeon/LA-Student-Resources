import type { Resource } from "../data/resources";
import { ResourceGrid } from "./ResourceGrid";

interface SearchResultsProps {
  results: Resource[];
  onClear: () => void;
}

export function SearchResults({ results, onClear }: SearchResultsProps) {
  return (
    <section className="search-results" aria-live="polite">
      <div className="search-results__header">
        <h2 className="search-results__heading">Search Results</h2>
        <p className="search-results__count">
          {results.length} resource{results.length === 1 ? "" : "s"} found
        </p>
      </div>

      <ResourceGrid
        resources={results}
        showCategory
        emptyTitle="No resources found"
        emptyHint="Try another name or category."
        emptyActionLabel="Clear search"
        onEmptyAction={onClear}
      />
    </section>
  );
}
