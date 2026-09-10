export type LearningStage = "primary" | "secondary-nc" | "secondary-igcse";

export interface StageConfig {
  id: LearningStage;
  path: string;
  /** Short label shown discreetly in the header. */
  navLabel: string;
  /** Large centred heading shown above the Quick Access grid. */
  pageTitle: string;
  /** Centred supporting copy shown beneath the heading. */
  subtitle: string;
  /** Suffix used to build the browser tab title: "London Academy | {browserTitle}". */
  browserTitle: string;
  /** Label for the button that returns from the directory to this stage's Quick Access. */
  backLabel: string;
  /** Resources shown in Quick Access, in display order, referenced by stable slug. */
  quickAccessResourceIds: readonly string[];
}

export const STAGES: Record<LearningStage, StageConfig> = {
  primary: {
    id: "primary",
    path: "/primary",
    navLabel: "Primary",
    pageTitle: "Primary Resources",
    subtitle: "Your learning platforms and classroom resources.",
    browserTitle: "Primary Resources",
    backLabel: "Back to Primary Resources",
    quickAccessResourceIds: [
      "toddle-tablet",
      "century",
      "canva",
      "oxford-owl",
      "white-rose-education",
      "topmarks",
      "phonics-play",
      "galactic-phonics",
      "scratch",
      "code-org-studio",
      "britannica-kids",
      "wayground",
    ],
  },
  "secondary-nc": {
    id: "secondary-nc",
    path: "/secondary/nc",
    navLabel: "Secondary NC",
    pageTitle: "Secondary — National Curriculum",
    subtitle: "Your learning platforms and classroom resources.",
    browserTitle: "Secondary NC Resources",
    backLabel: "Back to Secondary Resources",
    quickAccessResourceIds: [
      "toddle-tablet",
      "century",
      "canva",
      "sensations-english",
      "dfm-live",
      "dr-frost",
      "the-national-academy",
      "scratch",
      "code-org-studio",
      "online-python",
      "britannica-kids",
      "wayground",
    ],
  },
  "secondary-igcse": {
    id: "secondary-igcse",
    path: "/secondary/igcse",
    navLabel: "IGCSE",
    pageTitle: "IGCSE Resources",
    subtitle: "Your learning platforms, assessments and revision resources.",
    browserTitle: "IGCSE Resources",
    backLabel: "Back to IGCSE Resources",
    quickAccessResourceIds: [
      "toddle-tablet",
      "century",
      "dfm-live",
      "dr-frost",
      "save-my-exams",
      "oxford-aqa",
      "quest-assessments",
      "the-national-academy",
      "sensations-english",
      "online-python",
      "google-colab",
      "w3schools",
    ],
  },
};

export const STAGE_LIST: StageConfig[] = [STAGES.primary, STAGES["secondary-nc"], STAGES["secondary-igcse"]];
