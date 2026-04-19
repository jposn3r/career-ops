import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "openai-em-distillation",
  company: "OpenAI",
  title: "EM, Distillation & Detection Platform",
  comp: "$340K–$550K + equity",
  fit: "70%",
  priority: 26,
  status: "research",
  loc: "SF (verify remote)",
  color: "#10a37f",
  tags: ["EM", "AI Safety", "Platform", "Dream-tier"],
  strengths: [
    "AI assistants = priority domain #3, OpenAI = dream brand",
    "Platform EM scope",
    "AI-native engineering culture match",
  ],
  gaps: [
    { g: "OpenAI mostly SF — verify remote eligibility", s: "HIGH" },
    { g: "Distillation & Detection is ML safety research flavor — not product-minded", s: "HIGH" },
    { g: "No ML/research background", s: "MEDIUM" },
  ],
  verdict: "Brand fit strong, but role content skews to ML safety research. Only pursue if ChatGPT Growth EM closes and remote is confirmed.",
  url: "https://jobs.ashbyhq.com/openai/6fbb72e6-1d69-4863-aaf3-3c5830e49e8a/application",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
