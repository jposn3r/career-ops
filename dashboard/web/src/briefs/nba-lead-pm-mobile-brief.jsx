import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "nba-lead-pm-mobile",
  company: "NBA",
  title: "Lead PM, Mobile Platform Experience",
  comp: "$172K–$215K base + bonus",
  fit: "82%",
  priority: 13,
  status: "applied",
  loc: "Remote",
  color: "#17408B",
  tags: ["PM", "Sports", "Media", "Mobile", "Director", "Applied"],
  strengths: [
    "Sports tech = priority domain #9 AND media/entertainment = priority domain #1",
    "NBA digital (NBA App, League Pass, NBA TV) = consumer scale Jake already operates at",
    "Mobile platform + iOS/Android + CMS + store submissions = direct fuboTV Roku/SmartTV/Apple TV lineage",
    "fuboTV live sports stat integration is DIRECT prior experience for NBA",
    "Cross-functional delivery across Eng/Design/QA/Release = Jake's fuboTV pod model + Meta cross-functional work",
    "Remote confirmed",
    "Posting title = Director (matches Jake's secondary-priority Director track)",
  ],
  gaps: [
    { g: "Comp $172–215K base is well below $250K ideal and far below $500–600K total target", s: "HIGH" },
    { g: "Role leans heavy on delivery/release orchestration vs 0-to-1 product vision — closer to TPM flavor than Product-minded EM", s: "MEDIUM" },
    { g: "No prior PM title", s: "MEDIUM" },
  ],
  verdict: "Dream-domain fit (live sports + consumer media + mobile) and you have the exact fuboTV muscle for the job. Applied is the right call. Comp is the main gap — push hard on bonus + title if you get to negotiation stage, and clarify scope in interviews (is this real product leadership or dressed-up TPM?).",
  url: "https://careers.nba.com/",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
