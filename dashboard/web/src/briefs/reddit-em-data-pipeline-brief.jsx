import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "reddit-em-data-pipeline",
  company: "Reddit",
  title: "EM, Data Pipeline",
  comp: "~$260K–$360K base + equity",
  fit: "72%",
  priority: 15,
  status: "research",
  loc: "Remote (US)",
  color: "#FF4500",
  tags: ["EM", "Data", "Platform", "Consumer", "Media", "Remote"],
  strengths: [
    "Consumer media/social = priority domain #1",
    "Remote US confirmed",
    "EM scope with data-at-scale = credible leadership stretch",
    "Reddit = recognizable consumer brand",
  ],
  gaps: [
    { g: "Data Pipeline infra is pure platform, not product-minded — mismatches stated EM-style preference", s: "HIGH" },
    { g: "No direct petabyte-scale data pipeline engineering leadership", s: "MEDIUM" },
  ],
  verdict: "Brand + remote are great, but content is pure data infra — not the product-minded EM lane Jake prefers. Tier 2 backup only if Feeds doesn't move.",
  url: "https://job-boards.greenhouse.io/reddit/jobs/6884160",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
