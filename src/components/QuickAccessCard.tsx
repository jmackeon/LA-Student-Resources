import { useState, type RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import type { QuickAccessItem } from "../data/quickAccessItems";

interface QuickAccessCardProps {
  item: QuickAccessItem;
  onOpenQuestPicker: (trigger: HTMLButtonElement) => void;
  questTriggerRef: RefObject<HTMLButtonElement | null>;
}

export function QuickAccessCard({ item, onOpenQuestPicker, questTriggerRef }: QuickAccessCardProps) {
  const [iconFailed, setIconFailed] = useState(false);

  if (item.kind === "quest-campus-picker") {
    const showImage = !iconFailed;
    return (
      <button
        type="button"
        ref={questTriggerRef}
        className="quick-access-card"
        aria-haspopup="dialog"
        onClick={(event) => onOpenQuestPicker(event.currentTarget)}
      >
        <span className="quick-access-card__logo">
          {showImage ? (
            <img src={item.icon} alt="" onError={() => setIconFailed(true)} />
          ) : (
            <span className="quick-access-card__fallback-text">{item.name}</span>
          )}
        </span>
        {showImage && <span className="quick-access-card__name">{item.name}</span>}
        <span className="quick-access-card__launch" aria-hidden="true">
          <ArrowUpRight size={14} strokeWidth={2.25} />
        </span>
      </button>
    );
  }

  const { resource } = item;
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
