import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, RefreshCcw } from "lucide-react";
import { clearSavedStage } from "../utils/stagePreference";

interface HeaderProps {
  /** Short current stage label shown discreetly on the right (e.g. "Primary"). Omitted on the root stage selector. */
  stageName?: string;
}

export function Header({ stageName }: HeaderProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const navigate = useNavigate();

  function handleChangeStage() {
    clearSavedStage();
    navigate("/");
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <span className="site-header__logo-badge">
            {logoFailed ? (
              <span className="site-header__logo-fallback" aria-hidden="true">
                <GraduationCap size={22} strokeWidth={2} />
              </span>
            ) : (
              <img
                src="/LAC_logo.png"
                alt="London Academy logo"
                className="site-header__logo"
                onError={() => setLogoFailed(true)}
              />
            )}
          </span>
          <span className="site-header__title">London Academy</span>
        </div>

        {stageName && (
          <div className="site-header__stage-group">
            <span className="site-header__stage">{stageName}</span>
            <button
              type="button"
              className="site-header__change-stage"
              onClick={handleChangeStage}
              aria-label="Change Stage"
            >
              <RefreshCcw size={14} strokeWidth={2} aria-hidden="true" />
              Change Stage
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
