import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { STAGE_LIST } from "../data/stages";
import { STAGE_META } from "../data/stageMeta";
import { getSavedStage, STAGE_PATHS } from "../utils/stagePreference";

export function StageSelectorPage() {
  useDocumentTitle("Student Resources");

  // Computed once on mount, before the first paint, so a saved stage redirects
  // immediately instead of the chooser flashing on screen first.
  const [savedStage] = useState(() => getSavedStage());

  if (savedStage) {
    return <Navigate to={STAGE_PATHS[savedStage]} replace />;
  }

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <div className="stage-selection-main">
          <div className="stage-intro">
            <h1 className="stage-intro__title">Choose Your Learning Stage</h1>
            <p className="stage-intro__subtitle">
              Select the learning stage for this tablet. You can change it later.
            </p>
          </div>

          <ul className="stage-select-grid">
            {STAGE_LIST.map((stage) => {
              const meta = STAGE_META[stage.id];
              const Icon = meta.icon;
              return (
                <li key={stage.id}>
                  <Link className="stage-select-card" to={stage.path} replace>
                    <span className="stage-select-card__icon" aria-hidden="true">
                      <Icon size={34} strokeWidth={1.75} />
                    </span>
                    <span className="stage-select-card__name">{meta.selectorLabel}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <footer className="app__footer">
        <p>London Academy • Student Resources</p>
        <p className="app__footer-year">• © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
