import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "ramp-pm-generalist",
  company: "Ramp",
  title: "Product Manager, Generalist (All Levels)",
  comp: "$200K–$360K + equity",
  fit: "72%",
  priority: 30,
  status: "research",
  loc: "NYC / SF (verify remote)",
  color: "#f59e0b",
  tags: ["PM", "Fintech", "Consumer-SMB"],
  strengths: [
    "Fintech at scale = priority domain #10",
    "Ramp is a known growth-stage brand at SMB scale",
    "Generalist posting supports level-flex (Senior / Staff / Principal eligible)",
  ],
  gaps: [
    { g: "Ramp is NYC/SF first — verify remote eligibility on JD", s: "HIGH" },
    { g: "B2B SMB focus less consumer than Coinbase/Robinhood", s: "MEDIUM" },
  ],
  verdict: "Flexible level + fintech brand. Remote verification is gating; if remote-OK this is a solid Tier 2 PM target.",
  url: "https://jobs.ashbyhq.com/ramp/9972df9e-4133-4e2c-9305-49c285b76506",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
