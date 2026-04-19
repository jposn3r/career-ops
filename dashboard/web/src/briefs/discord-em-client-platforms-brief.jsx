import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "discord-em-client-platforms",
  company: "Discord",
  title: "Senior EM, Client Platforms",
  comp: "$280K–$395K + equity",
  fit: "85%",
  priority: 12,
  status: "research",
  loc: "Remote (verify US)",
  color: "#5865F2",
  tags: ["EM", "Consumer", "Platform", "Media"],
  strengths: [
    "Consumer media platform = priority domain #1 (creator/entertainment)",
    "Client platforms maps directly to Jake's fuboTV multi-platform + Quest OS Navigator work",
    "Hundreds of millions of consumers — platform-scale thinking",
    "Product-minded EM fit (Discord eng partners closely with PM)",
  ],
  gaps: [
    { g: "Verify fully remote vs hybrid (Discord SF-based)", s: "HIGH" },
    { g: "No gaming / social audio domain experience", s: "LOW" },
  ],
  verdict: "Strong consumer-platform EM fit at a recognizable brand. Verify remote policy before deep prep.",
  url: "https://discord.com/jobs/8045535002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
