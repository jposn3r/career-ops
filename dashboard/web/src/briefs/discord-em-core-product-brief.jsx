import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "discord-em-core-product",
  company: "Discord",
  title: "EM, Core Product (Engagement)",
  comp: "$248K–$279K base + equity",
  fit: "72%",
  priority: 27,
  status: "watching",
  loc: "San Francisco Bay Area — REMOTE negotiation required",
  color: "#5865F2",
  tags: ["EM", "Product-minded", "Consumer", "Social", "Gaming", "Location-negotiate"],
  strengths: [
    "Consumer social/media = priority domain #1 (and 90%+ gaming context)",
    "Hands-on EM + 'jumping into code' = exact match to Jake's stated preference",
    "Product/Design/Data Science/UX/Marketing partnership = Meta + fuboTV cross-functional muscle",
    "Core Product scope = Quest OS Navigator analog (the flagship surface millions use daily)",
    "Full-stack (mobile/web/backend) = Jake's JS/TS/React/Node stack from fuboTV + RoninVentures",
    "React Native bonus = Jake has it",
    "Comp $248–279K base clears $250K ideal; equity upside on top",
  ],
  gaps: [
    { g: "Listing requires SF Bay Area residency or relocation — HARD dealbreaker per Jake's remote-only", s: "HIGH" },
    { g: "Remote must be negotiated — Discord typically expects in-office presence for this team", s: "HIGH" },
    { g: "No prior social/messaging consumer product background", s: "LOW" },
  ],
  verdict: "The role content is exceptional — product-minded hands-on EM, consumer platform at scale, clean stack match, comp clears target. Location is the gating constraint. Pursue only if Discord will flex to remote East Coast; otherwise park. Worth at least a recruiter conversation to test flexibility.",
  url: "https://discord.com/jobs/8485738002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
