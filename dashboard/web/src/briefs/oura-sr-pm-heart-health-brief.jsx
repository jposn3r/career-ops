import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "oura-sr-pm-heart-health",
  company: "Oura",
  title: "Senior PM, Heart Health",
  comp: "~$200K–$280K base + equity",
  fit: "78%",
  priority: 22,
  status: "research",
  loc: "Remote (US) — East Coast preferred",
  color: "#000000",
  tags: ["Sr PM", "Health", "Wearable", "Remote", "East-Coast"],
  strengths: [
    "Consumer wearable health product = Quest OS Navigator wearable analog",
    "East Coast preferred = perfect for NY-based Jake",
    "Remote confirmed",
    "Heart Health is a high-visibility surface at Oura — product leadership scope",
    "PRD authorship at Meta + A/B testing from fuboTV transfers directly",
  ],
  gaps: [
    { g: "Comp below $250K ideal base and far below $500–600K total target", s: "HIGH" },
    { g: "No prior PM title", s: "MEDIUM" },
    { g: "No cardiology/health-sensing domain background", s: "LOW" },
  ],
  verdict: "Narrower scope than Oura Sr Director but East-Coast-preferred + remote + wearable-consumer is a clean fit. Good entry-point PM role at Oura if Sr Director is a reach.",
  url: "https://job-boards.greenhouse.io/oura/jobs/4156536009",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
