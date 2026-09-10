import { useState } from "react";
import { GraduationCap } from "lucide-react";

interface HeaderProps {
  /** Short current stage label shown discreetly on the right (e.g. "Primary"). Omitted on the root stage selector. */
  stageName?: string;
}

export function Header({ stageName }: HeaderProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          {logoFailed ? (
            <span className="site-header__logo-fallback" aria-hidden="true">
              <GraduationCap size={24} strokeWidth={2} />
            </span>
          ) : (
            <img
              src="/brand/london-academy-logo.png"
              alt="London Academy logo"
              className="site-header__logo"
              onError={() => setLogoFailed(true)}
            />
          )}
          <span className="site-header__title">London Academy</span>
        </div>

        {stageName && <span className="site-header__stage">{stageName}</span>}
      </div>
    </header>
  );
}
