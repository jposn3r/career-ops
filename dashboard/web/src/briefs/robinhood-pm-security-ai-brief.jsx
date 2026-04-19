import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "robinhood-pm-security-ai",
  company: "Robinhood",
  title: "Senior PM, Security AI",
  comp: "$260K–$375K + equity",
  fit: "60%",
  priority: 24,
  status: "research",
  loc: "Likely hybrid — verify",
  color: "#00C805",
  tags: ["PM", "AI", "Fintech", "HYBRID-warning"],
  strengths: [
    "AI + fintech crossover — priority domains #3 and #10",
    "AI-native practices champion — Claude Code, MCP, custom workflows",
    "PRD fluency at Meta",
  ],
  gaps: [
    { g: "Robinhood hybrid policy — 3 days/wk at most roles", s: "HIGH" },
    { g: "No security domain experience", s: "MEDIUM" },
  ],
  verdict: "Intriguing AI+fintech angle. Only pursue if remote-only is confirmed in the JD.",
  url: "https://job-boards.greenhouse.io/robinhood/jobs/7707158",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
