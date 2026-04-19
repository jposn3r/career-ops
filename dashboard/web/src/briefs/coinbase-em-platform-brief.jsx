import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "coinbase-em-platform",
  company: "Coinbase",
  title: "EM, Platform",
  comp: "$275K–$410K + equity",
  fit: "75%",
  priority: 28,
  status: "research",
  loc: "Remote (USA)",
  color: "#0052FF",
  tags: ["EM", "Platform", "Fintech"],
  strengths: [
    "Fintech at scale = priority domain #10",
    "Platform EM = Quest OS Navigator analog",
    "Remote USA confirmed",
    "Coinbase is explicitly named",
  ],
  gaps: [
    { g: "Platform EM is less product-minded than Consumer EM", s: "MEDIUM" },
    { g: "No crypto/Web3 background", s: "MEDIUM" },
  ],
  verdict: "Solid backup to the Coinbase Consumer EM. Apply to both for portfolio breadth at a named target.",
  url: "https://www.coinbase.com/careers/positions/6669525",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
