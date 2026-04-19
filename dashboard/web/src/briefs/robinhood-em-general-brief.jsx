import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "robinhood-em-general",
  company: "Robinhood",
  title: "Engineering Manager",
  comp: "$280K–$395K + equity",
  fit: "55%",
  priority: 23,
  status: "research",
  loc: "Likely hybrid — verify",
  color: "#00C805",
  tags: ["EM", "Fintech", "HYBRID-warning"],
  strengths: [
    "Fintech at scale = priority domain #10",
    "EM scope aligns with current Meta role",
    "Consumer product at scale",
  ],
  gaps: [
    { g: "Robinhood is hybrid-first — verify each role independently", s: "HIGH" },
    { g: "Generic posting — scope unclear until description review", s: "MEDIUM" },
  ],
  verdict: "Low-confidence remote. Listed for breadth. Open the JD and verify remote eligibility before any prep.",
  url: "https://job-boards.greenhouse.io/robinhood/jobs/7813069",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
