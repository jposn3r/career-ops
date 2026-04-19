import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "maven-clinic-sr-director-product",
  company: "Maven Clinic",
  title: "Senior Director of Product, Healthcare",
  comp: "~$280K–$400K base + equity",
  fit: "80%",
  priority: 21,
  status: "research",
  loc: "NYC or Remote US (Hub cities)",
  color: "#F15A29",
  tags: ["Sr Director", "PM", "Health", "Consumer", "Remote-hub"],
  strengths: [
    "Sr Director + Healthtech consumer = user confirmed health is OK domain",
    "NYC hub OR remote (US) — Jake is NY-based so even hub office is viable",
    "Consumer product at scale (women's + family health)",
    "Sr Director scope matches fuboTV 20+ reports era",
    "Cross-functional execution at scale = Meta + fuboTV muscle",
    "Mission-driven consumer healthcare = clear values story",
  ],
  gaps: [
    { g: "No prior formal Product Director title", s: "HIGH" },
    { g: "No healthtech domain experience", s: "MEDIUM" },
    { g: "'Hub cities' remote means some travel to NYC — fine for NY-based Jake", s: "LOW" },
  ],
  verdict: "Director + healthtech + NYC-friendly remote = strong combination. Apply if open to women's/family health mission. Competes with Pinterest and Oura for Director-of-Product slot.",
  url: "https://job-boards.greenhouse.io/mavenclinic/jobs/8315626002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
