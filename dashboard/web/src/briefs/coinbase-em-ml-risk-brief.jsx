import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "coinbase-em-ml-risk",
  company: "Coinbase",
  title: "Senior ML EM, Risk & Fraud",
  comp: "$300K–$440K + equity",
  fit: "78%",
  priority: 27,
  status: "research",
  loc: "Remote (USA)",
  color: "#0052FF",
  tags: ["EM", "AI/ML", "Fintech", "Risk"],
  strengths: [
    "Fintech at scale + AI/ML = priority domains #10 and #3",
    "Remote USA confirmed",
    "AI-native practices champion",
    "Platform thinking from Quest OS",
  ],
  gaps: [
    { g: "No ML/fraud-detection background", s: "HIGH" },
    { g: "Risk & Fraud EM is less product-minded than Coinbase Consumer EM", s: "MEDIUM" },
  ],
  verdict: "Good backup to the Coinbase Consumer EM role. Apply to both — ML/Risk is narrower, Consumer is the top pick.",
  url: "https://www.coinbase.com/careers/positions/6245666",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
