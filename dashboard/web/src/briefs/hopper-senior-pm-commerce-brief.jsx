import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "hopper-senior-pm-commerce",
  company: "Hopper",
  title: "Senior PM, Enterprise/Commerce",
  comp: "$220K–$320K + equity",
  fit: "74%",
  priority: 32,
  status: "research",
  loc: "100% Remote",
  color: "#ff5a5f",
  tags: ["PM", "Transportation", "Consumer", "Remote"],
  strengths: [
    "Transportation = priority domain #7",
    "100% remote confirmed",
    "Consumer travel scale from fuboTV + Quest OS",
  ],
  gaps: [
    { g: "Enterprise/Commerce lane is narrower than core consumer travel PM", s: "MEDIUM" },
    { g: "No prior PM title", s: "MEDIUM" },
  ],
  verdict: "Clean remote PM role at known consumer brand in a priority domain. Commerce angle is narrower but bridges well from fuboTV ad/sub experience.",
  url: "https://jobs.ashbyhq.com/hopper/35a9bc6c-5426-4986-b5bc-66a29055f26d",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
