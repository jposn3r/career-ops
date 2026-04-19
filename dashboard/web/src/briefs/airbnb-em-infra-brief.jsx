import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "airbnb-em-infra",
  company: "Airbnb",
  title: "Senior EM, Infrastructure",
  comp: "$280K–$430K + equity",
  fit: "72%",
  priority: 21,
  status: "research",
  loc: "Live & Work Anywhere",
  color: "#FF5A5F",
  tags: ["EM", "Infra", "Consumer", "Remote-anywhere"],
  strengths: [
    "Airbnb supports 'live & work anywhere' — cleanest remote policy in big tech",
    "Consumer transportation = priority domain #7 (hospitality-adjacent)",
    "Consumer scale at a known brand — matches Jake's 'recognizable + impactful' criteria",
    "Infrastructure scope is a step toward more technical growth",
  ],
  gaps: [
    { g: "Infrastructure EM is not 'product-minded' — mismatches stated preference", s: "HIGH" },
    { g: "No distributed-systems infra leadership background on resume", s: "MEDIUM" },
  ],
  verdict: "Remote policy and brand are near-perfect. The role content is infra-heavy, which is a mismatch with stated product-minded EM preference — but good for the technical growth goal.",
  url: "https://careers.airbnb.com/positions/7463777/",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
