import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "hims-em-pharmacy",
  company: "hims & hers",
  title: "EM, Pharmacy",
  comp: "~$240K–$340K base + equity",
  fit: "74%",
  priority: 24,
  status: "research",
  loc: "Remote (US)",
  color: "#6F5641",
  tags: ["EM", "Health", "Pharmacy", "Consumer", "Remote"],
  strengths: [
    "Consumer healthtech = user confirmed OK domain",
    "Remote US confirmed",
    "EM scope matches current Meta role",
    "Pharmacy platform = supply/fulfillment tech = operational consumer surface",
  ],
  gaps: [
    { g: "Pharmacy = niche operations domain (fulfillment, regulatory, RX)", s: "MEDIUM" },
    { g: "Less product-feature-driven than Jake's stated preference", s: "MEDIUM" },
  ],
  verdict: "Backup to the hims CareOps role. Same brand + remote but narrower pharmacy scope. Apply only if CareOps closes or if pharmacy-tech is genuinely interesting.",
  url: "https://job-boards.greenhouse.io/himshers/jobs/7561944002",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
