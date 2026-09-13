import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "../data/resources";

interface QuickAccessCardProps {
  resource: Resource;
}

export function QuickAccessCard({ resource }: QuickAccessCardProps) {
  const [iconFailed, setIconFailed] = useState(false);
  const showImage = Boolean(resource.icon) && !iconFailed;

  return (
    <a className="quick-access-card" href={resource.url}>
      <span
        className="quick-access-card__logo"
        style={resource.iconScale ? { ["--icon-scale" as string]: resource.iconScale } : undefined}
      >
        {showImage ? (
          <img src={resource.icon} alt="" onError={() => setIconFailed(true)} />
        ) : (
          <span className="quick-access-card__fallback-text">{resource.name}</span>
        )}
      </span>
      {showImage && <span className="quick-access-card__name">{resource.name}</span>}
      <span className="quick-access-card__launch" aria-hidden="true">
        <ArrowUpRight size={14} strokeWidth={2.25} />
      </span>
    </a>
  );
}
