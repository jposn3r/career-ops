import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "waymo-senior-pm",
  company: "Waymo",
  title: "Senior PM, Planner",
  comp: "$238K–$302K base + bonus + equity",
  fit: "75%",
  priority: 28,
  status: "watching",
  loc: "Mountain View / SF — HYBRID (dealbreaker)",
  color: "#4285F4",
  tags: ["Sr PM", "AV", "AI/ML", "Consumer", "Transportation", "Location-negotiate"],
  strengths: [
    "Autonomous vehicles = priority domain #4 (Jake called this out explicitly)",
    "Planner team owns AI/ML that enables Waymo Driver to scale — exact AI-native narrative hook",
    "Senior PM scope with cross-functional roadmap ownership = Meta + fuboTV muscle",
    "Comp $238–302K base clears $250K ideal",
    "Dream mission (fully autonomous driving, saves lives)",
    "Cross-functional with engineering / ops / systems = Jake's daily work",
    "Writing PRDs, driving alignment, steering tech priorities = direct Meta Quest OS analog",
  ],
  gaps: [
    { g: "Hybrid MTV/SF — HARD dealbreaker per Jake's remote-only; Jake is NY-based so relocation also required", s: "HIGH" },
    { g: "No prior AV / robotics / ML domain experience", s: "MEDIUM" },
    { g: "No prior PM title (role-pivot via Meta PRDs + fuboTV CPO co-authorship)", s: "MEDIUM" },
  ],
  verdict: "Dream domain + top comp + AI/ML product work. Location is the gating constraint — Waymo's Planner team is MTV/SF hybrid. Watching is the right call; only pursue if Waymo opens a remote carve-out or an East Coast analog emerges.",
  url: "https://careers.withwaymo.com/jobs/4481",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
