import { STAGES, type LearningStage } from "../data/stages";

export const STAGE_STORAGE_KEY = "lac-student-stage-v1";

/**
 * Route for each stage, derived from the single stage configuration in
 * `data/stages.ts` so the route strings are never duplicated here.
 */
export const STAGE_PATHS: Record<LearningStage, string> = {
  primary: STAGES.primary.path,
  "secondary-nc": STAGES["secondary-nc"].path,
  "secondary-igcse": STAGES["secondary-igcse"].path,
};

const VALID_STAGES = new Set<string>(Object.keys(STAGE_PATHS));

function isLearningStage(value: string): value is LearningStage {
  return VALID_STAGES.has(value);
}

/**
 * Reads the saved stage preference. Returns null if nothing is saved, if the
 * saved value is invalid (in which case that entry is removed), or if
 * localStorage is unavailable.
 */
export function getSavedStage(): LearningStage | null {
  try {
    const value = localStorage.getItem(STAGE_STORAGE_KEY);
    if (!value) return null;
    if (isLearningStage(value)) return value;
    localStorage.removeItem(STAGE_STORAGE_KEY);
    return null;
  } catch {
    return null;
  }
}

/** Saves the stage preference. Silently no-ops if localStorage is unavailable. */
export function saveStage(stage: LearningStage): void {
  try {
    localStorage.setItem(STAGE_STORAGE_KEY, stage);
  } catch {
    // Storage blocked/unavailable — navigation still works, it just won't be remembered.
  }
}

/** Removes the saved stage preference. Silently no-ops if localStorage is unavailable. */
export function clearSavedStage(): void {
  try {
    localStorage.removeItem(STAGE_STORAGE_KEY);
  } catch {
    // Nothing to do — there is no persisted value to worry about.
  }
}
