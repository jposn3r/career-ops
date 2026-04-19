import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "robinhood-pm-growth",
  company: "Robinhood",
  title: "Senior PM, Growth",
  comp: "$260K–$375K + equity",
  fit: "55%",
  priority: 22,
  status: "research",
  loc: "Menlo Park / NYC — HYBRID 3 days/wk",
  color: "#00C805",
  tags: ["PM", "Fintech", "Growth", "HYBRID-warning"],
  strengths: [
    "Fintech at scale = priority domain #10",
    "Growth PM scope — fuboTV Home page + profile selection were growth surfaces",
    "Consumer scale + A/B testing fluency",
  ],
  gaps: [
    { g: "HYBRID 3 days/week required — violates Jake's remote-only dealbreaker", s: "HIGH" },
    { g: "Jake is NY-based; Menlo Park location is not viable", s: "HIGH" },
    { g: "No prior PM title", s: "MEDIUM" },
  ],
  verdict: "Skip unless Robinhood flexes on remote. Listed for completeness — role content fits but location policy is a hard dealbreaker.",
  url: "https://job-boards.greenhouse.io/robinhood/jobs/7592180",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
