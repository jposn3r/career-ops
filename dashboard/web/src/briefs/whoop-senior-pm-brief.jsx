import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "whoop-senior-pm",
  company: "WHOOP",
  title: "Senior PM, Business Systems",
  comp: "$180K–$260K + equity",
  fit: "62%",
  priority: 25,
  status: "research",
  loc: "Remote (verify)",
  color: "#1a1a1a",
  tags: ["PM", "Sports tech", "Internal Tools"],
  strengths: [
    "Sports tech = priority domain #9",
    "WHOOP is hiring 600+ roles in 2026 — strong growth stage",
    "Consumer hardware-adjacent platform from Quest OS",
  ],
  gaps: [
    { g: "Business Systems PM is internal-tools flavor, not consumer product", s: "HIGH" },
    { g: "Comp below Jake's $250K base target", s: "HIGH" },
    { g: "Verify remote eligibility", s: "MEDIUM" },
  ],
  verdict: "Domain fit (sports) is real, but the role is internal operations, not consumer product. Only pursue if WHOOP opens a consumer-facing PM role too.",
  url: "https://jobs.lever.co/whoop/bbdc51bb-caae-4502-8e2b-1242ff388c01",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
