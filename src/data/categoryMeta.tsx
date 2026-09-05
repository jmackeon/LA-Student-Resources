import {
  BookOpen,
  Calculator,
  ClipboardCheck,
  Code2,
  Gamepad2,
  Library,
  Palette,
  School,
  type LucideIcon,
} from "lucide-react";
import type { ResourceCategory } from "./resources";

export interface CategoryMeta {
  icon: LucideIcon;
  colorVar: string;
}

/** Icon and accent colour (CSS variable) shown on category cards and resource tiles. */
export const CATEGORY_META: Record<ResourceCategory, CategoryMeta> = {
  "School Platforms": { icon: School, colorVar: "--color-navy" },
  "Reading & English": { icon: BookOpen, colorVar: "--color-emerald" },
  Mathematics: { icon: Calculator, colorVar: "--color-gold" },
  "Coding & Technology": { icon: Code2, colorVar: "--color-navy" },
  "Creative Tools": { icon: Palette, colorVar: "--color-emerald" },
  Assessments: { icon: ClipboardCheck, colorVar: "--color-gold" },
  "Games & Activities": { icon: Gamepad2, colorVar: "--color-navy" },
  "Research & Reference": { icon: Library, colorVar: "--color-emerald" },
};
