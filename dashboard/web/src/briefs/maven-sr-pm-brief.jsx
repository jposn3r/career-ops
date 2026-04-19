import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "maven-sr-pm",
  company: "Maven Clinic",
  title: "Senior PM",
  comp: "~$200K–$290K base + equity",
  fit: "74%",
  priority: 25,
  status: "research",
  loc: "NYC or Remote (US hub)",
  color: "#F15A29",
  tags: ["Sr PM", "Health", "Consumer", "Remote"],
  strengths: [
    "Healthtech consumer = user confirmed OK domain",
    "NYC or remote-hub = viable for NY-based Jake",
    "PRD + roadmap + KPIs = Meta + fuboTV muscle",
    "Reports into VP of Product = clear scope + mentorship",
  ],
  gaps: [
    { g: "Comp below $250K ideal base and far below $500–600K total", s: "HIGH" },
    { g: "No prior PM title", s: "MEDIUM" },
    { g: "No healthtech domain experience", s: "LOW" },
  ],
  verdict: "Backup to Maven Clinic Sr Director role (same company). Apply to Sr Director first; use this as a plan-B at lower seniority at the same brand.",
  url: "https://job-boards.greenhouse.io/mavenclinic/jobs/8039804002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
