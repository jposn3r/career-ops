import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "fanatics-principal-pm-card-factory",
  company: "Fanatics",
  title: "Principal PM, New Card Factory",
  comp: "$180K–$225K base (USA Remote range) + bonus + equity",
  fit: "70%",
  priority: 15,
  status: "applied",
  loc: "NYC listed — REMOTE negotiation required",
  color: "#002244",
  tags: ["PM", "Principal", "Sports", "Collectibles", "AI", "Applied", "Location-negotiate"],
  strengths: [
    "Sports tech / collectibles = priority domain #9",
    "Principal IC track = matches Jake's technical-growth goal + Secondary priority #4",
    "Heavy AI + RAG + Evaluation frameworks focus — exact match to Jake's Claude Code + AI-native champion work at Meta",
    "Workflow automation at scale — Quest OS Navigator platform thinking transfers",
    "AI-assisted coding tools (Copilot/Cursor/ChatGPT) is a 'bonus' — Jake does this daily",
    "Fanatics has broad Fanatics Collectibles / Commerce / Betting ecosystem — real consumer scale",
  ],
  gaps: [
    { g: "Listed as NYC on-site — remote must be negotiated (Jake flagged this explicitly)", s: "HIGH" },
    { g: "Comp $180–225K base is well below $250K ideal and far below $500–600K total target", s: "HIGH" },
    { g: "No prior PM title (Principal IC PM role demands proven PM trajectory)", s: "MEDIUM" },
    { g: "Pre-Press / print production / creative-tooling domain is narrow and unfamiliar", s: "MEDIUM" },
    { g: "Trading cards / collectibles is a niche slice of sports tech — not the mainstream", s: "LOW" },
  ],
  verdict: "Applied with location negotiation already flagged. The AI + evals + workflow automation angle is a strong narrative hook — Jake's Claude Code expertise lands here. But the stack of gaps (on-site default, comp gap, no PM title, niche domain) makes this a stretch unless Fanatics is explicit about remote + willing to push comp meaningfully at Principal level.",
  url: "https://fanaticsinc.com/careers",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
