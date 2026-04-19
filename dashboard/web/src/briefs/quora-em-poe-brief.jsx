import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "quora-em-poe",
  company: "Quora",
  title: "EM, Poe Platform",
  comp: "$260K–$360K + equity",
  fit: "92%",
  priority: 4,
  status: "research",
  loc: "Remote (global)",
  color: "#b92b27",
  tags: ["EM", "Consumer AI", "Remote-first", "Platform"],
  strengths: [
    "Consumer AI chat platform — direct sibling product to ChatGPT / Claude",
    "Quora is confirmed remote-first — clean dealbreaker profile",
    "Quest OS Navigator = highest-traffic platform surface (platform thinking transfers)",
    "AI-native practices champion (Claude Code at Meta)",
    "Product-minded EM with PRD fluency",
  ],
  gaps: [
    { g: "No prior consumer AI product experience specifically", s: "LOW" },
  ],
  verdict: "Clean profile fit — remote-first, consumer AI platform, EM scope matches current Meta role. One of the cleanest Tier 1 bets.",
  url: "https://jobs.ashbyhq.com/quora/b6b4d1a8-c1ea-4859-ab52-d3488d9884cf",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
