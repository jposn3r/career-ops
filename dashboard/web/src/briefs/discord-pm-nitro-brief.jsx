import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "discord-pm-nitro",
  company: "Discord",
  title: "Senior PM, Nitro",
  comp: "$260K–$370K + equity",
  fit: "82%",
  priority: 14,
  status: "research",
  loc: "Remote (verify US)",
  color: "#5865F2",
  tags: ["PM", "Consumer", "Subscription", "Monetization"],
  strengths: [
    "Consumer media = priority domain #1",
    "Subscription business parallels fuboTV's subscriber-based streaming product",
    "Monetization PM = direct analog to fuboTV ad/sub hybrid work",
  ],
  gaps: [
    { g: "Verify remote eligibility", s: "HIGH" },
    { g: "No prior PM title", s: "MEDIUM" },
    { g: "Subscription/premium PM is narrower than general consumer PM", s: "LOW" },
  ],
  verdict: "Narrower scope than Core Product PM but cleaner subscription narrative from fuboTV. Treat as backup if Core PM doesn't move.",
  url: "https://discord.com/jobs/8490274002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
