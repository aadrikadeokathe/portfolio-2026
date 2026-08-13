export const profile = {
  name: "Aadrika Deokathe",
  role: "Product & Technology | Founder | Computer Engineering Student",
  hero: "I build things, analyze what's broken, and make a case for fixing it.",
  tagline: "Product thinker. Data analyst. Builder.",
  intro:
    "Final-year Computer Engineering student at NMIMS Indore. Founder at Hive. Product + technology obsessive.",
  location: "Indore → Pune · Mumbai · Bangalore · Singapore",
  email: "aadrikadeokathe28@gmail.com",
  phone: "",
  github: "https://github.com/aadrikadeokathe",
  linkedin: "https://www.linkedin.com/in/aadrika-deokathe-043a2220b/",
  status: "Open to PM / BA / Data opportunities",
  about: [
    "I'm a final-year Computer Engineering student at NMIMS Indore — but what I actually spend my time doing is building Hive (a creator economy platform I co-founded), analyzing products I think are broken, and trying to get better at the intersection of technology and business strategy.",
    "I've interned as a Product Manager at Start Tech Academy, run experiential marketing campaigns for Red Bull India, and done strategy and AI automation work at MU20 School of Opportunity. I'm not chasing a generic software career — I want to build products that matter and work with people who are ambitious.",
  ],
  currently: ["Building Hive", "Learning product", "Breaking things", "Fixing them"],
};

export const marqueeWords = [
  "Product Thinker",
  "Founder",
  "Data Analyst",
  "Builder",
  "Marketer",
  "AI",
  "Technology",
  "Product",
];

export const heroLabels = ["PRODUCT", "DATA", "AI", "BUILD", "GTM", "RESEARCH"];

export const process = [
  {
    n: "01",
    title: "Find the problem",
    body: "8,000 reviews, one recurring complaint. Start where users are already loud.",
    tone: "violet" as const,
  },
  {
    n: "02",
    title: "Understand the user",
    body: "200+ customer interviews taught me the complaint is never the actual problem.",
    tone: "pink" as const,
  },
  {
    n: "03",
    title: "Build the fix",
    body: "Prototype, ship, or write the PRD. Something has to exist to be argued with.",
    tone: "cobalt" as const,
  },
  {
    n: "04",
    title: "Measure what changed",
    body: "RICE scores, Cohen's Kappa, revenue at risk. Data > vibes.",
    tone: "lime" as const,
  },
];

export type Tone = "violet" | "pink" | "lime" | "cobalt" | "amber";

export type Project = {
  id: string;
  n: string;
  title: string;
  tagline: string;
  status: string;
  stack: string[];
  body: string;
  note?: string;
  live?: string;
  code?: string;
  tone: Tone;
};

export const projects: Project[] = [
  {
    id: "zepto",
    n: "01",
    title: "Zepto Review Intelligence",
    tagline:
      "Found a competitive sentiment gap 2.6x worse than rivals — then built the business case for fixing it.",
    status: "Live",
    stack: ["Python", "SQL", "VADER NLP", "TF-IDF / KMeans", "Streamlit", "Gemini API"],
    body: "End-to-end review intelligence pipeline across 8,000+ Play Store reviews across Zepto, Blinkit and Instamart. Scraped, analyzed, clustered complaints into 5 themes, built an interactive RICE prioritization simulator, validated with Cohen's Kappa, and modeled revenue at risk (₹82–394 Cr) using real public data.",
    live: "https://zepto-review-intelligence-ghywgev87orc5kcvqkuywu.streamlit.app/",
    code: "https://github.com/aadrikadeokathe/zepto-review-intelligence",
    tone: "cobalt",
  },
  {
    id: "hive",
    n: "02",
    title: "Hive",
    tagline: "Building the infrastructure layer for India's creator economy.",
    status: "Live · Phase 1",
    stack: ["Product Strategy", "Positioning", "GTM", "Mobile-first PWA"],
    body: "Two-sided creator marketplace + short-form content agency. I own product strategy, positioning, GTM and on-camera brand presence. Co-founder Ram handles design and editing.",
    live: "https://wearehive.in",
    tone: "pink",
  },
  {
    id: "pitchos",
    n: "03",
    title: "PitchOS",
    tagline: "Upload your pitch. Get a real investor Q&A. Walk out sharper.",
    status: "In development · 2026",
    stack: ["React", "Node.js", "Express", "MySQL", "Gemini API", "JWT Auth"],
    body: "Users upload a pitch deck and receive slide-by-slide AI evaluation, followed by conversational investor-style Q&A and a prioritized improvement report.",
    note: "Built because I needed it.",
    live: "#",
    code: "https://github.com/aadrikadeokathe/pitchos",
    tone: "violet",
  },
  {
    id: "signlang",
    n: "04",
    title: "Multilingual Sign Language Recognition",
    tagline: "Real-time ASL and ISL translation using deep learning.",
    status: "2nd Runner-Up · TechFiesta Hackathon",
    stack: ["Python", "TensorFlow", "Keras", "MediaPipe", "OpenCV", "Flask"],
    body: "Real-time sign language recognition system translating ASL and ISL gestures to English text. Custom CNN with speech-to-ISL module for two-way communication.",
    code: "https://github.com/aadrikadeokathe/Multilingual-Sign-Language-Recognition-System",
    tone: "lime",
  },
];

export const experience = [
  {
    org: "Start Tech Academy",
    role: "PM Intern",
    when: "May 2026 – July 2026",
    place: "Gurugram",
    tone: "violet" as const,
    points: [
      "Wrote and maintained PRDs translating feature requirements into specs for engineering and design",
      "Conducted user research and competitor analysis",
      "Analyzed learner engagement data and recommended UX optimizations",
      "Prioritized features based on user feedback, business goals and market insights",
    ],
  },
  {
    org: "Red Bull India",
    role: "Student Marketeer",
    when: "August 2025 – Present",
    place: "Indore",
    tone: "cobalt" as const,
    points: [
      "Owned end-to-end execution of Canteen Crave at NMIMS Indore",
      "Led Red Bull Sundowner at NMOTSAV",
      "Drove Wings for Life World Run registrations",
      "Activated Red Bull Tetris, Basement and Klear It with KL campaigns",
      "Improved event participation and conversion by an estimated 15–20%",
    ],
  },
  {
    org: "MU20, School of Opportunity",
    role: "Data Analytics & AI Intern",
    when: "May 2024 – July 2024",
    place: "Indore",
    tone: "pink" as const,
    points: [
      "Improved process efficiency by 35%",
      "Improved research output by 55%",
      "Conducted 200+ customer interviews",
      "Managed initiative reaching 3,000+ students and 200+ school principals",
      "Led entrepreneurship and hackathon programs across ASEAN",
      "Authored 15+ research reports",
    ],
  },
];

export const impactStats = [
  { value: 35, suffix: "%", label: "Process efficiency" },
  { value: 55, suffix: "%", label: "Research output" },
  { value: 3000, suffix: "+", label: "Students reached" },
  { value: 200, suffix: "+", label: "Customer interviews" },
];

export const leadership = [
  {
    role: "President",
    org: "STME Vertical — Sangam Committee",
    facts: ["150+ members"],
    tone: "pink" as const,
  },
  {
    role: "Vice President",
    org: "Vedaana Foundation",
    facts: ["30+ community drives", "120+ volunteers"],
    tone: "lime" as const,
  },
  {
    role: "Co-President",
    org: "Turing Club",
    facts: ["10+ flagship events", "500+ participants"],
    tone: "cobalt" as const,
  },
  {
    role: "Secretary General",
    org: "GENxMUN",
    facts: ["20+ MUN conferences"],
    tone: "amber" as const,
  },
];

export const toolbox: {
  group: string;
  tone: Tone;
  items: { name: string; note: string }[];
}[] = [
  {
    group: "Product",
    tone: "violet",
    items: [
      { name: "PRDs", note: "specs engineers actually read" },
      { name: "RICE", note: "argue with numbers" },
      { name: "User Research", note: "200+ interviews deep" },
      { name: "A/B Testing", note: "opinions, tested" },
      { name: "GTM", note: "Indore-first for Hive" },
      { name: "Roadmaps", note: "sequencing is strategy" },
      { name: "Agile", note: "ship in slices" },
      { name: "Jira", note: "certified, sadly fluent" },
    ],
  },
  {
    group: "Data",
    tone: "cobalt",
    items: [
      { name: "Python", note: "scraping to modeling" },
      { name: "SQL", note: "the real superpower" },
      { name: "Power BI", note: "for the stakeholders" },
      { name: "Tableau", note: "for the story" },
      { name: "NLP", note: "8,000 reviews, parsed" },
      { name: "TF-IDF", note: "what people repeat" },
      { name: "VADER", note: "sentiment at scale" },
      { name: "Cohen's Kappa", note: "trust, but validate" },
    ],
  },
  {
    group: "Build",
    tone: "pink",
    items: [
      { name: "React", note: "PitchOS frontend" },
      { name: "Node.js", note: "APIs that hold" },
      { name: "Express", note: "routes and middleware" },
      { name: "MySQL", note: "schemas first" },
      { name: "Tailwind", note: "design tokens > guesswork" },
      { name: "Streamlit", note: "dashboards in a day" },
      { name: "TensorFlow", note: "96.4% accuracy CNN" },
      { name: "OpenCV", note: "hands, in real time" },
      { name: "Git/GitHub", note: "commit messages count" },
    ],
  },
  {
    group: "Languages",
    tone: "lime",
    items: [
      { name: "Python", note: "default thinking language" },
      { name: "SQL", note: "questions → answers" },
      { name: "Java", note: "OOP fundamentals" },
      { name: "C/C++", note: "where it started" },
      { name: "R", note: "stats when needed" },
      { name: "HTML", note: "structure matters" },
      { name: "CSS", note: "yes, on purpose" },
      { name: "JavaScript", note: "everything interactive" },
    ],
  },
];

export const looking = {
  words: ["Building", "Learning", "Analyzing", "Experimenting", "Looking"],
  line: "Looking for a PM, APM, Business Analyst or Data Analyst internship.",
  cities: ["Pune", "Mumbai", "Bangalore", "Singapore"],
  timeline: "Offer by November 2026",
  open: ["6-month internships", "PPO conversations"],
};
