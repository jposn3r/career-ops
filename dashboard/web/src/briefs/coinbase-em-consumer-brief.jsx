import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "coinbase-em-consumer",
  company: "Coinbase",
  title: "EM, Consumer",
  comp: "$275K–$410K + equity",
  fit: "93%",
  priority: 2,
  status: "research",
  loc: "Remote (USA)",
  color: "#0052FF",
  tags: ["EM", "Consumer", "Fintech", "Remote-first", "Named"],
  strengths: [
    "Consumer product EM at scale (Quest OS Navigator, fuboTV Home page + profile selection)",
    "Product-minded EM — writes PRDs, owns roadmap, partners with CPO/PM at fuboTV",
    "Shipping to millions — Quest OS + fuboTV subscribers",
    "A/B testing + KPI/OKR fluency from fuboTV",
    "AI-native practices (Claude Code champion at Meta)",
    "Remote distributed team experience at Meta",
    "Coinbase was named explicitly by Jake as a target company",
  ],
  gaps: [
    { g: "No crypto/Web3 domain experience", s: "MEDIUM" },
    { g: "Fintech regulatory/security fluency", s: "LOW" },
  ],
  verdict: "Top-tier fit. Coinbase is Jake's explicit target and the consumer EM lane matches his Quest OS + fuboTV arc directly.",
  url: "https://www.coinbase.com/careers/positions/5951325",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
