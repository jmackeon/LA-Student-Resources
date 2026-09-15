import { getResourceBySlug, type Resource } from "./resources";
import { QUEST_LOGO, QUEST_PICKER_ID } from "./questCampuses";

/**
 * A Quick Access slot is normally a direct link to one resource. The Quest
 * Assessments slot is special: three campuses share it, so it opens a campus
 * chooser instead of navigating straight to one campus's URL. This keeps that
 * distinction explicit and typed, rather than treating one campus resource as
 * if it were "the" featured Quest link.
 */
export type QuickAccessItem =
  | { kind: "resource"; resource: Resource }
  | { kind: "quest-campus-picker"; name: "Quest Assessments"; icon: string };

const QUEST_PICKER_ITEM: QuickAccessItem = {
  kind: "quest-campus-picker",
  name: "Quest Assessments",
  icon: QUEST_LOGO,
};

/**
 * Resolves a stage's `quickAccessResourceIds` into displayable items, expanding
 * the `QUEST_PICKER_ID` sentinel into the campus-picker launcher and every
 * other id into its resource record.
 */
export function getQuickAccessItems(ids: readonly string[]): QuickAccessItem[] {
  return ids.map((id) => (id === QUEST_PICKER_ID ? QUEST_PICKER_ITEM : { kind: "resource", resource: getResourceBySlug(id) }));
}
