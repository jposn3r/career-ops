import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "discord-pm-safety",
  company: "Discord",
  title: "PM, Safety Platform",
  comp: "$200K–$290K + equity",
  fit: "65%",
  priority: 16,
  status: "research",
  loc: "Remote (verify US)",
  color: "#5865F2",
  tags: ["PM", "Consumer", "Trust & Safety"],
  strengths: [
    "Consumer platform at scale — priority domain #1",
    "Cross-functional execution from Meta (legal, privacy, safety partners at Quest OS)",
    "Platform PM scope — Quest OS Navigator analog",
  ],
  gaps: [
    { g: "Verify remote eligibility", s: "HIGH" },
    { g: "Not a domain Jake has called out as exciting", s: "MEDIUM" },
    { g: "Lower comp than target (sub-Senior level)", s: "MEDIUM" },
  ],
  verdict: "At-domain but adjacent to core interests. Apply only if other Discord roles close.",
  url: "https://discord.com/jobs/7632697002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
