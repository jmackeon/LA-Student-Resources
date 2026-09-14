import type { RefObject } from "react";
import { ArrowLeft } from "lucide-react";
import type { Resource, ResourceCategory } from "../data/resources";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { CategoryGrid } from "./CategoryGrid";
import { CategoryPanel } from "./CategoryPanel";

interface ResourceDirectoryProps {
  headingRef: RefObject<HTMLHeadingElement | null>;
  categories: ResourceCategory[];
  counts: Map<ResourceCategory, number>;
  expandedCategory: ResourceCategory | null;
  expandedCategoryResources: Resource[];
  onSelectCategory: (category: ResourceCategory) => void;
  onCloseCategory: () => void;
  onBack: () => void;
  backLabel: string;
  query: string;
  onQueryChange: (value: string) => void;
  searchResults: Resource[];
}

export function ResourceDirectory({
  headingRef,
  categories,
  counts,
  expandedCategory,
  expandedCategoryResources,
  onSelectCategory,
  onCloseCategory,
  onBack,
  backLabel,
  query,
  onQueryChange,
  searchResults,
}: ResourceDirectoryProps) {
  const isSearching = query.trim().length > 0;

  return (
    <div className="resource-directory">
      <div className="directory-header">
        <div className="page-intro">
          <h1 className="page-intro__title" ref={headingRef} tabIndex={-1}>
            All Resources
          </h1>
          <p className="page-intro__subtitle">Select a category to explore its learning platforms.</p>
        </div>
        <button type="button" className="back-button" onClick={onBack}>
          <ArrowLeft size={16} aria-hidden="true" />
          {backLabel}
        </button>
      </div>

      <SearchBar value={query} onChange={onQueryChange} />

      {isSearching ? (
        <SearchResults results={searchResults} onClear={() => onQueryChange("")} />
      ) : (
        <>
          <CategoryGrid
            categories={categories}
            counts={counts}
            activeCategory={expandedCategory}
            onSelect={onSelectCategory}
          />

          {expandedCategory && (
            <CategoryPanel
              category={expandedCategory}
              resources={expandedCategoryResources}
              onClose={onCloseCategory}
            />
          )}
        </>
      )}
    </div>
  );
}
