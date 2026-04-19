import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "ea-senior-game-pm-codemasters",
  company: "Electronic Arts",
  title: "Senior Game PM — Codemasters F1",
  comp: "~$160K–$230K base + bonus",
  fit: "76%",
  priority: 19,
  status: "research",
  loc: "Remote (US) — verify",
  color: "#FF5050",
  tags: ["Senior PM", "Gaming", "Sports", "Media", "Remote"],
  strengths: [
    "Gaming/entertainment = priority domain #1 adjacency",
    "F1 = sports domain (priority #9) — niche but direct sports title",
    "Consumer gaming product at scale",
    "PRD authorship + roadmap = Jake's Meta + fuboTV muscle",
    "Codemasters/EA Sports has strong live-service / community scale",
    "Remote listed (confirm US specifically)",
  ],
  gaps: [
    { g: "Comp below Jake's $250K ideal base and far below $500–600K total", s: "HIGH" },
    { g: "No prior PM title (title pivot)", s: "MEDIUM" },
    { g: "Racing/game-simulation domain is narrow and unfamiliar", s: "MEDIUM" },
  ],
  verdict: "Gaming + sports + remote combination is rare. Strong domain interest but comp is the gap. Worth a conversation if Jake wants a gaming-industry entry.",
  url: "https://www.ea.com/careers",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
