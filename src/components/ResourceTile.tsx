import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "../data/resources";
import { CATEGORY_META } from "../data/categoryMeta";
import { getHostname } from "../utils/hostname";

interface ResourceTileProps {
  resource: Resource;
  /** Appends the resource's category after its hostname — useful in flat, mixed-category listings like search results. */
  showCategory?: boolean;
}

export function ResourceTile({ resource, showCategory }: ResourceTileProps) {
  const meta = CATEGORY_META[resource.category];
  const Icon = meta.icon;
  const [failedIcon, setFailedIcon] = useState<string>();
  const showImage = Boolean(resource.icon) && resource.icon !== failedIcon;

  return (
    <a
      className="resource-tile"
      href={resource.url}
      style={{ ["--tile-color" as string]: `var(${meta.colorVar})` }}
    >
      <span className={`resource-tile__icon${showImage ? " resource-tile__icon--image" : ""}`} aria-hidden="true">
        {showImage ? (
          <img
            src={resource.icon}
            alt=""
            width={56}
            height={52}
            loading="lazy"
            decoding="async"
            onError={() => setFailedIcon(resource.icon)}
          />
        ) : (
          <Icon size={22} strokeWidth={2} />
        )}
      </span>
      <span className="resource-tile__text">
        <span className="resource-tile__name">{resource.name}</span>
        <span className="resource-tile__host">
          {getHostname(resource.url)}
          {showCategory ? ` • ${resource.category}` : ""}
        </span>
      </span>
      <ArrowUpRight className="resource-tile__launch" size={16} strokeWidth={2.25} aria-hidden="true" />
    </a>
  );
}
