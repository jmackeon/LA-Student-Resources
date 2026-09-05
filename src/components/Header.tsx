import { useState } from "react";
import { GraduationCap } from "lucide-react";

export function Header() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__brand">
        {logoFailed ? (
          <span className="site-header__logo-fallback" aria-hidden="true">
            <GraduationCap size={28} strokeWidth={2} />
          </span>
        ) : (
          <img
            src="/logo.png"
            alt=""
            className="site-header__logo"
            onError={() => setLogoFailed(true)}
          />
        )}
        <div className="site-header__text">
          <p className="site-header__title">London Academy</p>
          <p className="site-header__subtitle">Student Resources</p>
        </div>
      </div>
    </header>
  );
}
