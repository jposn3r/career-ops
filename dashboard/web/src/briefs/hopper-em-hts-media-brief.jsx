import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "hopper-em-hts-media",
  company: "Hopper",
  title: "Sr SWE Manager, HTS Media",
  comp: "$210K–$310K + equity",
  fit: "83%",
  priority: 8,
  status: "research",
  loc: "100% Remote (USA)",
  color: "#ff5a5f",
  tags: ["EM", "Transportation", "Consumer", "Ad Tech"],
  strengths: [
    "Transportation = priority domain #7 (consumer travel)",
    "Platform scale EM work — Quest OS Navigator, fuboTV pod rebuild",
    "Ad-adjacent experience from streaming (fuboTV ad-supported tiers)",
    "100% remote USA — clean dealbreaker profile",
  ],
  gaps: [
    { g: "No travel/booking domain experience", s: "LOW" },
    { g: "Ad tech is lighter than pure consumer product work", s: "MEDIUM" },
  ],
  verdict: "Confirmed 100% remote at a recognizable consumer travel brand. Good fit for the 'product-minded EM' preference.",
  url: "https://jobs.ashbyhq.com/hopper/b9f8dc27-1be8-4180-a28a-caa7e12cec0f",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
