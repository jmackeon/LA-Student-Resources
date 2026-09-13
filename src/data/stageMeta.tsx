import { BookOpen, GraduationCap, School, type LucideIcon } from "lucide-react";
import type { LearningStage } from "./stages";

export interface StageMeta {
  icon: LucideIcon;
  /** Label shown on the root learning-stage selector card. */
  selectorLabel: string;
}

export const STAGE_META: Record<LearningStage, StageMeta> = {
  primary: { icon: BookOpen, selectorLabel: "Primary" },
  "secondary-nc": { icon: School, selectorLabel: "Secondary" },
  "secondary-igcse": { icon: GraduationCap, selectorLabel: "IGCSE" },
};
