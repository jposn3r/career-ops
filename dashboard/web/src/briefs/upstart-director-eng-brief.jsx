import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "upstart-director-eng",
  company: "Upstart",
  title: "Director of Engineering, Platform",
  comp: "$290K–$415K + equity",
  fit: "70%",
  priority: 31,
  status: "research",
  loc: "Remote / SF / Columbus OH",
  color: "#11ba8e",
  tags: ["Director", "Fintech", "Platform", "AI/ML"],
  strengths: [
    "Fintech at scale = priority domain #10",
    "Director scope matches fuboTV 20+ reports era",
    "Upstart is AI/ML-first lender — AI-native narrative fit",
    "Remote eligible",
  ],
  gaps: [
    { g: "No consumer-lending domain experience", s: "MEDIUM" },
    { g: "Upstart engineering is platform-heavy, less product-minded", s: "MEDIUM" },
  ],
  verdict: "Strong Director-track remote option in fintech. Less consumer-facing than Coinbase but AI-native angle lands.",
  url: "https://job-boards.greenhouse.io/upstart/jobs/7280808",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
