import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "waymo-senior-pm",
  company: "Waymo",
  title: "Senior Product Manager",
  comp: "$250K–$380K + equity",
  fit: "80%",
  priority: 5,
  status: "research",
  loc: "Remote (verify)",
  color: "#4285F4",
  tags: ["PM", "AV", "Consumer", "Frontier tech"],
  strengths: [
    "PRD authorship + roadmap ownership at Meta Quest OS",
    "Co-authored company roadmap with CPO at fuboTV",
    "Consumer product orientation — AVs are fundamentally a consumer transport product",
    "Spatial / real-world systems background from Quest OS",
    "AI-native product thinking — Waymo is an ML company",
  ],
  gaps: [
    { g: "No AV/robotics domain experience", s: "HIGH" },
    { g: "Must verify role is remote-eligible (many Waymo roles are SF/Mountain View)", s: "HIGH" },
    { g: "No prior PM title (you're an EM who writes PRDs)", s: "MEDIUM" },
  ],
  verdict: "Strong domain interest (#4 priority). Main risks are remote eligibility + no AV domain. Talk to the recruiter before deep prep.",
  url: "https://app.welcometothejungle.com/jobs/kyWbKy_j",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
