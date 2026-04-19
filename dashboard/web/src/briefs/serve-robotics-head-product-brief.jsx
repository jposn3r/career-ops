import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "serve-robotics-head-product",
  company: "Serve Robotics",
  title: "Head of Product, Delivery Platform",
  comp: "$275K–$400K + equity",
  fit: "78%",
  priority: 9,
  status: "research",
  loc: "Remote (verify)",
  color: "#ff6b35",
  tags: ["Head of Product", "Robotics", "Delivery", "Consumer"],
  strengths: [
    "Robotics = priority domain #5",
    "Consumer delivery products align with fuboTV + Quest OS consumer scale",
    "Platform thinking from Quest OS Navigator",
    "Head of Product = step up from EM/PM experience, leveraging full IC-to-Director range",
  ],
  gaps: [
    { g: "No robotics domain experience", s: "MEDIUM" },
    { g: "No prior Head-of-Product title", s: "MEDIUM" },
    { g: "Must verify remote eligibility", s: "HIGH" },
  ],
  verdict: "Stretch role at a priority-domain company. Verify remote first. Score assumes Head title is achievable given Director-of-Eng + Meta PRD/roadmap history.",
  url: "https://jobs.ashbyhq.com/serverobotics/4f91c53a-9ab2-4ee4-94a7-6f1c50be2b8c",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
