import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "splice-sr-em-sounds",
  company: "Splice",
  title: "Senior Manager, Engineering — Splice Sounds",
  comp: "~$220K–$310K base + equity",
  fit: "80%",
  priority: 18,
  status: "research",
  loc: "Remote (US)",
  color: "#FF5C00",
  tags: ["Sr EM", "Creator", "Media", "Music", "Full-stack", "Remote"],
  strengths: [
    "Creator platform / music = priority domain #1",
    "Full-stack team leadership = Jake's JS/TS/React/Node stack match",
    "Remote US confirmed",
    "Reports to Director of Engineering for Splice Sounds = clear growth path",
    "Subscription consumer product (Splice Sounds is Splice's flagship product)",
    "Product-minded EM angle (core product team)",
  ],
  gaps: [
    { g: "Smaller scope than Director role above — backup if Director doesn't move", s: "LOW" },
    { g: "No music/audio domain background", s: "LOW" },
  ],
  verdict: "Solid Senior EM fit at a creator-economy company. Product-minded, remote, creator domain. Apply to Splice Director of Engineering first; use this as a secondary option at the same company.",
  url: "https://job-boards.greenhouse.io/splice/jobs/8397239002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
