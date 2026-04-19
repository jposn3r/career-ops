import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "anthropic-em-accelerator-platform",
  company: "Anthropic",
  title: "EM, Accelerator Platform",
  comp: "$340K–$450K + equity",
  fit: "65%",
  priority: 19,
  status: "research",
  loc: "SF / NYC (verify remote)",
  color: "#d97706",
  tags: ["EM", "AI", "Platform", "Infra"],
  strengths: [
    "AI assistants = priority domain #3, Anthropic = dream brand",
    "Platform EM scope — Quest OS Navigator platform analog",
  ],
  gaps: [
    { g: "Accelerator platform = low-level hardware/GPU work", s: "HIGH" },
    { g: "Not a product-minded role", s: "HIGH" },
    { g: "Anthropic remote policy", s: "HIGH" },
  ],
  verdict: "Brand fit only. Content is too infra for Jake's product-minded preference. Skip unless Agent Prompts & Evals closes.",
  url: "https://job-boards.greenhouse.io/anthropic/jobs/5121920008",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
