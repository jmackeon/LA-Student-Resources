export interface QuestCampus {
  /** Stable id, also used to build the campus's directory-resource slug ("quest-assessments-<id>"). */
  id: string;
  name: string;
  url: string;
}

/**
 * The one place Quest Assessments campus URLs are defined. Both the directory's
 * three campus-specific resource records and the Quick Access campus-picker
 * dialog are derived from this list — never hand-type a Quest URL elsewhere.
 */
export const QUEST_CAMPUSES: QuestCampus[] = [
  { id: "casablanca", name: "Casablanca", url: "https://app.questassessments.com/public/lacas/" },
  { id: "dar-bouazza", name: "Dar Bouazza", url: "https://app.questassessments.com/public/ladb/" },
  { id: "rabat", name: "Rabat", url: "https://app.questassessments.com/public/larabat" },
];

/**
 * Sentinel value placed into a stage's `quickAccessResourceIds` to feature the
 * Quest campus-picker launcher instead of a single resource link. Resolved by
 * `getQuickAccessItems` in `quickAccessItems.ts`.
 */
export const QUEST_PICKER_ID = "quest-assessments-picker";

export const QUEST_LOGO = "/app-logos/quest-assessments.jpg";
