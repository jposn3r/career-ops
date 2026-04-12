import { useState } from "react";

export const tasks = [
  { title: "Claude Code Skill (published)", type: "project", roles: ["anthropic-claude-code-pm", "anthropic-ui-engineer"], status: "not-started", desc: "Build and publish a useful skill to GitHub", priority: "high" },
  { title: "MCP Server", type: "project", roles: ["anthropic-claude-code-pm", "anthropic-ui-engineer", "anthropic-consumer-pm"], status: "not-started", desc: "MCP server connecting Claude to useful data source", priority: "high" },
  { title: "Ecosystem Growth Strategy", type: "project", roles: ["anthropic-claude-code-pm", "anthropic-consumer-pm"], status: "not-started", desc: "How to grow Claude Code skills from 1,234 to 10,000", priority: "medium" },
  { title: "Claude Code Deep Dive", type: "learning", roles: ["anthropic-claude-code-pm", "anthropic-ui-engineer"], status: "not-started", desc: "Full docs, skills repo, plugin architecture, MCP protocol", priority: "high", hours: 6 },
];

export const meta = {
  id: "anthropic-claude-code-pm",
  company: "Anthropic",
  title: "PM, Claude Code",
  comp: "$285K–$305K",
  fit: "88%",
  priority: 2,
  status: "prep",
  loc: "SF / Seattle",
  tags: ["PM","Dev Tools","Ecosystem","Technical"],
  color: "#f59e0b",
  strengths: ["Power user of Claude Code","5+ yrs PM + eng combined","Hacker spirit","Built skills & MCP workflows","Understands ecosystem deeply"],
  gaps: [{g:"No formal PM title",s:"MEDIUM"},{g:"Dev tools PM experience",s:"MEDIUM"},{g:"Distribution track record",s:"MEDIUM"},{g:"SF/Seattle location",s:"VARIES"}],
  verdict: "You use this product daily. Strong technical fit. Lower comp than Consumer PM.",
};

const S = [
  { id:"opp", title:"The Opportunity", icon:"◆", type:"opp", data:{
    role:"Product Manager, Claude Code", comp:"$285K–$305K + equity", team:"Claude Code (under Cat Wu, Head of Product for Claude Code)", loc:"San Francisco, CA | Seattle, WA",
    focus:"Define the roadmap for an area of the Claude Code product suite. Translate AI advances into developer features. Build the ecosystem (CLI, skills, plugins) so devs can share best practices.",
    whyNow:"Claude Code is a $2.5B ARR product that doubled in one month. 4% of all public GitHub commits are now Claude Code-authored, projected to hit 20% by end of 2026. 29M daily VS Code installs. The Agent Skills open standard has been adopted by 30+ platforms. Cat Wu's team has abandoned traditional roadmaps for 'side quests' — rapid experiments where anyone can prototype. They need PMs who can keep up with model capabilities that improve 41x in 16 months.",
    status:"Active on Greenhouse. The team is clearly expanding — they're also hiring Software Engineers for Claude Code.",
    verdict:"This is a strong fit, but different from the Consumer PM role. Here's the tradeoff: the Consumer PM ($385K-$460K) is about inventing new products for millions of users. This Claude Code PM ($285K-$305K) is about evolving an existing $2.5B dev tools product. Lower comp, narrower scope, but you'd be working on the product you literally use every day to build things. Your technical depth (EM background, coding ability) is a bigger advantage here than on Consumer PM. The question is whether you want to build FOR developers or build FOR everyone.",
  }},
  { id:"intel", title:"Product Intel", icon:"◇", type:"intel", data:{
    metrics:[
      {m:"$2.5B ARR", d:"More than doubled since January 2026. Grew from research preview to billion-dollar product in ~12 months."},
      {m:"4% of GitHub commits", d:"Doubled in one month. Projected 20% by end of 2026. Rivals developer populations of mid-sized nations."},
      {m:"29M daily VS Code installs", d:"Claude Code is the dominant AI coding assistant in the IDE market."},
      {m:"100M monthly MCP downloads", d:"Model Context Protocol became the industry standard for connecting AI to tools."},
      {m:"1,234+ community skills", d:"Skills ecosystem growing rapidly. Agent Skills spec adopted by 30+ platforms including OpenAI Codex, Google Gemini CLI, Cursor."},
      {m:"41x capability growth", d:"Opus 4.6 completes 12-hour human tasks vs Sonnet 3.5's 21-minute tasks 16 months ago (per METR)."},
    ],
    product:[
      {name:"CLI (Terminal)", desc:"Core product. Full terminal-based coding agent. Edit files, run commands, manage projects.", rel:"Core"},
      {name:"VS Code Extension", desc:"IDE integration with sidebar, plan review, inline suggestions.", rel:"Core"},
      {name:"Web (claude.ai/code)", desc:"Browser-based Claude Code. Cloud-hosted sessions.", rel:"Core"},
      {name:"Skills / SKILL.md", desc:"Open standard for teaching Claude repeatable workflows. 277K+ installs for frontend-design skill alone.", rel:"Ecosystem"},
      {name:"Plugins", desc:"Bundles of skills, MCP servers, hooks, and commands. Plugin marketplace launched Feb 2026.", rel:"Ecosystem"},
      {name:"MCP (Model Context Protocol)", desc:"Industry standard for connecting AI to external tools and data. 100M monthly downloads.", rel:"Platform"},
      {name:"Hooks", desc:"Shell commands triggered by Claude Code events. Pre/post execution automation.", rel:"Power user"},
      {name:"Remote Control", desc:"Control local Claude Code sessions from mobile or web. Research preview Mar 2026.", rel:"New"},
      {name:"Worktrees", desc:"Isolated git worktree sessions for parallel development.", rel:"Power user"},
      {name:"/simplify, /review", desc:"Built-in multi-agent skills that distribute parallel agents across changed files.", rel:"Built-in"},
    ],
  }},
  { id:"fit", title:"Fit Analysis", icon:"△", type:"fit", data:{
    strengths:[
      "You USE Claude Code daily — you built skills, artifacts, and prototypes with it throughout this entire conversation. You're a power user who understands the product deeply.",
      "5+ years combined PM + engineering — your EM experience IS product management + engineering. The posting asks for '5+ years in PM and engineering, including 1 year as a professional engineer.' Your CTO roles covered both.",
      "Technical background + cross-functional shipping — you manage 12 engineers at Meta Reality Labs. You know how to work with eng teams to ship technical products.",
      "Hacker spirit — you built NexusWealth, Hostr, custom Claude skills, a job-prep intelligence system. You love solving puzzles and building things.",
      "You understand the Claude Code ecosystem — skills, plugins, MCP, artifacts. You've built and used all of them. Most PM candidates haven't touched this stack.",
      "You stay hands-on with AI coding tools — this posting says 'stay up-to-date and hands-on with emerging research and industry trends.' You literally build with these tools every day.",
    ],
    adjacent:[
      "EM → PM: Same reframe as Consumer PM, but stronger here because the role explicitly asks for engineering experience. Your EM/CTO background is an asset, not a gap.",
      "You've built the ecosystem artifacts they want to grow — the skills and plugins you create in Claude are exactly the kind of ecosystem content this PM would foster.",
      "Your newsletter research workflow uses Claude Code patterns — you understand how developers discover, adopt, and share AI workflows.",
    ],
    gaps:[
      {gap:"No formal PM title", critical:"MEDIUM", note:"Same as Consumer PM — they want '5+ years in PM and engineering.' Your founder CTO + EM experience covers both functions. Lead with 'I've been doing product work my entire career, just under different titles.'", time:"Narrative reframing"},
      {gap:"Dev tools product experience specifically", critical:"MEDIUM", note:"They say 'experience in dev tools is preferred.' You haven't shipped a developer tool product, but you've BUILT developer tools (skills, automation workflows) and you understand the developer user deeply.", time:"Narrative + portfolio"},
      {gap:"Distribution/commercial success track record", critical:"MEDIUM", note:"'Track record of launching ambitious products that have achieved distribution or commercial success.' Your startups were real but not massive. Pair with your Meta scale experience.", time:"Narrative prep"},
      {gap:"SF or Seattle location", critical:"VARIES", note:"Not remote — requires SF or Seattle. Same relocation consideration as Consumer PM.", time:"Logistics"},
    ],
  }},
  { id:"knowledge", title:"Knowledge Map", icon:"▽", type:"knowledge", data:[
    {name:"Claude Code Product Deep Dive", topics:["Full product surface: CLI, VS Code, Web, Mobile Remote Control","Skills architecture: SKILL.md format, progressive disclosure, auto-triggering","Plugin system: marketplace, bundling skills+MCP+hooks, community distribution","MCP protocol: tools, resources, prompts, server architecture, client integration","Hooks: pre/post execution automation, event-driven workflows","Session management: /compact, /resume, memory persistence, worktrees","CLAUDE.md: project-level configuration, coding standards, team conventions"], ai:"You already know most of this from daily use. Go deeper: read the Claude Code docs end-to-end. Study the skills GitHub repo. Understand the plugin architecture. Prepare to discuss what's working and what's broken."},
    {name:"Developer Ecosystem Strategy", topics:["How dev tool ecosystems grow: plugins, extensions, marketplaces, community","VS Code extension marketplace dynamics: discovery, ratings, install funnel","Open source ecosystem health: contribution patterns, maintainer incentives","Developer community building: documentation, tutorials, starter templates","Ecosystem metrics: plugin installs, skill creation rate, MCP server count, community engagement","Competitive ecosystems: GitHub Copilot extensions, Cursor plugins, OpenClaw"], ai:"Study how VS Code, Figma, and Slack built their plugin ecosystems. Ask Claude to compare ecosystem strategies. Prepare a 'Claude Code ecosystem growth strategy' doc."},
    {name:"AI Coding Tools Competitive Landscape", topics:["GitHub Copilot: Workspace, extensions, enterprise adoption, Microsoft distribution","Cursor: IDE-first approach, tab completion, agent mode, composer","OpenClaw: open-source AI coding agent, rapidly growing community","Google Gemini CLI: code generation, workspace integration","Codex CLI (OpenAI): terminal-based coding agent","Devin, Amp, Cline: autonomous coding agents","Where Claude Code wins: agentic depth, skill ecosystem, MCP standard, 12hr task duration"], ai:"Use every competing AI coding tool for at least an hour each. Document: what each does better than Claude Code, what Claude Code does better, and what you'd steal."},
    {name:"Cat Wu's Product Philosophy", topics:["'Side quests' over roadmaps — short experiments, rapid prototyping, kill fast","'Building on ground that's rising underneath you' — capabilities change mid-project","Prototype before documenting — build with Claude Code, then spec if it works","Keep implementations simple — model improvements make workarounds obsolete","Popular features from informal experiments — Claude Code Desktop, AskUserQuestion, todo lists","Track two things: how AI changes YOUR workflow AND how it changes what's possible in your product"], ai:"Read Cat Wu's posts in detail. Internalize the philosophy. Prepare to discuss how you'd apply 'side quests' to your area of the Claude Code roadmap."},
    {name:"Interview Prep: Anthropic Claude Code PM", topics:["Product sense: 'How would you improve the Claude Code skills ecosystem?'","Strategy: 'What area of Claude Code would you focus on and why?'","Metrics: 'How would you measure success for a new Claude Code feature?'","Technical: 'Explain how MCP works and how you'd expand its ecosystem'","Developer empathy: 'What's the biggest pain point in Claude Code today?'","Execution: 'Describe a side quest you'd run in your first month'"], ai:"Run mock interviews with Claude playing Cat Wu interviewing you for her team. Be specific about Claude Code — generic PM answers won't work here."},
  ]},
  { id:"plan", title:"30-Day Sprint", icon:"⬡", type:"plan", data:[
    {week:"Week 1: Build Ecosystem Artifacts", days:[
      {day:"Days 1-2", focus:"Build a Claude Code Skill or Plugin", tasks:["Build a polished, useful Claude Code skill that solves a real developer problem","Publish it on GitHub with proper SKILL.md format, README, and documentation","This is your 'I understand the ecosystem' proof point — you're a builder, not just a user","Consider: a skill for code review, test generation, PR description writing, or debugging"], hrs:"4-5 hrs/day"},
      {day:"Days 3-4", focus:"Build an MCP Server", tasks:["Build a simple MCP server that connects Claude Code to a useful data source","Example: an MCP that reads your project's CI/CD status, test results, or deployment logs","Deploy it and use it in your own workflow — document the experience","This demonstrates deep technical understanding of the Claude Code platform"], hrs:"4-5 hrs/day"},
      {day:"Days 5-6", focus:"Competitive Analysis Sprint", tasks:["Spend a full day each with GitHub Copilot and Cursor","Document: feature comparison, UX differences, ecosystem maturity, developer community","Identify 3 things Claude Code should learn from competitors","Write a competitive analysis doc you could present in an interview"], hrs:"4-5 hrs/day"},
      {day:"Day 7", focus:"Synthesis", tasks:["Portfolio: published skill + MCP server + competitive analysis","Write a 'My First Month on Claude Code PM' doc — your side quest proposals"], hrs:"2-3 hrs"},
    ]},
    {week:"Week 2: Strategy + Ecosystem Thinking", days:[
      {day:"Days 8-9", focus:"Ecosystem Growth Strategy", tasks:["Study how VS Code, Figma, and Slack built plugin ecosystems","Analyze Claude Code's current ecosystem: skills repo (87K stars), plugin marketplace, MCP servers","Identify bottlenecks: what's preventing more developers from creating skills?","Write an 'Ecosystem Growth Strategy for Claude Code' doc"], hrs:"3-4 hrs/day"},
      {day:"Days 10-11", focus:"Product Philosophy Deep Dive", tasks:["Read everything Cat Wu has published about AI product management","Study Claude Code release notes from last 6 months — understand the velocity","Map the feature trajectory: what patterns do you see in what ships?","Prepare your 'product philosophy for dev tools in an era of 41x capability growth' narrative"], hrs:"3-4 hrs/day"},
      {day:"Days 12-13", focus:"User Research (Self-Study)", tasks:["Read r/ClaudeAI, Twitter/X threads, Hacker News discussions about Claude Code","Catalog the top 10 complaints and top 10 praise points from real users","Talk to developer friends who use Claude Code — what do they love/hate?","Synthesize into a 'Voice of the Developer' doc with actionable insights"], hrs:"3-4 hrs/day"},
      {day:"Day 14", focus:"Synthesis", tasks:["Compile: ecosystem strategy + product philosophy + user research","Prepare to present any of these in a 10-minute interview slot"], hrs:"2-3 hrs"},
    ]},
    {week:"Week 3: Narrative + Interview Prep", days:[
      {day:"Days 15-16", focus:"Craft Your Story", tasks:["Frame: 'I've been a Claude Code power user since launch. I've built skills, MCP servers, and complex workflows. I understand this product from the inside out. I've also built developer tools as a CTO and managed engineering teams at Meta. I'm the builder-PM this team needs.'","Prepare 5 STAR stories: shipping in ambiguity, building developer tools, gathering user feedback, making tradeoffs, technical problem-solving","Write your 'Why Claude Code, Why PM, Why Now' narrative"], hrs:"3-4 hrs/day"},
      {day:"Days 17-18", focus:"Product Sense Practice", tasks:["Practice 10 Claude Code-specific product questions","'How would you grow the skills ecosystem from 1,234 to 10,000 skills?'","'Design a feature that helps teams standardize Claude Code usage'","'How would you measure if a new Claude Code feature is successful?'","Focus on specificity — generic PM frameworks don't impress at Anthropic"], hrs:"3-4 hrs/day"},
      {day:"Days 19-21", focus:"Mock Interviews", tasks:["Mock 1: Product sense + metrics (Claude as Cat Wu)","Mock 2: Strategy + ecosystem (Claude as Anthropic VP)","Mock 3: Technical + developer empathy (Claude as senior eng)","Refine based on feedback"], hrs:"3-4 hrs/day"},
    ]},
    {week:"Week 4: Apply", days:[
      {day:"Days 22-25", focus:"Application Materials", tasks:["Resume: lead with CTO/founder + EM technical leadership, emphasize hands-on building","Cover letter: your vision for Claude Code ecosystem + what you'd do in month 1","Include links to: your published skill, MCP server, ecosystem strategy doc","Make this application feel like a product pitch, not a job application"], hrs:"3-4 hrs/day"},
      {day:"Days 26-30", focus:"Submit + Network", tasks:["Submit application","Reach out to Claude Code team members on LinkedIn/X","Share your skill or MCP server publicly — tweet about building with Claude Code","Your public developer activity IS your interview warmup"], hrs:"2-3 hrs/day"},
    ]},
  ]},
  { id:"tactics", title:"AI Tactics", icon:"□", type:"tactics", data:[
    {name:"Claude Code as Product Lab", desc:"Use Claude Code itself to prototype features you'd want to build if you were PM. Meta-recursive and impressive.", ex:"I'm applying for Claude Code PM. Help me prototype a feature I'd want to ship: a 'skill recommender' that analyzes a developer's project and suggests relevant skills from the marketplace. Build it as a Claude Code skill."},
    {name:"Claude as Ecosystem Analyst", desc:"Analyze the Claude Code ecosystem quantitatively and qualitatively.", ex:"Analyze the Claude Code skills ecosystem. What types of skills are most popular? What's missing? What would drive 10x more skill creation? Compare to the VS Code extension marketplace in its early days. Give me specific, actionable recommendations I could present as a PM candidate."},
    {name:"Claude as Mock Interviewer (Cat Wu Style)", desc:"Practice with Claude roleplaying the specific product philosophy of Claude Code's team.", ex:"You're Cat Wu, Head of Product for Claude Code at Anthropic. Interview me for a PM role on your team. Ask me about: my vision for the skills ecosystem, how I'd run a 'side quest' in my first month, how I think about dev tools when model capabilities improve 41x in 16 months, and what I'd kill in the current product. Be tough and specific."},
    {name:"Claude as Competitive Scout", desc:"Deep-dive into competing AI coding tools.", ex:"Compare Claude Code, GitHub Copilot Workspace, Cursor Composer, and OpenClaw as of March 2026. For each: core interaction model, ecosystem/extensibility, pricing, developer community sentiment, unique strengths, biggest weaknesses. What should Claude Code PM learn from each?"},
    {name:"Claude as Developer Researcher", desc:"Synthesize developer sentiment from public sources.", ex:"Search for developer discussions about Claude Code on Reddit, Hacker News, and Twitter from the last 30 days. What are the top complaints? Top praise? What features are most requested? Synthesize into a prioritized list I could present as a PM candidate."},
  ]},
  { id:"res", title:"Resources", icon:"◈", type:"res", data:[
    {cat:"Must Read", items:["Cat Wu's posts on AI product management","Claude Code documentation (code.claude.com)","Anthropic skills GitHub repo (github.com/anthropics/skills)","Agent Skills open standard (agentskills.io)","Claude Code release notes (releasebot.io/updates/anthropic)"]},
    {cat:"Build With", items:["Claude Code CLI — build your portfolio skill and MCP server","SKILL.md format specification","MCP SDK (TypeScript and Python)","Plugin creation tooling","Claude Code hooks documentation"]},
    {cat:"Competitive Intel", items:["GitHub Copilot Workspace and extensions documentation","Cursor features and community","OpenClaw ecosystem","Google Gemini CLI capabilities","r/ClaudeAI, HackerNews, Twitter for developer sentiment"]},
    {cat:"Interview Prep", items:["Exponent Anthropic PM guide","Dev tools product management frameworks","Ecosystem growth case studies (VS Code, Figma, Slack)","Practice: define success metrics for 5 different Claude Code features","Practice: design a side quest you'd run in your first month"]},
  ]},
];

const Badge = ({color,children}) => {
  const c = {green:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",amber:"bg-amber-500/15 text-amber-300 border-amber-500/30",red:"bg-red-500/15 text-red-300 border-red-500/30",blue:"bg-blue-500/15 text-blue-300 border-blue-500/30",gray:"bg-gray-500/15 text-gray-300 border-gray-500/30"};
  return <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c[color]}`}>{children}</span>;
};
const Opp = ({d}) => (<div className="space-y-4"><div className="grid grid-cols-1 md:grid-cols-2 gap-3">{[["ROLE",d.role],["COMP",d.comp],["TEAM",d.team],["LOCATION",d.loc]].map(([l,v])=><div key={l} className="bg-white/5 border border-white/10 rounded-lg p-4"><div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">{l}</div><div className="text-white text-sm">{v}</div></div>)}</div><div className="bg-white/5 border border-white/10 rounded-lg p-4"><div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">FOCUS</div><div className="text-white text-sm">{d.focus}</div></div><div className="bg-emerald-900/20 border border-emerald-600/30 rounded-lg p-4"><div className="text-xs tracking-widest text-emerald-400 mb-1.5 font-mono">WHY NOW</div><div className="text-emerald-200 text-sm leading-relaxed">{d.whyNow}</div></div><div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4"><div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">STATUS</div><div className="text-amber-200 text-sm">{d.status}</div></div><div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4"><div className="text-xs tracking-widest text-blue-400 mb-1.5 font-mono">HONEST ASSESSMENT</div><div className="text-blue-200 text-sm">{d.verdict}</div></div></div>);
const Intel = ({d}) => (<div className="space-y-6"><div><div className="text-xs tracking-widest text-emerald-400 mb-3 font-mono">THE NUMBERS — THIS PRODUCT IS ON FIRE</div>{d.metrics.map((n,i)=><div key={i} className="flex items-start gap-3 mb-3"><span className="text-emerald-300 font-mono text-sm font-semibold min-w-36">{n.m}</span><span className="text-gray-400 text-sm">{n.d}</span></div>)}</div><div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">PRODUCT SURFACE</div>{d.product.map((s,i)=><div key={i} className="flex items-center gap-3 py-1.5"><Badge color={s.rel==="Core"?"green":s.rel==="Ecosystem"?"amber":s.rel==="Platform"?"blue":"gray"}>{s.rel}</Badge><span className="text-white text-sm font-medium min-w-36">{s.name}</span><span className="text-gray-500 text-sm">{s.desc}</span></div>)}</div></div>);
const FitView = ({d}) => (<div className="space-y-6"><div><div className="text-xs tracking-widest text-emerald-400 mb-3 font-mono">STRENGTHS</div>{d.strengths.map((s,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-emerald-400 mt-0.5 text-xs">✓</span><span className="text-gray-300 text-sm">{s}</span></div>)}</div><div><div className="text-xs tracking-widest text-blue-400 mb-3 font-mono">REFRAME</div>{d.adjacent.map((a,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-blue-400 mt-0.5 text-xs">↗</span><span className="text-gray-300 text-sm">{a}</span></div>)}</div><div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">GAPS</div>{d.gaps.map((g,i)=><div key={i} className="border border-white/10 rounded-lg p-3 mb-2"><div className="flex items-center gap-2 mb-1"><span className="text-white text-sm font-medium">{g.gap}</span><Badge color={g.critical==="LOW"?"green":"amber"}>{g.critical}</Badge></div><p className="text-gray-400 text-sm">{g.note}</p><div className="text-xs text-gray-600 font-mono mt-1">Close in: {g.time}</div></div>)}</div></div>);
const KMap = ({d}) => {const [exp,setExp]=useState(null);return <div className="space-y-2">{d.map((k,i)=><div key={i} className="border border-white/10 rounded-lg overflow-hidden"><button onClick={()=>setExp(exp===i?null:i)} className="w-full text-left p-4 flex items-center justify-between hover:bg-white/5 transition-colors"><span className="text-white font-medium text-sm">{k.name}</span><span className="text-gray-500">{exp===i?"−":"+"}</span></button>{exp===i&&<div className="px-4 pb-4 border-t border-white/5"><div className="mt-3 space-y-1.5">{k.topics.map((t,j)=><div key={j} className="flex items-start gap-2"><span className="text-amber-400 mt-1 text-xs">›</span><span className="text-gray-300 text-sm">{t}</span></div>)}</div><div className="mt-3 bg-blue-900/20 border border-blue-500/20 rounded-lg p-3"><div className="text-xs tracking-widest text-blue-400 mb-1 font-mono">AI ACCELERATION</div><p className="text-blue-200 text-sm">{k.ai}</p></div></div>}</div>)}</div>};
const Plan = ({d}) => {const [aw,setAw]=useState(0);const w=d[aw];return <div><div className="flex gap-2 mb-4 overflow-x-auto">{d.map((_,i)=><button key={i} onClick={()=>setAw(i)} className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${aw===i?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-white/5 text-gray-400 border border-white/10"}`}>Wk {i+1}</button>)}</div><h4 className="text-white font-medium mb-4">{w.week}</h4><div className="space-y-4">{w.days.map((d,i)=><div key={i} className="border border-white/10 rounded-lg p-4"><div className="flex items-center justify-between mb-3"><div><span className="text-amber-400 font-mono text-xs">{d.day}</span><span className="text-gray-500 mx-2">·</span><span className="text-white text-sm font-medium">{d.focus}</span></div><span className="text-gray-600 text-xs font-mono">{d.hrs}</span></div><div className="space-y-1.5">{d.tasks.map((t,j)=><div key={j} className="flex items-start gap-2"><span className="text-gray-600 mt-0.5 text-xs font-mono">{String(j+1).padStart(2,"0")}</span><span className="text-gray-300 text-sm">{t}</span></div>)}</div></div>)}</div></div>};
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
      <div className="border-b border-white/10 px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"/><span className="text-xs font-mono text-gray-500 tracking-widest">JOB PREP INTELLIGENCE BRIEF</span></div><h1 className="text-2xl md:text-3xl font-light text-white mb-2" style={{letterSpacing:"-0.02em"}}>Anthropic · PM, Claude Code</h1><p className="text-gray-500 text-sm">The $2.5B dev tools product you already use daily · 30-day sprint</p></div></div>
      <div className="border-b border-white/10 px-6 py-3 sticky top-0 z-10" style={{background:"rgba(9,9,9,0.95)",backdropFilter:"blur(12px)"}}><div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto">{S.map(x=><button key={x.id} onClick={()=>setA(x.id)} className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${a===x.id?"bg-white/10 text-white":"text-gray-600 hover:text-gray-400"}`}><span className="mr-1.5">{x.icon}</span>{x.title}</button>)}</div></div>
      <div className="px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-6"><span className="text-amber-400 text-lg">{s.icon}</span><h2 className="text-xl font-light text-white">{s.title}</h2></div><V d={s.data}/></div></div>
      <div className="border-t border-white/5 px-6 py-4"><div className="max-w-4xl mx-auto text-center"><p className="text-gray-700 text-xs font-mono">~90 hrs over 30 days · builder-PM approach · ship ecosystem artifacts as your application</p></div></div>
    </div>
  );
}
