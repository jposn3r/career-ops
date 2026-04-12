import { useState } from "react";

export const tasks = [
  { title: "AI Hiring Assistant Prototype", type: "project", roles: ["anthropic-people-products", "anthropic-consumer-pm"], status: "not-started", desc: "Job desc → interview questions + scorecard using Claude API", priority: "high" },
  { title: "90-Day Plan (People Products)", type: "project", roles: ["anthropic-people-products"], status: "not-started", desc: "What you'd do in your first 90 days as EM", priority: "medium" },
  { title: "MCP Server for HR", type: "project", roles: ["anthropic-people-products"], status: "not-started", desc: "MCP that reads team structure, generates 1:1 prep notes", priority: "medium" },
  { title: "People Process Redesign", type: "project", roles: ["anthropic-people-products"], status: "not-started", desc: "Redesign 3 processes (hiring, perf review, onboarding) as AI-native workflows", priority: "medium" },
  { title: "Greenhouse API & HR Tech", type: "learning", roles: ["anthropic-people-products"], status: "not-started", desc: "Harvest API, candidate data models, onboarding workflows", priority: "medium", hours: 4 },
];

export const meta = {
  id: "anthropic-people-products",
  company: "Anthropic",
  title: "EM, People Products",
  comp: "$320K–$405K",
  fit: "92%",
  priority: 3,
  status: "prep",
  loc: "Remote + Travel",
  tags: ["EM","People Tools","AI-native","Internal"],
  color: "#10b981",
  strengths: ["Direct EM experience match","Ships LLM-native features","Self-sufficient builder","IS the customer","Cross-functional thinker","Remote-friendly"],
  gaps: [{g:"HR tech platforms (Greenhouse/Workday)",s:"LOW"},{g:"MCP production experience",s:"MEDIUM"},{g:"Eval design for LLM outputs",s:"MEDIUM"},{g:"Startup speed narrative",s:"MEDIUM"}],
  verdict: "Near-perfect EM fit. Your current job + AI twist. Remote.",
};

const S = [
  { id:"opp", title:"The Opportunity", icon:"◆", type:"opp", data:{
    role:"Engineering Manager, People Products", comp:"$320K–$405K + equity", team:"People Products (internal tools for hiring, onboarding, teamwork, promotions)", loc:"Remote-Friendly (Travel Required) | San Francisco, CA",
    focus:"Build AI-native internal tools across the full employee lifecycle using Claude with capabilities no external team has. Prototype to production in days.",
    whyNow:"Anthropic grew to ~2,300 employees at a $380B valuation. They're hiring at an insane pace and their internal people processes can't scale with legacy HR tools. This team exists to dogfood Claude on their own operations — recruiting, onboarding, manager effectiveness, promotions. They need someone who's lived through hypergrowth people pain and can build AI solutions for it.",
    status:"Active on Greenhouse. Also hiring a Software Engineer for the same team — signals this is a growing, high-priority team.",
    verdict:"This is the closest match to your current profile of any job I've seen you look at. It's essentially 'be an EM who builds AI-powered people tools at the most important AI company in the world.' You should apply immediately.",
  }},
  { id:"intel", title:"Company Intel", icon:"◇", type:"intel", data:{
    news:[
      {e:"Anthropic's internal AI research", d:"Engineers use Claude for 59% of daily work, achieving +50% productivity. 14% of power users see 100%+ gains. The People Products team has access to capabilities no external team has."},
      {e:"HR Cowork Plugin launched", d:"Anthropic ships an HR plugin for Cowork with skills for job descriptions, onboarding materials, offer letters. This team likely built it or will own it going forward."},
      {e:"Labs expansion", d:"Mike Krieger (ex-Instagram CPO) moved to Labs. Ami Vora leads Product. CTO Rahul Patil. Culture prizes speed, autonomy, and first-principles thinking."},
      {e:"Agent Skills as open standard", d:"Skills spec adopted by 30+ platforms. MCP at 100M monthly downloads. The infrastructure this team builds on is the most adopted AI tooling ecosystem in the industry."},
      {e:"Enterprise is 80% of revenue", d:"Internal tools that make Anthropic's own people processes work better directly inform the enterprise product. What you build internally may become product externally."},
    ],
    hrStack:[
      {name:"Greenhouse", role:"ATS (Applicant Tracking System) — likely their recruiting backbone", rel:"Must learn"},
      {name:"Workday / Rippling", role:"HRIS — employee records, payroll, benefits", rel:"Nice to have"},
      {name:"Claude API + MCP", role:"The AI layer — building tools, evals, prompts on top of Claude", rel:"Core to role"},
      {name:"Cowork + Skills", role:"Plugin/skill framework for deploying internal AI workflows", rel:"Core to role"},
      {name:"Internal custom tools", role:"Full-stack apps built by this team for recruiters, managers, new hires", rel:"What you'll build"},
    ],
  }},
  { id:"fit", title:"Fit Analysis", icon:"△", type:"fit", data:{
    strengths:[
      "4+ years EM experience in ambiguous environment — you're an EM at Meta Reality Labs managing 12 engineers in a fast-moving, matrixed org. Direct match.",
      "You've shipped LLM-native features — you build Claude skills, artifacts, and AI-powered workflows daily. You literally built a skill system in this conversation.",
      "Self-sufficient end-to-end builder — NexusWealth, Hostr, your newsletter tools, the skills you build. You go from idea to production without needing a designer or PM.",
      "You understand people processes deeply — as an EM, you hire, onboard, run performance reviews, calibrate promotions. You ARE the customer for this team's products.",
      "Mission-driven AI practitioner — you're not just building with AI, you're thinking about how AI changes work. Your promo tracker skill, morning brief, team tools — all people-process AI tools.",
      "Cross-functional thinker — the posting wants someone who reasons across product, design, and engineering. Your EM role requires exactly this.",
    ],
    adjacent:[
      "Meta → Anthropic culture: Meta is big-company process-heavy. Anthropic wants low-structure, high-autonomy, prototype-to-production-in-days speed. You'll need to demonstrate you can operate in a startup-speed environment.",
      "Your startup experience (NexusWealth CTO, Hostr) actually matters MORE than Meta here. Lead with that energy.",
      "The 'define the blueprint for AI at work' framing maps directly to your interest in using AI to augment your own management workflows.",
    ],
    gaps:[
      {gap:"Direct experience with HR tech platforms (Greenhouse, Workday, Rippling)", critical:"LOW", note:"They list this as 'nice to have.' You'll learn Greenhouse APIs in a week. Your deep understanding of the hiring/onboarding process as an EM is more valuable than knowing a specific tool.", time:"1-2 weeks"},
      {gap:"MCP / Claude integration production experience", critical:"MEDIUM", note:"You use Claude extensively but haven't built production MCP servers or Claude API integrations at scale. Build one this month — an MCP server that connects to a people process.", time:"2 weeks"},
      {gap:"Eval design for LLM outputs", critical:"MEDIUM", note:"The role mentions building 'evals' for AI-native workflows. Study Anthropic's eval methodology and build a simple eval pipeline for an LLM-powered tool.", time:"2 weeks"},
      {gap:"Demonstrating startup speed vs Meta pace", critical:"MEDIUM", note:"Anthropic's culture is 'prototype to production in days.' Prepare stories from your startup experience, not Meta, to demonstrate this speed.", time:"Narrative prep"},
    ],
  }},
  { id:"knowledge", title:"Knowledge Map", icon:"▽", type:"knowledge", data:[
    {name:"Greenhouse API & HR Tech Integration", topics:["Greenhouse Harvest API: candidates, jobs, scorecards, offers","Webhook patterns for real-time hiring pipeline events","ATS data models: stages, sources, rejection reasons, custom fields","Building AI-powered candidate screening and routing","Onboarding workflow automation: offer → Day 1 checklist"], ai:"Use Claude to explore the Greenhouse API docs. Build a prototype tool that reads candidates from Greenhouse and uses Claude to summarize their qualifications."},
    {name:"Claude API + MCP for Internal Tools", topics:["Messages API: streaming, tool use, system prompts","MCP server architecture: tools, resources, prompts","Building Claude-powered internal chatbots and workflows","Eval design: measuring LLM output quality for HR tasks","Prompt engineering for sensitive HR contexts (bias, fairness, privacy)"], ai:"Build an MCP server that connects Claude to a mock HR dataset. Practice designing prompts that handle sensitive people data appropriately."},
    {name:"AI-Native People Processes", topics:["AI-assisted hiring: screening, scheduling, interview feedback synthesis","Onboarding automation: personalized ramp plans, buddy matching","Manager effectiveness tools: 1:1 prep, feedback synthesis, calibration support","Performance review AI: evidence gathering, bias detection, writing assistance","Internal mobility: skills matching, career path recommendations"], ai:"For each process, ask Claude to design an AI-native workflow. Compare it to how you do it at Meta today. Identify the 3 highest-leverage opportunities."},
    {name:"Anthropic Culture & Values", topics:["'Hold light and shade' — understand both AI's upside and downside","'Be good to our users' — users include employees, policymakers, humanity","'Don't invent a spaceship if you need a bicycle' — practical simplicity","Constitutional AI and RLHF — the research philosophy","How Anthropic's internal AI usage study shapes their culture (59% daily use, +50% productivity)"], ai:"Read Anthropic's published values, their internal AI usage research paper, and their careers page. Prepare to articulate why their mission matters to you personally."},
    {name:"Interview Prep: Anthropic EM", topics:["Coding: multi-step implementation problems, clean code, evolving requirements (Python)","System design: design an AI-powered onboarding system, a hiring pipeline tool","Behavioral: safety-first decisions, managing ambiguity, building in low-structure environments","Mission alignment: why Anthropic, why People Products, why now","People management: growing teams, handling hard feedback, making decisions with incomplete info"], ai:"Run mock interviews with Claude playing an Anthropic hiring manager for People Products. Practice explaining how you'd redesign Meta's hiring process using Claude."},
  ]},
  { id:"plan", title:"30-Day Sprint", icon:"⬡", type:"plan", data:[
    {week:"Week 1: Build Your Portfolio Piece", days:[
      {day:"Days 1-2", focus:"AI Hiring Assistant Prototype", tasks:["Build a full-stack app: paste a job description → Claude analyzes it → generates structured interview questions + scorecard","Use Next.js + TypeScript + Anthropic API with streaming","Deploy to Vercel. This is your 'I understand People Products' artifact."], hrs:"4-5 hrs/day"},
      {day:"Days 3-4", focus:"Add Greenhouse Integration", tasks:["Study Greenhouse Harvest API docs (use Claude to accelerate)","Add mock Greenhouse data: pull candidates, map them to job requirements","Build a 'candidate summary' feature that uses Claude to synthesize a candidate's application"], hrs:"4-5 hrs/day"},
      {day:"Days 5-6", focus:"Add Eval Pipeline", tasks:["Build a simple eval framework: test your Claude prompts against known-good outputs","Measure accuracy, bias, and consistency of the AI-generated interview questions","Document your eval methodology — this shows you understand LLM quality assurance"], hrs:"4-5 hrs/day"},
      {day:"Day 7", focus:"Synthesis", tasks:["Polish and deploy. Write a README explaining architecture decisions.","Prepare to demo this in 5 minutes to an interviewer."], hrs:"2-3 hrs"},
    ]},
    {week:"Week 2: Deepen AI + People Process Knowledge", days:[
      {day:"Days 8-9", focus:"MCP Server for HR", tasks:["Build an MCP server that connects Claude to people process data","Example: an MCP that reads team structure, project assignments, and generates 1:1 prep notes","This demonstrates MCP expertise AND people product thinking"], hrs:"4-5 hrs/day"},
      {day:"Days 10-11", focus:"Study Anthropic's Internal AI Research", tasks:["Read 'How AI is Transforming Work at Anthropic' in full detail","Study the economic primitives framework (Jan 2026)","Write up: how would you apply these findings to People Products?","Prepare to discuss delegation patterns, skill erosion, and AI-augmented management"], hrs:"3-4 hrs/day"},
      {day:"Days 12-13", focus:"People Process Redesign Exercise", tasks:["Pick 3 Meta people processes you know well (hiring, perf review, onboarding)","Redesign each one as an AI-native workflow using Claude","Write a 1-pager for each: current state, AI-native state, implementation plan","These become interview talking points and demonstrate product thinking"], hrs:"3-4 hrs/day"},
      {day:"Day 14", focus:"Synthesis", tasks:["Compile your portfolio: hiring assistant + MCP server + process redesigns","Prepare a 'My Vision for People Products at Anthropic' doc"], hrs:"2-3 hrs"},
    ]},
    {week:"Week 3: Narrative + Anthropic Deep Dive", days:[
      {day:"Days 15-16", focus:"Anthropic Culture Immersion", tasks:["Read every Anthropic engineering blog post from 2025-2026","Study Constitutional AI, RLHF, and interpretability research at a high level","Watch any available talks from Anthropic leadership (Dario, Daniela, Mike Krieger)","Prepare your 'why Anthropic' story — tie it to your personal experience with AI changing work"], hrs:"3-4 hrs/day"},
      {day:"Days 17-18", focus:"EM → EM Narrative", tasks:["Unlike the IC roles, you're staying in management. The story is easier.","Frame: 'I've managed teams through hypergrowth, I've felt the pain of bad people tools, I've been building AI solutions for my own management workflows, and now I want to do it full-time at the company that's defining AI's future'","Prepare 5 STAR stories: hiring in ambiguity, onboarding at scale, managing performance with limited data, building tools to augment your team, making hard decisions fast"], hrs:"3-4 hrs/day"},
      {day:"Days 19-20", focus:"Competitive Landscape", tasks:["Research AI HR tools: Juicebox, HireVue, Eightfold, Paradox","Understand what's possible externally, and why building internally at Anthropic is different (access to unreleased Claude capabilities, internal dogfooding, zero vendor lock-in)","Prepare opinions on where AI in HR is overhyped vs underhyped"], hrs:"3-4 hrs/day"},
      {day:"Day 21", focus:"Synthesis", tasks:["Finalize resume emphasizing: EM experience, AI building, people process expertise","Draft cover letter. Review with Claude."], hrs:"2-3 hrs"},
    ]},
    {week:"Week 4: Interview Prep + Apply", days:[
      {day:"Days 22-24", focus:"Technical Interview Prep", tasks:["Practice Anthropic-style coding: multi-step implementation in Python with evolving requirements","System design: 'Design an AI-powered interview feedback system for 2,300 employees'","Design: 'Build an onboarding agent that personalizes the first 90 days for each new hire'","Practice explaining your portfolio projects technically"], hrs:"4-5 hrs/day"},
      {day:"Days 25-27", focus:"Behavioral + Mission", tasks:["Mock interviews with Claude as Anthropic hiring manager","Practice: 'How would you build a team from scratch in a low-structure environment?'","Practice: 'Tell me about a time you shipped something that changed how people work'","Practice: 'What's your view on AI replacing HR functions vs augmenting them?'"], hrs:"3-4 hrs/day"},
      {day:"Days 28-29", focus:"Full Mock Loop", tasks:["Day 1: recruiter screen + coding simulation","Day 2: system design + behavioral + culture fit","Refine weak areas based on feedback"], hrs:"4-5 hrs/day"},
      {day:"Day 30", focus:"Apply", tasks:["Submit application with tailored resume, cover letter, and link to your portfolio","Reach out to Anthropic People Products engineers on LinkedIn","You're ready."], hrs:"2-3 hrs"},
    ]},
  ]},
  { id:"tactics", title:"AI Tactics", icon:"□", type:"tactics", data:[
    {name:"Claude as People Process Designer", desc:"Redesign real HR workflows you've experienced as an EM. Compare your AI-native design to how it works at Meta today.", ex:"I'm an engineering manager who runs performance calibrations. Design an AI-native calibration workflow that uses Claude to synthesize evidence, detect bias patterns, and generate draft assessments. Walk me through the architecture."},
    {name:"Claude as Mock Interviewer", desc:"Anthropic's interview is rigorous. Practice with Claude playing the hiring manager for People Products specifically.", ex:"You're the hiring manager for Anthropic's People Products team. Interview me for the EM role. Ask me about my experience building internal tools, managing in ambiguous environments, and my vision for AI-native people processes. Be tough."},
    {name:"Claude as Eval Designer", desc:"Learn to build eval pipelines for LLM outputs — a key skill for this role.", ex:"Help me design an eval framework for an LLM-powered interview question generator. What metrics should I track? How do I measure bias? What's a good test dataset? Walk me through building this in Python."},
    {name:"Claude as Greenhouse API Tutor", desc:"Quickly learn the Greenhouse API by building with Claude as your guide.", ex:"Walk me through the Greenhouse Harvest API. Show me how to pull candidate data, map it to a structured format, and use Claude to generate a candidate summary. Build a working example in TypeScript."},
    {name:"Claude as Research Synthesizer", desc:"Digest Anthropic's publications to prep for mission-alignment questions.", ex:"Summarize Anthropic's 'How AI is Transforming Work' research. What are the key findings? What concerns did engineers raise? How should a People Products team respond to the skill erosion and collaboration decline findings?"},
  ]},
  { id:"res", title:"Resources", icon:"◈", type:"res", data:[
    {cat:"Build With", items:["Anthropic TypeScript SDK","Greenhouse Harvest API docs","MCP specification (modelcontextprotocol.io)","Next.js App Router + Vercel","Agent Skills spec (agentskills.io)"]},
    {cat:"Study", items:["'How AI is Transforming Work at Anthropic' (anthropic.com/research)","Anthropic economic primitives framework (Jan 2026)","Anthropic Engineering Blog","Anthropic careers page — values and interview process","Constitutional AI paper"]},
    {cat:"Interview Prep", items:["interviewing.io Anthropic guide — real candidate reports","Glassdoor Anthropic EM interview experiences","LeetCode mediums in Python (implementation quality focus)","System design: real-time collaborative tools, internal platforms"]},
    {cat:"HR Tech Landscape", items:["Greenhouse partner ecosystem and API documentation","Workday / Rippling overview for HRIS context","Juicebox.ai, HireVue, Eightfold — external AI HR tools","Anthropic's own HR Cowork plugin (study the patterns)"]},
  ]},
];

const Badge = ({color,children}) => {
  const c = {green:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",amber:"bg-amber-500/15 text-amber-300 border-amber-500/30",red:"bg-red-500/15 text-red-300 border-red-500/30",blue:"bg-blue-500/15 text-blue-300 border-blue-500/30",gray:"bg-gray-500/15 text-gray-300 border-gray-500/30"};
  return <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c[color]}`}>{children}</span>;
};

const Opp = ({d}) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {[["ROLE",d.role],["COMP",d.comp],["TEAM",d.team],["LOCATION",d.loc]].map(([l,v])=><div key={l} className="bg-white/5 border border-white/10 rounded-lg p-4"><div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">{l}</div><div className="text-white text-sm">{v}</div></div>)}
    </div>
    <div className="bg-white/5 border border-white/10 rounded-lg p-4"><div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">FOCUS</div><div className="text-white text-sm">{d.focus}</div></div>
    <div className="bg-emerald-900/20 border border-emerald-600/30 rounded-lg p-4"><div className="text-xs tracking-widest text-emerald-400 mb-1.5 font-mono">WHY NOW</div><div className="text-emerald-200 text-sm leading-relaxed">{d.whyNow}</div></div>
    <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4"><div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">STATUS</div><div className="text-amber-200 text-sm">{d.status}</div></div>
    <div className="bg-emerald-900/30 border border-emerald-500/40 rounded-lg p-4"><div className="text-xs tracking-widest text-emerald-300 mb-1.5 font-mono">BOTTOM LINE</div><div className="text-emerald-100 text-sm font-medium">{d.verdict}</div></div>
  </div>
);

const Intel = ({d}) => (
  <div className="space-y-6">
    <div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">RECENT DEVELOPMENTS</div>{d.news.map((n,i)=><div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 mb-2"><div className="text-white text-sm font-medium mb-1">{n.e}</div><div className="text-gray-400 text-sm">{n.d}</div></div>)}</div>
    <div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">HR TECH STACK (EXPECTED)</div>{d.hrStack.map((s,i)=><div key={i} className="flex items-center gap-3 py-1.5"><Badge color={s.rel==="Core to role"?"green":s.rel==="Must learn"?"amber":"gray"}>{s.rel}</Badge><span className="text-white text-sm font-medium min-w-28">{s.name}</span><span className="text-gray-500 text-sm">{s.role}</span></div>)}</div>
  </div>
);

const FitView = ({d}) => (
  <div className="space-y-6">
    <div><div className="text-xs tracking-widest text-emerald-400 mb-3 font-mono">STRENGTHS — THIS ROLE IS YOU</div>{d.strengths.map((s,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-emerald-400 mt-0.5 text-xs">✓</span><span className="text-gray-300 text-sm">{s}</span></div>)}</div>
    <div><div className="text-xs tracking-widest text-blue-400 mb-3 font-mono">ADJACENT — REFRAME THESE</div>{d.adjacent.map((a,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-blue-400 mt-0.5 text-xs">↗</span><span className="text-gray-300 text-sm">{a}</span></div>)}</div>
    <div><div className="text-xs tracking-widest text-red-400 mb-3 font-mono">GAPS</div>{d.gaps.map((g,i)=><div key={i} className="border border-white/10 rounded-lg p-3 mb-2"><div className="flex items-center gap-2 mb-1"><span className="text-white text-sm font-medium">{g.gap}</span><Badge color={g.critical==="LOW"?"green":g.critical==="MEDIUM"?"amber":"red"}>{g.critical}</Badge></div><p className="text-gray-400 text-sm">{g.note}</p><div className="text-xs text-gray-600 font-mono mt-1">Close in: {g.time}</div></div>)}</div>
  </div>
);

const KMap = ({d}) => {
  const [exp,setExp] = useState(null);
  return <div className="space-y-2">{d.map((k,i)=><div key={i} className="border border-white/10 rounded-lg overflow-hidden"><button onClick={()=>setExp(exp===i?null:i)} className="w-full text-left p-4 flex items-center justify-between hover:bg-white/5 transition-colors"><span className="text-white font-medium text-sm">{k.name}</span><span className="text-gray-500">{exp===i?"−":"+"}</span></button>{exp===i&&<div className="px-4 pb-4 border-t border-white/5"><div className="mt-3 space-y-1.5">{k.topics.map((t,j)=><div key={j} className="flex items-start gap-2"><span className="text-amber-400 mt-1 text-xs">›</span><span className="text-gray-300 text-sm">{t}</span></div>)}</div><div className="mt-3 bg-blue-900/20 border border-blue-500/20 rounded-lg p-3"><div className="text-xs tracking-widest text-blue-400 mb-1 font-mono">AI ACCELERATION</div><p className="text-blue-200 text-sm">{k.ai}</p></div></div>}</div>)}</div>;
};

const Plan = ({d}) => {
  const [aw,setAw] = useState(0);
  const w = d[aw];
  return <div><div className="flex gap-2 mb-4 overflow-x-auto">{d.map((_,i)=><button key={i} onClick={()=>setAw(i)} className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${aw===i?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-white/5 text-gray-400 border border-white/10"}`}>Wk {i+1}</button>)}</div><h4 className="text-white font-medium mb-4">{w.week}</h4><div className="space-y-4">{w.days.map((d,i)=><div key={i} className="border border-white/10 rounded-lg p-4"><div className="flex items-center justify-between mb-3"><div><span className="text-amber-400 font-mono text-xs">{d.day}</span><span className="text-gray-500 mx-2">·</span><span className="text-white text-sm font-medium">{d.focus}</span></div><span className="text-gray-600 text-xs font-mono">{d.hrs}</span></div><div className="space-y-1.5">{d.tasks.map((t,j)=><div key={j} className="flex items-start gap-2"><span className="text-gray-600 mt-0.5 text-xs font-mono">{String(j+1).padStart(2,"0")}</span><span className="text-gray-300 text-sm">{t}</span></div>)}</div></div>)}</div></div>;
};

const Tactics = ({d}) => <div className="space-y-4">{d.map((t,i)=><div key={i} className="border border-white/10 rounded-lg p-4"><div className="text-white font-medium text-sm mb-1">{t.name}</div><p className="text-gray-400 text-sm mb-3">{t.desc}</p><div className="bg-gray-900 rounded-lg p-3 border border-white/5"><div className="text-xs text-gray-600 font-mono mb-1">PROMPT</div><p className="text-amber-300 text-sm italic">"{t.ex}"</p></div></div>)}</div>;

const Res = ({d}) => <div className="space-y-6">{d.map((c,i)=><div key={i}><div className="text-xs tracking-widest text-amber-400 mb-2 font-mono">{c.cat.toUpperCase()}</div>{c.items.map((item,j)=><div key={j} className="flex items-start gap-2 mb-1"><span className="text-gray-600 mt-0.5 text-xs">›</span><span className="text-gray-300 text-sm">{item}</span></div>)}</div>)}</div>;

const R = {opp:Opp,intel:Intel,fit:FitView,knowledge:KMap,plan:Plan,tactics:Tactics,res:Res};

export default function Brief() {
  const [a,setA] = useState("opp");
  const s = S.find(x=>x.id===a);
  const V = R[s.type];
  return (
    <div className="min-h-screen text-white" style={{background:"linear-gradient(160deg,#090909 0%,#0f0f0f 50%,#0a0a0a 100%)",fontFamily:"'IBM Plex Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');.font-mono{font-family:'IBM Plex Mono',monospace}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}`}</style>
      <div className="border-b border-white/10 px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/><span className="text-xs font-mono text-gray-500 tracking-widest">JOB PREP INTELLIGENCE BRIEF</span></div><h1 className="text-2xl md:text-3xl font-light text-white mb-2" style={{letterSpacing:"-0.02em"}}>Anthropic · EM, People Products</h1><p className="text-gray-500 text-sm">Build AI-native people tools at the most consequential AI company in the world</p></div></div>
      <div className="border-b border-white/10 px-6 py-3 sticky top-0 z-10" style={{background:"rgba(9,9,9,0.95)",backdropFilter:"blur(12px)"}}><div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto">{S.map(x=><button key={x.id} onClick={()=>setA(x.id)} className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${a===x.id?"bg-white/10 text-white":"text-gray-600 hover:text-gray-400"}`}><span className="mr-1.5">{x.icon}</span>{x.title}</button>)}</div></div>
      <div className="px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-6"><span className="text-amber-400 text-lg">{s.icon}</span><h2 className="text-xl font-light text-white">{s.title}</h2></div><V d={s.data}/></div></div>
      <div className="border-t border-white/5 px-6 py-4"><div className="max-w-4xl mx-auto text-center"><p className="text-gray-700 text-xs font-mono">~100 hrs over 30 days · 3.5 hrs/day avg · portfolio + narrative approach</p></div></div>
    </div>
  );
}
