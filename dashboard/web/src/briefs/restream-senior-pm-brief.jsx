import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "restream-senior-pm",
  company: "Restream",
  title: "Senior PM",
  comp: "$180K–$240K + equity",
  fit: "83%",
  priority: 29,
  status: "research",
  loc: "Remote",
  color: "#3474ff",
  tags: ["PM", "Creator", "Media", "Streaming"],
  strengths: [
    "Creator/streaming = priority domain #1 (direct fuboTV + Endeavor Streaming analog)",
    "Confirmed fully remote",
    "Live video / multi-destination streaming is exactly Jake's fuboTV muscle",
  ],
  gaps: [
    { g: "Comp below Jake's $250K base target", s: "HIGH" },
    { g: "Smaller brand vs Netflix/Discord", s: "MEDIUM" },
    { g: "No prior PM title", s: "LOW" },
  ],
  verdict: "Cleanest narrative fit of any streaming/creator role. Comp is the main gap — push for equity or role-expansion scope.",
  url: "https://jobs.ashbyhq.com/restream/a17a53f8-6360-4b6c-a1a2-7aea87467dd2",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
