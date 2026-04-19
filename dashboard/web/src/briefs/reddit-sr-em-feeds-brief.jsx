import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "reddit-sr-em-feeds",
  company: "Reddit",
  title: "Sr EM, Feeds Experience",
  comp: "~$280K–$380K base + equity",
  fit: "88%",
  priority: 13,
  status: "research",
  loc: "Remote (US)",
  color: "#FF4500",
  tags: ["Sr EM", "Consumer", "Media", "Feeds", "AI/ML", "Remote"],
  strengths: [
    "Consumer media/social = priority domain #1 at massive scale",
    "Feeds Experience = highest-traffic surface product (direct Quest OS Navigator analog — highest-traffic surface on Meta spatial platform)",
    "Sr EM scope = exact match for Jake's current Meta role size",
    "Remote US confirmed",
    "Ranking/personalization/A-B-testing muscle = fuboTV Home page + Meta PRD-driven experimentation",
    "Product-minded EM fit (Feeds is inherently product-shaped)",
  ],
  gaps: [
    { g: "No direct ranking/recommender ML systems background — would need fast ramp", s: "MEDIUM" },
    { g: "No community/social-platform product experience specifically", s: "LOW" },
  ],
  verdict: "Top-tier remote-US EM role at a recognizable consumer brand in priority domain #1. Feeds = the product surface. If applying to only one Reddit role, make it this one.",
  url: "https://job-boards.greenhouse.io/reddit/jobs/7376650",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
