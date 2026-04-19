import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "discord-pm-core-product",
  company: "Discord",
  title: "Senior PM, Core Product",
  comp: "$260K–$370K + equity",
  fit: "86%",
  priority: 13,
  status: "research",
  loc: "Remote (verify US)",
  color: "#5865F2",
  tags: ["PM", "Consumer", "Social", "Media"],
  strengths: [
    "Consumer social = priority domain #1 (creator/media/entertainment)",
    "PRD-authoring at Meta, roadmap co-authorship at fuboTV",
    "Consumer scale from Quest OS Navigator + fuboTV subscribers",
    "A/B testing fluency for experimentation-heavy Discord culture",
  ],
  gaps: [
    { g: "Verify remote eligibility (Discord is SF-based, varies by role)", s: "HIGH" },
    { g: "No prior PM title", s: "MEDIUM" },
  ],
  verdict: "Strong consumer-social PM fit at a brand Jake's audience uses. Remote verification is the gating question.",
  url: "https://discord.com/jobs/6791269002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
