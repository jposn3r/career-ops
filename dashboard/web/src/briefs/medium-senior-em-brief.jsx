import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "medium-senior-em",
  company: "Medium",
  title: "Senior Engineering Manager",
  comp: "$230K–$265K base + equity + benefits",
  fit: "92%",
  priority: 11,
  status: "research",
  loc: "Remote (US) — fully distributed",
  color: "#00ab6c",
  tags: ["EM", "Creator", "Media", "Consumer", "Remote-first", "Product-minded"],
  strengths: [
    "Creator / media / publishing = priority domain #1 (direct Substack/streaming lineage)",
    "Product-minded EM is explicitly called out in the JD — matches Jake's stated #1 preference exactly",
    "'No dedicated PM function' → eng leaders own product direction — matches Jake's fuboTV roadmap co-authorship + Meta PRD ownership",
    "Reading experience + editor + navigation = direct Quest OS Navigator analog (Jake owns the highest-traffic surface at Meta)",
    "Fully remote-first, US-distributed — cleanest dealbreaker profile (twice-yearly offsites are fine)",
    "'AI best practices and fluency' responsibility — Jake is a Claude Code champion with custom AI workflows at Meta",
    "A/B testing + experimentation culture — Jake improved fuboTV release cadence and crash rate through data-driven ship-learn loops",
    "Leading senior + staff engineers = exactly current Meta team composition",
    "Consumer product at scale + social platform + subscription business — Jake has all three (fuboTV + Quest OS)",
    "Jake runs VisionQuest.news (writing/publishing) — genuine mission alignment",
  ],
  gaps: [
    { g: "Comp $230–265K base is below Jake's $250K ideal base and far below $500–600K total comp target — equity + bonus would need to close a large gap", s: "HIGH" },
    { g: "Medium is a smaller co vs Netflix/Coinbase — equity upside uncertain", s: "MEDIUM" },
    { g: "Medium requires applications to be human-written (no AI assistance) — draft answers yourself", s: "LOW" },
  ],
  verdict: "One of the cleanest role-content fits in the whole pipeline. The mission, product scope, remote policy, and product-minded EM stance all align perfectly. Comp is the only real gap — only move forward if Medium can push total comp meaningfully higher via equity, OR if you'd trade comp for the mission/remote fit.",
  url: "https://job-boards.greenhouse.io/medium/jobs/4225093009",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
