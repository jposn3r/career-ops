import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "mercury-senior-em",
  company: "Mercury",
  title: "Senior EM, Release Engineering",
  comp: "$240K–$340K + equity",
  fit: "77%",
  priority: 11,
  status: "research",
  loc: "Remote (US/Canada)",
  color: "#5b34da",
  tags: ["EM", "Fintech", "Infra", "Remote"],
  strengths: [
    "Fintech-at-scale = priority domain #10",
    "Confirmed remote US/Canada — clean dealbreaker profile",
    "Platform/infra scale thinking from Quest OS Navigator",
    "CI/CD + dev-tooling experience from 5-week-to-weekly release cadence improvement at fuboTV",
  ],
  gaps: [
    { g: "Release Engineering is infra-flavored, not consumer product", s: "MEDIUM" },
    { g: "Smaller team scope (~4 engineers) than current Meta EM role", s: "LOW" },
  ],
  verdict: "Clean remote fintech EM role, but infra/dev-tooling scope is less 'product-minded' than Jake's stated preference. Solid Tier 2 backup.",
  url: "https://job-boards.greenhouse.io/mercury/jobs/5848405004",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
