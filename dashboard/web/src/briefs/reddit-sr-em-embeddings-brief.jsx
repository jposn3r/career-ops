import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "reddit-sr-em-embeddings",
  company: "Reddit",
  title: "Sr EM, Unified Embeddings Platform",
  comp: "~$290K–$400K base + equity",
  fit: "78%",
  priority: 14,
  status: "research",
  loc: "Remote (US)",
  color: "#FF4500",
  tags: ["Sr EM", "AI/ML", "Platform", "Consumer", "Media", "Remote"],
  strengths: [
    "Consumer media/social = priority domain #1 + AI/ML = priority domain #3",
    "AI-native practices champion — Embeddings platform is exactly the kind of AI infra Jake evangelizes at Meta",
    "Platform EM scope = Quest OS Navigator analog",
    "Remote US confirmed",
    "Sr EM scope = current Meta role size",
  ],
  gaps: [
    { g: "ML platform infra is deeper tech than product-minded EM — mismatches stated EM-style preference", s: "MEDIUM" },
    { g: "No direct embeddings/vector-DB/retrieval-stack background", s: "MEDIUM" },
  ],
  verdict: "Strong brand + AI/ML narrative, remote confirmed. But platform/infra lean is less 'product-minded' than Reddit Feeds EM. Apply to Feeds first; use this as a backup if Feeds closes.",
  url: "https://job-boards.greenhouse.io/reddit/jobs/7359367",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
