import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "airbnb-em-listings",
  company: "Airbnb",
  title: "EM, Listings Products",
  comp: "~$270K–$420K base + equity",
  fit: "84%",
  priority: 18,
  status: "watching",
  loc: "Remote (US) — occasional office/offsite",
  color: "#FF5A5F",
  tags: ["EM", "Product-minded", "Consumer", "Marketplace", "Transportation-adjacent"],
  strengths: [
    "Transportation / travel = priority domain #7 (hospitality adjacency)",
    "Airbnb 'live & work anywhere' remote policy = cleanest remote profile in big tech",
    "Cross-functional partnership with design/product/data science/legal/marketing = direct Meta + fuboTV analog",
    "Intelligent supply onboarding/management = platform product work similar to Quest OS Navigator",
    "Consumer product at massive scale",
    "Product-minded EM framing ('define, build, shape future of product flows')",
    "AI-assisted workflows fit — Listings onboarding is a classic AI-augmentation surface",
  ],
  gaps: [
    { g: "Listings = supply/host side vs Jake's pure consumer (demand-side) work — slight pivot", s: "MEDIUM" },
    { g: "No marketplace / two-sided platform domain experience", s: "LOW" },
    { g: "Comp range estimated — confirm during recruiter screen", s: "LOW" },
  ],
  verdict: "Clean remote-US EM at a dream-brand consumer platform. Product-minded framing in the JD is a match. Supply-side pivot is the only real content gap. Strong watching candidate — if this opens or a demand-side EM role drops, go hard.",
  url: "https://careers.airbnb.com/positions/7712903/",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
