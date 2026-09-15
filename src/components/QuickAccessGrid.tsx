import type { RefObject } from "react";
import type { QuickAccessItem } from "../data/quickAccessItems";
import { QuickAccessCard } from "./QuickAccessCard";

interface QuickAccessGridProps {
  items: QuickAccessItem[];
  onOpenQuestPicker: (trigger: HTMLButtonElement) => void;
  questTriggerRef: RefObject<HTMLButtonElement | null>;
}

export function QuickAccessGrid({ items, onOpenQuestPicker, questTriggerRef }: QuickAccessGridProps) {
  return (
    <ul className="quick-access-grid">
      {items.map((item) => (
        <li key={item.kind === "resource" ? item.resource.url : "quest-campus-picker"}>
          <QuickAccessCard item={item} onOpenQuestPicker={onOpenQuestPicker} questTriggerRef={questTriggerRef} />
        </li>
      ))}
    </ul>
  );
}
