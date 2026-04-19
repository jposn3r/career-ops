import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "anthropic-em-inference",
  company: "Anthropic",
  title: "EM, Inference",
  comp: "$340K–$450K + equity",
  fit: "68%",
  priority: 18,
  status: "research",
  loc: "SF / NYC (verify remote)",
  color: "#d97706",
  tags: ["EM", "AI", "Platform", "Infra"],
  strengths: [
    "AI assistants = priority domain #3, Anthropic = dream brand",
    "Platform-scale thinking from Quest OS Navigator",
    "AI-native engineering culture match",
  ],
  gaps: [
    { g: "Inference is low-level infra, not product-minded — mismatches Jake's stated EM style", s: "HIGH" },
    { g: "No GPU/serving-layer systems background", s: "HIGH" },
    { g: "Anthropic remote policy verification needed", s: "HIGH" },
  ],
  verdict: "Dream brand + AI domain, but Inference is deep infra — not Jake's product-minded sweet spot. Backup only.",
  url: "https://job-boards.greenhouse.io/anthropic/jobs/4741102008",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
