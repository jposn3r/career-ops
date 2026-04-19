import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "anthropic-em-agent-prompts",
  company: "Anthropic",
  title: "EM, Agent Prompts & Evals",
  comp: "$320K–$405K + equity",
  fit: "88%",
  priority: 17,
  status: "research",
  loc: "SF / NYC (verify remote)",
  color: "#d97706",
  tags: ["EM", "AI", "Agents", "Evals", "Dream-tier"],
  strengths: [
    "AI assistants = priority domain #3, Anthropic = dream brand",
    "Agent prompts + evals maps DIRECTLY to Jake's Claude Code champion work at Meta",
    "Jake builds custom AI workflows, skills, and evals daily — this IS his side-project stack",
    "Product-minded EM scope (evals are inherently product-shaped)",
  ],
  gaps: [
    { g: "Anthropic is ~7% remote — verify role-specific remote eligibility", s: "HIGH" },
    { g: "No academic ML/research background", s: "LOW" },
  ],
  verdict: "Exceptional narrative fit — Jake's AI tooling expertise IS the job description. Dream brand, but remote policy is gating.",
  url: "https://job-boards.greenhouse.io/anthropic/jobs/5159608008",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
