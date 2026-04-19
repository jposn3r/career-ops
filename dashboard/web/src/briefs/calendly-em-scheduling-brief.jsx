import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "calendly-em-scheduling",
  company: "Calendly",
  title: "EM, Scheduling Products",
  comp: "$232K–$281K base (NYC Tier 1) + bonus + equity",
  fit: "78%",
  priority: 14,
  status: "applied",
  loc: "Remote (US)",
  color: "#006BFF",
  tags: ["EM", "Product-minded", "SaaS", "Remote", "Applied"],
  strengths: [
    "JD explicitly says 'product mindset' + 'hands-on EM' — exact match to Jake's stated preference",
    "Tech stack (TypeScript, Node.js, React) = exact Jake match from fuboTV + RoninVentures",
    "Partnering with Product, Design, Data, Security, GTM = Meta cross-functional mirror",
    "Tier 1 NYC comp ($232–281K base) meets Jake's $250K ideal base target",
    "Consumer SaaS at scale (millions of users) — platform-scale muscle transfers",
    "Remote confirmed",
    "Distributed / service-oriented + API design = Quest OS Navigator multi-team architecture",
  ],
  gaps: [
    { g: "Productivity/scheduling SaaS was NOT on Jake's priority domain list — override active (he applied anyway)", s: "MEDIUM" },
    { g: "On-call rotation required — flag this in offer negotiation", s: "MEDIUM" },
    { g: "Total comp (base + bonus + equity) likely ~$350–450K — below $500–600K target", s: "MEDIUM" },
  ],
  verdict: "Strong role-content + stack + comp floor fit. Applied is the right call. Domain is off-priority but the EM scope and tech match are near-perfect. Probe on-call load + equity upside in interviews before accepting.",
  url: "https://jobs.lever.co/calendly",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
