import MiniBrief from "./_mini-brief.jsx";

export const meta = {
  id: "playstation-sr-manager-client",
  company: "PlayStation",
  title: "Sr Manager, SW Engineering (Client Platform)",
  comp: "$246K–$370K base + bonus + equity",
  fit: "65%",
  priority: 17,
  status: "watching",
  loc: "San Mateo, CA — HYBRID (dealbreaker)",
  color: "#003791",
  tags: ["Sr Manager", "Manages managers", "Gaming", "Media", "Multi-platform", "HYBRID-warning"],
  strengths: [
    "Gaming / entertainment = priority domain #1 adjacency (consumer media at massive scale)",
    "Manages-managers scope = Secondary Director track #2, matches fuboTV 20+ reports era",
    "Multi-platform client (phone, tablet, desktop, web) = direct fuboTV Roku/SmartTV/Apple TV/mobile/web lineage",
    "React Native + native iOS/Android = Jake's fuboTV stack",
    "AI-first team mindset callout = Jake's Claude Code champion angle lands directly",
    "Comp $246–370K base easily clears $250K ideal",
    "0-to-1 AND 1-to-N scaling mandate matches Jake's IC-to-Director arc",
    "Brand recognition — PlayStation is a top-tier consumer entertainment platform",
  ],
  gaps: [
    { g: "San Mateo CA HYBRID — violates Jake's remote-only dealbreaker; Jake is NY-based so relocation also required", s: "HIGH" },
    { g: "Would need major location negotiation OR PS opens a remote carve-out", s: "HIGH" },
    { g: "Gaming-specific domain fluency is light (no direct gaming industry background)", s: "LOW" },
  ],
  verdict: "Role content is top-tier for Jake — multi-platform scope, manages-managers, AI-first, excellent comp. But San Mateo hybrid is a hard dealbreaker. Watching only makes sense if PlayStation has flexed to remote before or if an NY-based carve-out emerges. Otherwise park it.",
  url: "https://www.playstation.com/en-us/corporate/careers/",
};

export const tasks = [];

export default function Brief() { return <MiniBrief meta={meta} />; }
