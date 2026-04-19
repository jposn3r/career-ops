import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "anthropic-em-observability",
  company: "Anthropic",
  title: "EM, Observability",
  comp: "$320K–$405K + equity",
  fit: "58%",
  priority: 20,
  status: "research",
  loc: "SF / NYC (verify remote)",
  color: "#d97706",
  tags: ["EM", "AI", "Infra", "Observability"],
  strengths: [
    "AI assistants = priority domain #3, Anthropic = dream brand",
    "EM scope matches current team size",
  ],
  gaps: [
    { g: "Pure observability/metrics infra — far from product-minded", s: "HIGH" },
    { g: "No SRE/observability background", s: "HIGH" },
    { g: "Anthropic remote policy", s: "HIGH" },
  ],
  verdict: "Brand-only fit. Skip unless all higher-priority Anthropic roles are closed.",
  url: "https://job-boards.greenhouse.io/anthropic/jobs/5111847008",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
