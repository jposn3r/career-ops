import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "discord-em-ads",
  company: "Discord",
  title: "Senior EM, Ads",
  comp: "$280K–$395K + equity",
  fit: "74%",
  priority: 15,
  status: "research",
  loc: "Remote (verify US)",
  color: "#5865F2",
  tags: ["EM", "Ads", "Monetization", "Consumer"],
  strengths: [
    "Consumer platform ads at scale aligns with fuboTV ad-supported work",
    "EM scope with ~10-15 engineer team matches current Meta role",
    "Recognizable brand, priority domain #1",
  ],
  gaps: [
    { g: "Verify remote eligibility", s: "HIGH" },
    { g: "Ad tech is less 'product-minded' than core product EM work", s: "MEDIUM" },
    { g: "No direct ad-platform engineering leadership experience", s: "MEDIUM" },
  ],
  verdict: "Domain fit is strong, but Ads EM is narrower than Jake's stated product-minded preference. Tier 2 backup.",
  url: "https://discord.com/jobs/8049679002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
