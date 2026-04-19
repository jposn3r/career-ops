import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "hims-sr-em-careops",
  company: "hims & hers",
  title: "Sr Manager, Engineering (CareOps)",
  comp: "~$260K–$370K base + equity",
  fit: "80%",
  priority: 23,
  status: "research",
  loc: "Remote (US)",
  color: "#6F5641",
  tags: ["Sr EM", "Health", "Consumer", "Remote"],
  strengths: [
    "Consumer healthtech = user confirmed health is OK domain",
    "hims & hers = recognizable direct-to-consumer health brand",
    "Remote US confirmed (hims is remote-first)",
    "Sr Manager / EM scope = current Meta role analog",
    "Cross-functional with PMs + eng leaders + operations = Meta fuboTV muscle",
    "Product-minded EM angle (CareOps powers the consumer care experience)",
  ],
  gaps: [
    { g: "Healthtech / pharmacy domain is unfamiliar", s: "MEDIUM" },
    { g: "CareOps is operations-flavored — less pure consumer-product-feature than stated preference", s: "LOW" },
  ],
  verdict: "Clean remote-US EM at a recognizable consumer health brand. Good Tier 2 option. Apply if hims' mission resonates more than other similar-seniority EM options.",
  url: "https://job-boards.greenhouse.io/himshers/jobs/7638873002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
