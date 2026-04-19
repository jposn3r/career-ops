import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "stripe-em-data-engineering",
  company: "Stripe",
  title: "EM, Data Engineering",
  comp: "~$280K–$400K base + equity",
  fit: "75%",
  priority: 26,
  status: "research",
  loc: "Remote (US) — verify",
  color: "#635BFF",
  tags: ["EM", "Data", "Fintech", "Infra", "Remote"],
  strengths: [
    "Fintech at scale = priority domain #10",
    "Stripe = top-tier recognizable fintech brand",
    "Comp range clears $250K base target comfortably",
    "EM scope matches current Meta role",
    "Data engineering = adjacent to technical-growth goal (deeper infra exposure)",
  ],
  gaps: [
    { g: "Data Engineering EM is pure platform/infra — mismatches product-minded preference", s: "HIGH" },
    { g: "Stripe's remote policy varies by team — verify per role", s: "MEDIUM" },
    { g: "No data-pipeline / warehousing systems background", s: "MEDIUM" },
  ],
  verdict: "Elite brand + fintech domain + comp clear target — but role content skews pure infra. Good if Jake wants the Stripe name on the resume and is OK with less product-facing work.",
  url: "https://job-boards.greenhouse.io/stripe/jobs/7551832",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
