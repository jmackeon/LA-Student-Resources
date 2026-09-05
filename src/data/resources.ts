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
  name: string;
  url: string;
  category: ResourceCategory;
  hidden?: boolean;
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
  { name: "CritterCoin", url: "https://www.crittercoin.com/", category: "School Platforms" },
  { name: "Toddle (Tablet)", url: "https://web.toddleapp.com/", category: "School Platforms" },
  { name: "Google Sign-in", url: "https://accounts.google.com/", category: "School Platforms" },
  { name: "Century", url: "https://app.century.tech/login/", category: "School Platforms" },
  { name: "ClickView", url: "https://saml-in3.clickview.co.uk/Shibboleth.sso/LONDON/", category: "School Platforms" },
  { name: "LAC Tech Club", url: "https://club-platform-xsfl.vercel.app/", category: "School Platforms" },

  // Reading & English
  { name: "Calameo 1", url: "https://www.calameo.com/read/0048229539175944afc84", category: "Reading & English" },
  { name: "Calameo 2", url: "https://www.calameo.com/read/0048229531912ec123836", category: "Reading & English" },
  { name: "Calameo 3", url: "https://www.calameo.com/read/0048229539feeb756db5e", category: "Reading & English" },
  { name: "Sensations English", url: "https://resources.sensationsenglish.com/", category: "Reading & English" },
  { name: "Oh My Tales", url: "https://www.ohmytales.com/a/11-12-years/", category: "Reading & English" },
  { name: "Reluctant Reader Books", url: "https://reluctantreaderbooks.com/short-stories-for-high-school/", category: "Reading & English" },
  { name: "Ririro", url: "https://ririro.com/", category: "Reading & English" },
  { name: "Phonics Play", url: "https://www.phonicsplay.co.uk/resources", category: "Reading & English" },
  { name: "Galactic Phonics", url: "https://www.galacticphonics.com/", category: "Reading & English" },
  { name: "Games to Learn English", url: "https://www.gamestolearnenglish.com/", category: "Reading & English" },
  { name: "Oxford Owl", url: "https://www.oxfordowl.co.uk/", category: "Reading & English" },
  { name: "Red Cat Reading", url: "https://www.redcatreading.com/", category: "Reading & English" },

  // Mathematics
  { name: "Polypad", url: "https://polypad.amplify.com/p", category: "Mathematics" },
  { name: "Topmarks", url: "https://www.topmarks.co.uk/", category: "Mathematics" },
  { name: "Mathsframe", url: "https://mathsframe.co.uk/", category: "Mathematics" },
  { name: "Prodigy Game", url: "https://play.prodigygame.com/", category: "Mathematics" },
  { name: "Turtle Diary", url: "https://www.turtlediary.com/", category: "Mathematics" },
  { name: "Math is Fun", url: "https://www.mathsisfun.com/", category: "Mathematics" },
  { name: "Dr Frost", url: "https://www.drfrost.org/", category: "Mathematics" },
  { name: "DFM Live", url: "https://dfm.live/", category: "Mathematics" },
  { name: "White Rose Education", url: "https://infinity.whiteroseeducation.com/", category: "Mathematics" },

  // Coding & Technology
  { name: "Raspberry Pi Editor", url: "https://editor.raspberrypi.org/", category: "Coding & Technology" },
  { name: "Codédex", url: "https://www.codedex.io/", category: "Coding & Technology" },
  { name: "W3Schools", url: "https://www.w3schools.com/", category: "Coding & Technology" },
  { name: "Google Colab", url: "https://colab.research.google.com/", category: "Coding & Technology" },
  { name: "Teachable Machine", url: "https://teachablemachine.withgoogle.com/", category: "Coding & Technology" },
  { name: "WordPress", url: "https://wordpress.com/", category: "Coding & Technology" },
  { name: "Machine Learning for Kids", url: "https://machinelearningforkids.co.uk/", category: "Coding & Technology" },
  { name: "Scratch", url: "https://scratch.mit.edu/", category: "Coding & Technology" },
  { name: "TypingClub", url: "https://www.typingclub.com/", category: "Coding & Technology" },
  { name: "Monkeytype", url: "https://monkeytype.com/", category: "Coding & Technology" },
  { name: "Code.org Studio", url: "https://studio.code.org/", category: "Coding & Technology" },
  { name: "Online Python", url: "https://www.online-python.com/", category: "Coding & Technology" },

  // Creative Tools
  { name: "Adobe Express", url: "https://express.adobe.com/", category: "Creative Tools" },
  { name: "Canva", url: "https://www.canva.com/", category: "Creative Tools" },
  { name: "Padlet", url: "https://padlet.com/", category: "Creative Tools" },
  { name: "Design Arena", url: "https://www.designarena.ai/", category: "Creative Tools" },
  { name: "Google Drawing", url: "https://docs.google.com/drawings/", category: "Creative Tools" },
  { name: "J2e Animate", url: "https://www.j2e.com/jit5#animate/", category: "Creative Tools" },

  // Assessments
  { name: "Wayground", url: "https://wayground.com/", category: "Assessments" },
  { name: "Quest Assessments", url: "https://app.questassessments.com/public/lacas/", category: "Assessments" },
  { name: "Save My Exams", url: "https://www.savemyexams.com/", category: "Assessments" },
  { name: "Oxford AQA", url: "https://www.oxfordaqa.com/", category: "Assessments" },

  // Games & Activities
  { name: "ICT Games", url: "https://ictgames.com/", category: "Games & Activities" },
  { name: "Chess.com", url: "https://www.chess.com/", category: "Games & Activities" },
  { name: "Blooket", url: "https://www.blooket.com/", category: "Games & Activities" },
  { name: "Wordwall", url: "https://wordwall.net/", category: "Games & Activities" },

  // Research & Reference
  { name: "Kiddle", url: "https://www.kiddle.co/", category: "Research & Reference" },
  { name: "Britannica Kids", url: "https://kids.britannica.com/", category: "Research & Reference" },
  { name: "Wikipedia", url: "https://www.wikipedia.org/", category: "Research & Reference" },
  { name: "The National Academy", url: "https://www.thenational.academy/", category: "Research & Reference" },
];
