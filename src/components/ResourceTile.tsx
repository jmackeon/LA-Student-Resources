import type { Resource } from "../data/resources";
import { CATEGORY_META } from "../data/categoryMeta";
import { getHostname } from "../utils/hostname";

interface ResourceTileProps {
  resource: Resource;
}

export function ResourceTile({ resource }: ResourceTileProps) {
  const meta = CATEGORY_META[resource.category];
  const Icon = meta.icon;

  return (
    <a
      className="resource-tile"
      href={resource.url}
      style={{ ["--tile-color" as string]: `var(${meta.colorVar})` }}
    >
      <span className="resource-tile__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={2} />
      </span>
      <span className="resource-tile__text">
        <span className="resource-tile__name">{resource.name}</span>
        <span className="resource-tile__host">{getHostname(resource.url)}</span>
      </span>
    </a>
  );
}
