import { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "../components/Header";
import { QuickAccessView } from "../components/QuickAccessView";
import { ResourceDirectory } from "../components/ResourceDirectory";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { CATEGORIES, getResourcesBySlugs, resources, type ResourceCategory } from "../data/resources";
import type { StageConfig } from "../data/stages";
import { saveStage } from "../utils/stagePreference";

const visibleResources = resources.filter((resource) => !resource.hidden);

type ViewMode = "quick-access" | "directory";

interface StagePageProps {
  stage: StageConfig;
}

export function StagePage({ stage }: StagePageProps) {
  useDocumentTitle(stage.browserTitle);

  // Whether this page was reached by picking a stage or visiting its URL directly
  // (e.g. a Knox homepage assignment), it becomes the tablet's remembered stage.
  useEffect(() => {
    saveStage(stage.id);
  }, [stage.id]);

  const [viewMode, setViewMode] = useState<ViewMode>("quick-access");
  const [expandedCategory, setExpandedCategory] = useState<ResourceCategory | null>(null);

  const isFirstRender = useRef(true);
  const quickAccessHeadingRef = useRef<HTMLHeadingElement>(null);
  const directoryHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (viewMode === "directory") {
      directoryHeadingRef.current?.focus();
    } else {
      quickAccessHeadingRef.current?.focus();
    }
  }, [viewMode]);

  const quickAccessResources = useMemo(
    () => getResourcesBySlugs(stage.quickAccessResourceIds),
    [stage.quickAccessResourceIds],
  );

  const categoryCounts = useMemo(() => {
    const counts = new Map<ResourceCategory, number>();
    for (const category of CATEGORIES) counts.set(category, 0);
    for (const resource of visibleResources) {
      counts.set(resource.category, (counts.get(resource.category) ?? 0) + 1);
    }
    return counts;
  }, []);

  const expandedCategoryResources = useMemo(() => {
    if (!expandedCategory) return [];
    return visibleResources
      .filter((resource) => resource.category === expandedCategory)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [expandedCategory]);

  function handleSelectCategory(category: ResourceCategory) {
    setExpandedCategory((prev) => (prev === category ? null : category));
  }

  function handleViewAll() {
    setExpandedCategory(null);
    setViewMode("directory");
  }

  function handleBack() {
    setViewMode("quick-access");
    setExpandedCategory(null);
  }

  return (
    <div className="app">
      <Header stageName={stage.navLabel} />

      <main className="app__main">
        {viewMode === "quick-access" ? (
          <QuickAccessView
            headingRef={quickAccessHeadingRef}
            pageTitle={stage.pageTitle}
            subtitle={stage.subtitle}
            resources={quickAccessResources}
            totalCount={visibleResources.length}
            onViewAll={handleViewAll}
          />
        ) : (
          <ResourceDirectory
            headingRef={directoryHeadingRef}
            categories={CATEGORIES}
            counts={categoryCounts}
            expandedCategory={expandedCategory}
            expandedCategoryResources={expandedCategoryResources}
            onSelectCategory={handleSelectCategory}
            onCloseCategory={() => setExpandedCategory(null)}
            onBack={handleBack}
            backLabel={stage.backLabel}
          />
        )}
      </main>

      <footer className="app__footer">
        <p>London Academy • Student Resources</p>
        <p className="app__footer-year">• © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
