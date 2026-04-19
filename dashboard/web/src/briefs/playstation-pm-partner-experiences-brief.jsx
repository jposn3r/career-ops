import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "playstation-pm-partner-experiences",
  company: "PlayStation",
  title: "PM II, Partner Experiences",
  comp: "~$140K–$220K base + bonus (level II — confirm)",
  fit: "72%",
  priority: 19,
  status: "research",
  loc: "San Diego, CA — NOT remote by default",
  color: "#003791",
  tags: ["PM", "Gaming", "Partner/Publisher", "Media", "Location-negotiate"],
  strengths: [
    "Gaming / media = priority domain #1 adjacency",
    "PARTNER EXPERIENCES = Jake has been on BOTH sides of the platform-partner relationship",
    "  • As a partner: deployed UFC/NBA/Univision on Roku at Endeavor + fuboTV on Roku/Samsung/LG/Vizio/Apple TV",
    "  • Worked directly with Roku partner engineering during those integrations",
    "  • Knows what publishers/developers need from a platform = rare and valuable empathy",
    "Product-minded + technical fluency = direct match to JD callout",
    "Content-creator/publisher digital environment = fuboTV + Endeavor Streaming arc",
    "Cross-stakeholder communication = Meta + fuboTV cross-functional muscle",
  ],
  gaps: [
    { g: "Listed San Diego CA — Jake is NY-based remote-only; requires remote negotiation", s: "HIGH" },
    { g: "Level 'II' is mid-level PM — Jake's background skews more Senior/Staff/Principal", s: "MEDIUM" },
    { g: "No prior formal PM title (role-pivot positioning needed)", s: "MEDIUM" },
    { g: "Gaming-platform specifics (SDK, dev-tools, submission flows) is a learning curve", s: "LOW" },
  ],
  verdict: "Excellent role-content fit via the partner-engineering angle — Jake has been the partner/publisher PlayStation wants to serve. Main risks: location (NY vs San Diego) and title level (II is junior to Jake's experience). Pursue only if PlayStation opens to remote AND willing to level-up to Senior/Sr Technical PM (there's an open Sr Technical PM Partner Experiences role they could redirect him to).",
  url: "https://careers.playstation.com/product-manager-ii-partner-experiences/job/5781472004",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
