import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "reddit-sr-em-ads-measurement",
  company: "Reddit",
  title: "Sr EM, Ads Advanced Measurement",
  comp: "~$290K–$400K base + equity",
  fit: "70%",
  priority: 16,
  status: "research",
  loc: "Remote (US)",
  color: "#FF4500",
  tags: ["Sr EM", "Ads", "Measurement", "Consumer", "Media", "Remote"],
  strengths: [
    "Consumer media/social = priority domain #1",
    "Remote US confirmed",
    "Ad-supported business = fuboTV analog (Jake has ad-adjacent streaming experience)",
    "Experimentation/A-B testing muscle from fuboTV applies directly",
  ],
  gaps: [
    { g: "Ad measurement is narrow/niche — less consumer-product-facing than Feeds", s: "HIGH" },
    { g: "No direct lift-studies / causal-inference / ads-science background", s: "MEDIUM" },
  ],
  verdict: "Solid backup option — same remote + brand + comp profile as other Reddit EMs, but niche scope. Apply to Feeds + Embeddings first.",
  url: "https://job-boards.greenhouse.io/reddit/jobs/7220348",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
