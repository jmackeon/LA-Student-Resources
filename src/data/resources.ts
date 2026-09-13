export type ResourceCategory =
  | "School Platforms"
  | "Reading & English"
  | "Mathematics"
  | "Coding & Technology"
  | "Creative Tools"
  | "Assessments"
  | "Games & Activities"
  | "Research & Reference";

export interface Resource {
  /** Stable, unique identifier. Used by stage configs to reference resources for Quick Access, and as the default local-icon filename. */
  slug: string;
  name: string;
  url: string;
  category: ResourceCategory;
  hidden?: boolean;
  /** Path to a locally stored icon image (e.g. "/app-logos/century.png"). Falls back to the category icon when omitted or the image fails to load. */
  icon?: string;
  /** Multiplier (>1) on the logo's max render size, for source files with a lot of baked-in transparent padding. Rarely needed. */
  iconScale?: number;
}

/** Category display order used for the category cards and grouped resource listings. */
export const CATEGORIES: ResourceCategory[] = [
  "School Platforms",
  "Reading & English",
  "Mathematics",
  "Coding & Technology",
  "Creative Tools",
  "Assessments",
  "Games & Activities",
  "Research & Reference",
];

export const resources: Resource[] = [
  // School Platforms
  { slug: "crittercoin", name: "CritterCoin", url: "https://www.crittercoin.com/", category: "School Platforms" },
  { slug: "toddle-tablet", name: "Toddle (Tablet)", url: "https://web.toddleapp.com/", category: "School Platforms", icon: "/app-logos/toddle.png" },
  { slug: "google-sign-in", name: "Google Sign-in", url: "https://accounts.google.com/", category: "School Platforms" },
  { slug: "century", name: "Century", url: "https://app.century.tech/login/", category: "School Platforms", icon: "/app-logos/century.png", iconScale: 1.3 },
  { slug: "clickview", name: "ClickView", url: "https://saml-in3.clickview.co.uk/Shibboleth.sso/LONDON/", category: "School Platforms" },
  { slug: "lac-tech-club", name: "LAC Tech Club", url: "https://club-platform-xsfl.vercel.app/", category: "School Platforms" },

  // Reading & English
  { slug: "calameo-1", name: "Calameo 1", url: "https://www.calameo.com/read/0048229539175944afc84", category: "Reading & English" },
  { slug: "calameo-2", name: "Calameo 2", url: "https://www.calameo.com/read/0048229531912ec123836", category: "Reading & English" },
  { slug: "calameo-3", name: "Calameo 3", url: "https://www.calameo.com/read/0048229539feeb756db5e", category: "Reading & English" },
  { slug: "sensations-english", name: "Sensations English", url: "https://resources.sensationsenglish.com/", category: "Reading & English", icon: "/app-logos/sensations-english.png" },
  { slug: "oh-my-tales", name: "Oh My Tales", url: "https://www.ohmytales.com/a/11-12-years/", category: "Reading & English" },
  { slug: "reluctant-reader-books", name: "Reluctant Reader Books", url: "https://reluctantreaderbooks.com/short-stories-for-high-school/", category: "Reading & English" },
  { slug: "ririro", name: "Ririro", url: "https://ririro.com/", category: "Reading & English" },
  { slug: "phonics-play", name: "Phonics Play", url: "https://www.phonicsplay.co.uk/resources", category: "Reading & English", icon: "/app-logos/phonics-play.png" },
  { slug: "galactic-phonics", name: "Galactic Phonics", url: "https://www.galacticphonics.com/", category: "Reading & English", icon: "/app-logos/galactic-phonics.png" },
  { slug: "games-to-learn-english", name: "Games to Learn English", url: "https://www.gamestolearnenglish.com/", category: "Reading & English" },
  { slug: "oxford-owl", name: "Oxford Owl", url: "https://www.oxfordowl.co.uk/", category: "Reading & English" },
  { slug: "red-cat-reading", name: "Red Cat Reading", url: "https://www.redcatreading.com/", category: "Reading & English" },

  // Mathematics
  { slug: "polypad", name: "Polypad", url: "https://polypad.amplify.com/p", category: "Mathematics" },
  { slug: "topmarks", name: "Topmarks", url: "https://www.topmarks.co.uk/", category: "Mathematics", icon: "/app-logos/topmarks.png" },
  { slug: "mathsframe", name: "Mathsframe", url: "https://mathsframe.co.uk/", category: "Mathematics" },
  { slug: "prodigy-game", name: "Prodigy Game", url: "https://play.prodigygame.com/", category: "Mathematics" },
  { slug: "turtle-diary", name: "Turtle Diary", url: "https://www.turtlediary.com/", category: "Mathematics" },
  { slug: "math-is-fun", name: "Math is Fun", url: "https://www.mathsisfun.com/", category: "Mathematics" },
  { slug: "dr-frost", name: "Dr Frost", url: "https://www.drfrost.org/", category: "Mathematics", icon: "/app-logos/dr-frost.webp" },
  { slug: "dfm-live", name: "DFM Live", url: "https://dfm.live/", category: "Mathematics", icon: "/app-logos/dfm-live.jpg" },
  { slug: "white-rose-education", name: "White Rose Education", url: "https://infinity.whiteroseeducation.com/", category: "Mathematics", icon: "/app-logos/white-rose-education.png" },

  // Coding & Technology
  { slug: "raspberry-pi-editor", name: "Raspberry Pi Editor", url: "https://editor.raspberrypi.org/", category: "Coding & Technology" },
  { slug: "codedex", name: "Codédex", url: "https://www.codedex.io/", category: "Coding & Technology" },
  { slug: "w3schools", name: "W3Schools", url: "https://www.w3schools.com/", category: "Coding & Technology", icon: "/app-logos/w3schools.webp" },
  { slug: "google-colab", name: "Google Colab", url: "https://colab.research.google.com/", category: "Coding & Technology", icon: "/app-logos/google-colab.jpg" },
  { slug: "teachable-machine", name: "Teachable Machine", url: "https://teachablemachine.withgoogle.com/", category: "Coding & Technology" },
  { slug: "wordpress", name: "WordPress", url: "https://wordpress.com/", category: "Coding & Technology" },
  { slug: "machine-learning-for-kids", name: "Machine Learning for Kids", url: "https://machinelearningforkids.co.uk/", category: "Coding & Technology" },
  { slug: "scratch", name: "Scratch", url: "https://scratch.mit.edu/", category: "Coding & Technology", icon: "/app-logos/scratch.jpg" },
  { slug: "typingclub", name: "TypingClub", url: "https://www.typingclub.com/", category: "Coding & Technology" },
  { slug: "monkeytype", name: "Monkeytype", url: "https://monkeytype.com/", category: "Coding & Technology" },
  { slug: "code-org-studio", name: "Code.org Studio", url: "https://studio.code.org/", category: "Coding & Technology", icon: "/app-logos/code-org-studio.png" },
  { slug: "online-python", name: "Online Python", url: "https://www.online-python.com/", category: "Coding & Technology", icon: "/app-logos/online-python.png" },

  // Creative Tools
  { slug: "canva", name: "Canva", url: "https://www.canva.com/", category: "Creative Tools", icon: "/app-logos/canva.png" },
  { slug: "padlet", name: "Padlet", url: "https://padlet.com/", category: "Creative Tools", icon: "/app-logos/padlet.jpg" },
  { slug: "design-arena", name: "Design Arena", url: "https://www.designarena.ai/", category: "Creative Tools" },
  { slug: "google-drawing", name: "Google Drawing", url: "https://docs.google.com/drawings/", category: "Creative Tools" },
  { slug: "j2e-animate", name: "J2e Animate", url: "https://www.j2e.com/jit5#animate/", category: "Creative Tools" },

  // Assessments
  { slug: "wayground", name: "Wayground", url: "https://wayground.com/", category: "Assessments", icon: "/app-logos/wayground.webp" },
  { slug: "quest-assessments", name: "Quest Assessments", url: "https://app.questassessments.com/public/lacas/", category: "Assessments", icon: "/app-logos/quest-assessments.jpg" },
  { slug: "save-my-exams", name: "Save My Exams", url: "https://www.savemyexams.com/", category: "Assessments", icon: "/app-logos/save-my-exams.webp" },
  { slug: "oxford-aqa", name: "Oxford AQA", url: "https://www.oxfordaqa.com/", category: "Assessments", icon: "/app-logos/oxford-aqa.png" },

  // Games & Activities
  { slug: "ict-games", name: "ICT Games", url: "https://ictgames.com/", category: "Games & Activities" },
  { slug: "chess-com", name: "Chess.com", url: "https://www.chess.com/", category: "Games & Activities" },
  { slug: "blooket", name: "Blooket", url: "https://www.blooket.com/", category: "Games & Activities" },
  { slug: "wordwall", name: "Wordwall", url: "https://wordwall.net/", category: "Games & Activities" },

  // Research & Reference
  { slug: "kiddle", name: "Kiddle", url: "https://www.kiddle.co/", category: "Research & Reference" },
  { slug: "britannica-kids", name: "Britannica Kids", url: "https://kids.britannica.com/", category: "Research & Reference", icon: "/app-logos/britannica-kids.png" },
  { slug: "wikipedia", name: "Wikipedia", url: "https://www.wikipedia.org/", category: "Research & Reference" },
  { slug: "the-national-academy", name: "The National Academy", url: "https://www.thenational.academy/", category: "Research & Reference", icon: "/app-logos/oak-national-academy.png" },
];

const resourceBySlug = new Map(resources.map((resource) => [resource.slug, resource]));

/**
 * Looks up resources by their stable `slug`, in the given order. Used by stage
 * configs to build a Quick Access list from the shared resource data without
 * duplicating names, URLs, or categories.
 */
export function getResourcesBySlugs(slugs: readonly string[]): Resource[] {
  return slugs.map((slug) => {
    const resource = resourceBySlug.get(slug);
    if (!resource) {
      throw new Error(`Unknown resource slug: "${slug}"`);
    }
    return resource;
  });
}
