import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "ford-sem-mobile",
  company: "Ford",
  title: "SEM, Mobile (EVDD)",
  comp: "~$200K–$260K base + bonus + stock (LL6)",
  fit: "76%",
  priority: 12,
  status: "applied",
  loc: "Remote (US)",
  color: "#003478",
  tags: ["EM", "Mobile", "EV", "Transportation", "Consumer", "Applied"],
  strengths: [
    "Transportation + EV = priority domain #7 (plus AV adjacency to #4)",
    "Mobile apps at scale — direct fuboTV iOS/Android lineage",
    "Remote US confirmed",
    "'Lead from the front' + 'engineers themselves' = hands-on EM match Jake's preference",
    "Customer focus + software development triad with Product + Design = product-minded EM",
    "Consumer product scale — Ford EV drivers are consumers globally",
    "Jake's fuboTV multi-platform delivery experience transfers well to Ford's EV mobile org",
  ],
  gaps: [
    { g: "Comp (LL6 base $200–260K + ~20% bonus + stock) likely tops ~$350K total — below $500–600K target", s: "HIGH" },
    { g: "Ford is traditional OEM — velocity and ceremony often slower than AI-native startups", s: "MEDIUM" },
    { g: "No automotive/in-vehicle software domain experience", s: "LOW" },
  ],
  verdict: "Solid remote-US EM role at a recognizable brand in a priority domain. Applied already. The main decision point is whether Ford-scale culture + comp ceiling matches where Jake wants to be — or whether this is a backup to dream-tier fintech/AI roles.",
  url: "https://fordcareers.co/LL6SP2",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
