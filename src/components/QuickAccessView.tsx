import { useRef, useState, type RefObject } from "react";
import type { Resource } from "../data/resources";
import type { QuickAccessItem } from "../data/quickAccessItems";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { QuickAccessGrid } from "./QuickAccessGrid";
import { ViewAllResourcesCard } from "./ViewAllResourcesCard";
import { QuestCampusDialog } from "./QuestCampusDialog";

interface QuickAccessViewProps {
  headingRef: RefObject<HTMLHeadingElement | null>;
  pageTitle: string;
  subtitle: string;
  items: QuickAccessItem[];
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
  items,
  totalCount,
  query,
  onQueryChange,
  searchResults,
  onViewAll,
}: QuickAccessViewProps) {
  const isSearching = query.trim().length > 0;
  const [isQuestDialogOpen, setQuestDialogOpen] = useState(false);
  const questTriggerRef = useRef<HTMLButtonElement>(null);

  function handleCloseQuestDialog() {
    setQuestDialogOpen(false);
    // Native <dialog> already restores focus to the trigger; this is a defensive fallback.
    questTriggerRef.current?.focus();
  }

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
          <QuickAccessGrid
            items={items}
            onOpenQuestPicker={() => setQuestDialogOpen(true)}
            questTriggerRef={questTriggerRef}
          />
          <ViewAllResourcesCard totalCount={totalCount} onSelect={onViewAll} />
        </>
      )}

      <QuestCampusDialog open={isQuestDialogOpen} onClose={handleCloseQuestDialog} />
    </div>
  );
}
