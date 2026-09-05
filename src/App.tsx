import { useMemo, useState } from "react";
import { LayoutGrid } from "lucide-react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CategoryGrid } from "./components/CategoryGrid";
import { CategoryPanel } from "./components/CategoryPanel";
import { GroupedResourceList } from "./components/GroupedResourceList";
import { AllResourcesPanel } from "./components/AllResourcesPanel";
import { EmptyState } from "./components/EmptyState";
import { CATEGORIES, resources, type ResourceCategory } from "./data/resources";
import { groupByCategory } from "./utils/groupByCategory";
import { getHostname } from "./utils/hostname";

const visibleResources = resources.filter((resource) => !resource.hidden);

type ExpandedView = ResourceCategory | "ALL" | null;

function App() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<ExpandedView>(null);

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const categoryCounts = useMemo(() => {
    const counts = new Map<ResourceCategory, number>();
    for (const category of CATEGORIES) counts.set(category, 0);
    for (const resource of visibleResources) {
      counts.set(resource.category, (counts.get(resource.category) ?? 0) + 1);
    }
    return counts;
  }, []);

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return visibleResources.filter((resource) => {
      const haystack = [resource.name, getHostname(resource.url), resource.category]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [isSearching, normalizedQuery]);

  const searchGroups = useMemo(() => groupByCategory(searchResults), [searchResults]);

  const allGroups = useMemo(() => groupByCategory(visibleResources), []);

  const expandedCategoryResources = useMemo(() => {
    if (!expanded || expanded === "ALL") return [];
    return visibleResources
      .filter((resource) => resource.category === expanded)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [expanded]);

  function handleSelectCategory(category: ResourceCategory) {
    setExpanded((prev) => (prev === category ? null : category));
  }

  function handleToggleViewAll() {
    setExpanded((prev) => (prev === "ALL" ? null : "ALL"));
  }

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <div className="app__controls">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {isSearching ? (
          <>
            <p className="app__result-count" aria-live="polite">
              {searchResults.length} of {visibleResources.length} resources
            </p>
            {searchResults.length === 0 ? (
              <EmptyState />
            ) : (
              <GroupedResourceList groups={searchGroups} />
            )}
          </>
        ) : (
          <>
            <CategoryGrid
              categories={CATEGORIES}
              counts={categoryCounts}
              activeCategory={expanded === "ALL" ? null : expanded}
              onSelect={handleSelectCategory}
            />

            <button
              type="button"
              className="view-all-button"
              aria-expanded={expanded === "ALL"}
              aria-controls="all-resources-panel"
              onClick={handleToggleViewAll}
            >
              <LayoutGrid size={16} aria-hidden="true" />
              {expanded === "ALL" ? "Hide all resources" : `View all ${visibleResources.length} resources`}
            </button>

            {expanded !== null && expanded !== "ALL" && (
              <CategoryPanel
                category={expanded}
                resources={expandedCategoryResources}
                onClose={() => setExpanded(null)}
              />
            )}

            {expanded === "ALL" && <AllResourcesPanel groups={allGroups} />}
          </>
        )}
      </main>

      <footer className="app__footer">
        <p>London Academy • Student Resources</p>
        <p className="app__footer-year">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
