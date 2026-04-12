import { useState } from "react";

export const tasks = [
  { title: "Python Test Harness", type: "project", roles: ["nvidia-av-testing"], status: "not-started", desc: "Build parameterized driving scenario test suite with pytest + CI pipeline", priority: "medium" },
  { title: "CARLA Simulator Hands-on", type: "project", roles: ["nvidia-av-testing"], status: "not-started", desc: "Run CARLA scenarios, automate scenario creation and result collection", priority: "medium" },
  { title: "Test Architecture Design Doc", type: "project", roles: ["nvidia-av-testing"], status: "not-started", desc: "Design complete AV test infra: scenario library, orchestrator, result analyzer", priority: "medium" },
];

export const meta = {
  id: "nvidia-av-testing",
  company: "NVIDIA",
  title: "Sr. EM, L3/L4 AV Testing",
  comp: "$272K–$431.25K",
  fit: "25%",
  priority: 7,
  status: "watching",
  loc: "Santa Clara +1",
  tags: ["EM","AV Testing","Simulation","Infrastructure"],
  color: "#ef4444",
  strengths: ["Strong EM skills","Complex systems experience","AI-native thinking","Cross-team collaboration"],
  gaps: [{g:"No ADAS/AV/Simulation experience",s:"HIGH"},{g:"Python/C++ depth",s:"HIGH"},{g:"10+ yrs test infrastructure",s:"HIGH"},{g:"AV simulation frameworks",s:"MEDIUM"}],
  verdict: "Large stretch. 60-day+ prep needed. Lowest priority.",
};

const S = [
  { id:"opp", title:"The Opportunity", icon:"◆", type:"opp", data:{
    role:"Senior Engineering Manager, L3 and L4 Testing — Autonomous Vehicles", comp:"$272K–$431.25K base + equity", team:"NVIDIA Autonomous Vehicles — Testing & Simulation", loc:"Santa Clara, CA (+1 more)",
    focus:"Lead simulation-at-scale for NVIDIA's L3/L4 AV stack. Build test architecture, scenario creation, run infrastructure, and analysis tooling. Bridge AV development with simulation capabilities.",
    whyNow:"NVIDIA's AV push is accelerating hard. Mercedes-Benz CLA launching with DRIVE AV this year. BYD, Geely, Nissan, Uber partnerships for L4. Alpamayo 1.5 and AlpaSim just shipped. They need someone to scale the simulation testing infrastructure that validates ALL of this before it goes on real roads. The testing bottleneck is what stands between NVIDIA and production L4 autonomy.",
    status:"Active listing (JR2014619). Paired with the Planning & Controls PM role you already analyzed — same AV division, different function.",
    verdict:"This is a significant stretch. You have strong EM skills and AI-native thinking, but zero direct AV/simulation/ADAS experience and limited Python/C++ depth. The domain gap is large. However, the testing/infrastructure/automation angle is more transferable than the planning & controls domain. Realistic probability: 15-25% without domain pivot, higher if you can demonstrate simulation testing transferability.",
  }},
  { id:"intel", title:"Company & Stack Intel", icon:"◇", type:"intel", data:{
    news:[
      {e:"AlpaSim open-source launch (CES 2026)", d:"Open simulation framework for closed-loop AV testing. Microservice architecture, gRPC APIs, multi-GPU scaling. 900+ reconstructed scenarios. This is the framework the testing team builds on top of."},
      {e:"Alpamayo 1.5 (GTC 2026, 5 days ago)", d:"Upgraded VLA model with RL post-training, text-guided trajectory planning, flexible camera support. Needs massive simulation validation."},
      {e:"Omniverse NuRec + Cosmos", d:"Neural reconstruction of real-world drives into simulation. Cosmos generates synthetic scenarios. Together they create the data pipeline for testing."},
      {e:"DRIVE Sim on Omniverse", d:"The production simulation platform. Physically accurate, repeatable, scalable across GPUs and nodes. Supports SIL and HIL configurations."},
      {e:"Mercedes-Benz CLA + OEM partnerships", d:"First production car with NVIDIA DRIVE AV shipping this year. BYD, Geely, Nissan, Uber for L4. Every OEM partner means more testing workload."},
      {e:"Halos OS safety architecture", d:"Three-layer safety stack. NCAP 5-star compliance. Testing must validate all safety guarantees before production deployment."},
    ],
    stack:[
      {name:"AlpaSim", role:"Open-source closed-loop simulation framework", rel:"Core"},
      {name:"DRIVE Sim / Omniverse", role:"Production simulation platform, physically accurate", rel:"Core"},
      {name:"Omniverse NuRec", role:"Neural 3D reconstruction from sensor data", rel:"Important"},
      {name:"Cosmos WFMs", role:"World foundation models for synthetic data generation", rel:"Important"},
      {name:"Python / C++", role:"Primary languages for test automation and infrastructure", rel:"Must-have"},
      {name:"Bazel", role:"Build system for large-scale monorepo", rel:"Nice-to-have"},
      {name:"Docker / Jenkins", role:"Containerization and CI/CD for test pipelines", rel:"Nice-to-have"},
      {name:"gRPC", role:"Service communication in AlpaSim microservices", rel:"Important"},
    ],
  }},
  { id:"fit", title:"Fit Analysis", icon:"△", type:"fit", data:{
    strengths:[
      "Strong EM with 12 engineers — the role needs technical leadership across large-scale orgs. You know how to lead, align, and mentor.",
      "Experience shipping complex products at Meta Reality Labs — XR is similarly a novel, hardware-constrained, safety-sensitive domain.",
      "AI-native thinking — you understand end-to-end AI systems, model evaluation, and how to build infrastructure around AI outputs.",
      "Cross-team collaboration DNA — the role requires bridging AV development and simulation teams, similar to your cross-pod work at Meta.",
      "Builder mentality — 'analyze complex technical issues and independently drive resolution' maps to your CTO experience at startups.",
    ],
    adjacent:[
      "XR testing → AV simulation: Both require validating complex systems that interact with the physical world. Sensor simulation, scenario generation, edge case testing — conceptually similar even if the domain differs.",
      "Meta's test infrastructure at scale → NVIDIA's simulation infrastructure. You've likely worked with or around large-scale CI/CD, test automation, and quality systems.",
      "Your AI tool-building (skills, artifacts, workflows) shows you can quickly learn and build on new platforms — transferable to learning DRIVE Sim/AlpaSim.",
    ],
    gaps:[
      {gap:"No ADAS / Autonomous Driving / Simulation experience", critical:"HIGH", note:"This is the biggest gap. 'Experience working on ADAS, Autonomous Driving, Replay testing, or Simulation environments' is a must-have requirement. You need to build foundational knowledge AND a credible narrative for why your adjacent experience transfers.", time:"60-90 days (large gap)"},
      {gap:"Python/C++ in a software-driven environment", critical:"HIGH", note:"The role requires 'substantial experience with Python/C++ in a software driven environment.' Your primary coding is likely not in C++. Python is more learnable, but C++ proficiency takes longer.", time:"30-60 days for Python depth, longer for C++"},
      {gap:"10+ years building testing, infrastructure, and test automation", critical:"HIGH", note:"This is a hard requirement. You need to reframe your experience to highlight testing and infrastructure work you've done or overseen as an EM.", time:"Narrative reframing"},
      {gap:"AV simulation frameworks (AlpaSim, DRIVE Sim, CARLA, etc.)", critical:"MEDIUM", note:"Listed as 'ways to stand out.' Learnable by working through AlpaSim tutorials and CARLA open-source simulator.", time:"2-3 weeks"},
      {gap:"Bazel, Docker, Jenkins experience", critical:"LOW", note:"Nice-to-have. Docker and Jenkins are broadly used. Bazel is Google-ecosystem specific but learnable.", time:"1-2 weeks"},
    ],
  }},
  { id:"knowledge", title:"Knowledge Map", icon:"▽", type:"knowledge", data:[
    {name:"AV Simulation Fundamentals", topics:["Closed-loop vs open-loop simulation and why it matters","Sensor simulation: camera, LiDAR, radar model fidelity","Scenario generation: from recorded drives to parametric variations","Replay testing: reconstructing real incidents in simulation","SIL (software-in-the-loop) vs HIL (hardware-in-the-loop) testing","Metrics: miles between interventions, disengagement rates, scenario coverage"], ai:"Use Claude to explain each concept with concrete examples. Ask it to design a simulation test matrix for a specific driving scenario (e.g., unprotected left turn at busy intersection)."},
    {name:"NVIDIA Simulation Stack", topics:["AlpaSim architecture: Runtime, Driver, Renderer, TrafficSim, Controller, Physics services","DRIVE Sim on Omniverse: physically accurate, repeatable, multi-GPU scalable","Omniverse NuRec: 3D Gaussian Splats from sensor data → simulation worlds","Cosmos world foundation models: synthetic data generation for edge cases","Physical AI AV Dataset: 1,700+ hrs of driving data across 25 countries","gRPC microservice patterns for distributed simulation"], ai:"Walk through the AlpaSim GitHub repo with Claude. Ask it to explain each microservice and how they interact. Build a mental model of the full testing pipeline."},
    {name:"Test Architecture & Automation at Scale", topics:["Test scenario creation frameworks: parametric, combinatorial, generative","CI/CD for simulation: triggering test runs on code changes, regression tracking","Distributed test execution: parallelizing across GPU clusters","Result analysis infrastructure: automated pass/fail, metric dashboards, trend detection","Flaky test management in non-deterministic simulation environments","Test coverage metrics for autonomous driving: scenario space vs test space"], ai:"Ask Claude to design a test automation pipeline for an AV simulation platform. Include scenario generation, execution, analysis, and reporting. Compare to software testing patterns you know."},
    {name:"Safety Validation & Standards", topics:["ISO 26262 functional safety: ASIL levels A-D, safety integrity concepts","SOTIF (ISO 21448): Safety of the Intended Functionality — for AI-based systems","NCAP 2026 testing protocols: what NVIDIA must pass for OEM partners","RSS (Responsibility-Sensitive Safety): Mobileye's formal safety framework","V-model for AV development: requirements → design → implementation → testing","Regulatory landscape: US NHTSA, EU type approval, China requirements"], ai:"Use Claude to create a cheat sheet mapping each standard to NVIDIA's testing requirements. Focus on what a test manager needs to know vs what a safety engineer needs to know."},
    {name:"Python for AV Testing", topics:["Python test frameworks: pytest, unittest, custom harnesses","Data analysis: pandas, numpy for processing simulation results at scale","Visualization: matplotlib, plotly for scenario analysis dashboards","API interaction: gRPC clients for AlpaSim services","Automation scripting: orchestrating test runs, parsing results, generating reports","Performance: profiling Python code, when to use C++ vs Python boundaries"], ai:"Build a Python script that generates simulation test scenarios programmatically. Use Claude to walk you through pytest patterns for testing complex systems."},
    {name:"Interview Prep", topics:["System design: 'Design a simulation test infrastructure that runs 10M miles/day'","Technical: 'How would you automate scenario generation from recorded edge cases?'","Leadership: 'How do you drive alignment across 5 teams with competing priorities?'","Domain: 'Explain the difference between open-loop and closed-loop testing and when you'd use each'","NVIDIA culture: execution focus, customer deadlines, competition awareness"], ai:"Run mock interviews with Claude as an NVIDIA VP of AV Testing. Practice explaining simulation concepts AND your leadership philosophy."},
  ]},
  { id:"plan", title:"60-Day Sprint", icon:"⬡", type:"plan", data:[
    {week:"Phase 1: Foundation (Days 1-14)", days:[
      {day:"Days 1-3", focus:"AV Simulation Crash Course", tasks:["Coursera: UofT Self-Driving Cars Specialization — Course 1 (architecture overview) at 2x speed","Read NVIDIA's AV simulation page end-to-end","Use Claude to create a glossary of 100 AV testing terms","Watch GTC sessions on DRIVE Sim and AlpaSim"], hrs:"4-5 hrs/day"},
      {day:"Days 4-6", focus:"AlpaSim Deep Dive", tasks:["Clone AlpaSim from GitHub and walk through the codebase with Claude","Understand the microservice architecture: Runtime, Driver, Renderer, TrafficSim","Run the basic examples if you have GPU access, or study the notebook walkthroughs","Read the Alpamayo technical blog post in detail — focus on the simulation sections"], hrs:"4-5 hrs/day"},
      {day:"Days 7-10", focus:"Python + Testing Fundamentals", tasks:["Build a Python test harness that generates parameterized driving scenarios","Use pytest to create a test suite for a mock simulation system","Practice data analysis with pandas: load, clean, analyze simulation result CSVs","Build a simple CI pipeline with GitHub Actions that runs your tests on push"], hrs:"4-5 hrs/day"},
      {day:"Days 11-14", focus:"Safety Standards Overview + Synthesis", tasks:["Study ISO 26262, SOTIF, and NCAP 2026 requirements (use Claude for summaries)","Map each standard to 'what does a test manager need to ensure?'","Write a Phase 1 synthesis doc: what you've learned, your top 5 remaining gaps","Build your first architecture diagram: NVIDIA's AV testing pipeline end-to-end"], hrs:"3-4 hrs/day"},
    ]},
    {week:"Phase 2: Build Depth (Days 15-35)", days:[
      {day:"Days 15-18", focus:"CARLA Open-Source Simulator", tasks:["Install CARLA (open-source AV simulator used widely in industry)","Run basic scenarios: navigate a vehicle through urban environment","Write Python scripts to automate scenario creation and result collection","This gives you hands-on simulation experience to discuss in interviews"], hrs:"4-5 hrs/day"},
      {day:"Days 19-22", focus:"Test Architecture Design", tasks:["Design a complete test infrastructure for a hypothetical AV company (use Claude to iterate)","Include: scenario library, parameterization engine, execution orchestrator, result analyzer","Document your design as a system design interview answer","Study how NVIDIA's DRIVE Sim handles SIL vs HIL testing configurations"], hrs:"4-5 hrs/day"},
      {day:"Days 23-28", focus:"Domain Depth: Sensor Simulation + Replay", tasks:["Study how sensor simulation works: camera models, LiDAR point clouds, radar returns","Understand replay testing: reconstructing recorded incidents for regression testing","Learn about Omniverse NuRec: neural reconstruction for simulation","Practice explaining these concepts as if briefing a cross-functional partner"], hrs:"3-4 hrs/day"},
      {day:"Days 29-35", focus:"C++ Exposure + Build Tools", tasks:["Refresh C++ basics: modern C++ (C++17/20), smart pointers, RAII, templates","Study Bazel build system: BUILD files, targets, dependencies","Practice Docker: containerize a Python test framework","Understand Jenkins pipeline configuration for automated test runs","You don't need to become a C++ expert — you need to be conversant"], hrs:"3-4 hrs/day"},
    ]},
    {week:"Phase 3: Narrative + Interview Prep (Days 36-50)", days:[
      {day:"Days 36-40", focus:"Competitive Landscape + Industry Context", tasks:["Deep dive: how Waymo, Tesla, Cruise, Mobileye approach simulation testing","Study Foretellix (scenario-based V&V), dSPACE (SIL/HIL platforms), CARLA ecosystem","Build a comparison matrix: simulation approaches across the industry","Prepare opinions on where simulation testing is headed (AI-generated scenarios, world models)"], hrs:"3-4 hrs/day"},
      {day:"Days 41-45", focus:"Narrative Construction", tasks:["Build your story: 'I've led testing and quality for complex hardware-software systems at Meta Reality Labs. I understand how to validate systems that interact with the physical world. AV simulation is the next frontier of this work.'","Reframe your experience: identify every testing, infrastructure, and quality initiative you've led or contributed to","Prepare 5 STAR stories: scaling test infrastructure, driving cross-team alignment, resolving complex technical issues, mentoring engineers, making decisions under ambiguity","Write your 90-day plan for the role"], hrs:"3-4 hrs/day"},
      {day:"Days 46-50", focus:"Technical Interview Prep", tasks:["System design: 'Design a simulation platform that validates L4 driving across 1000 scenario types'","Coding: Python implementation problems — test harnesses, data analysis pipelines","Leadership: 'How would you scale a test org from 5 to 25 engineers while maintaining velocity?'","Domain: Explain closed-loop simulation, sensor fidelity, scenario coverage metrics","Full mock interviews with Claude playing NVIDIA hiring manager"], hrs:"4-5 hrs/day"},
    ]},
    {week:"Phase 4: Apply + Final Prep (Days 51-60)", days:[
      {day:"Days 51-55", focus:"Portfolio + Materials", tasks:["Compile portfolio: Python test framework, CARLA scenarios, system design docs","Update resume to emphasize: testing leadership, infrastructure, automation, quality at scale","Draft cover letter connecting Meta XR testing to AV simulation","Reach out to NVIDIA AV team members on LinkedIn"], hrs:"3-4 hrs/day"},
      {day:"Days 56-60", focus:"Final Mock Loop + Apply", tasks:["Full mock interview loop: coding + system design + behavioral + domain","Review and refine weak areas","Submit application with tailored materials","Follow up with any NVIDIA connections"], hrs:"4-5 hrs/day"},
    ]},
  ]},
  { id:"tactics", title:"AI Tactics", icon:"□", type:"tactics", data:[
    {name:"Claude as AV Simulation Tutor", desc:"Accelerate your domain learning by having Claude explain simulation concepts at three levels: intuitive, technical, and interview-ready.", ex:"Explain closed-loop simulation for autonomous vehicles three ways: (1) for someone who's never worked in AV, (2) for a software engineer joining an AV team, (3) as an interview answer for a senior testing role at NVIDIA."},
    {name:"Claude as Test Architecture Designer", desc:"Design simulation test systems with Claude as your thinking partner. Iterate on architectures.", ex:"I'm designing a simulation test infrastructure for NVIDIA's L3/L4 AV stack. It needs to run 10M virtual miles per day across 1000 scenario types. Walk me through the architecture: scenario generation, execution, orchestration, analysis, reporting. What are the scaling bottlenecks?"},
    {name:"Claude as Codebase Guide", desc:"Walk through AlpaSim and CARLA codebases with Claude explaining the architecture.", ex:"I'm reading the AlpaSim GitHub repo. Explain the microservice architecture: what does the Runtime do? How do the Driver, Renderer, and TrafficSim services communicate? What would I need to change to add a new scenario type?"},
    {name:"Claude as Mock Interviewer", desc:"Practice NVIDIA-specific interview scenarios with domain-relevant questions.", ex:"You're an NVIDIA VP of AV Testing interviewing me for the Senior EM role. Ask me about: designing simulation infrastructure at scale, bridging AV development and testing teams, how I'd approach validating Alpamayo's reasoning in simulation, and a time I had to drive alignment across competing priorities."},
    {name:"Claude as Paper Summarizer", desc:"Quickly digest AV testing research papers to build domain credibility.", ex:"Summarize this paper on scenario-based testing for autonomous vehicles. What are the key methods? How does it relate to NVIDIA's AlpaSim approach? What interview question could this inform?"},
  ]},
  { id:"res", title:"Resources", icon:"◈", type:"res", data:[
    {cat:"Courses", items:["UofT Self-Driving Cars Specialization (Coursera) — Course 1 + Course 4","NVIDIA Deep Learning Institute: AV simulation courses","CARLA tutorials and documentation (open-source simulator)","MIT 6.800 Robotics (free lectures on testing and validation)"]},
    {cat:"NVIDIA-Specific", items:["AlpaSim GitHub repo + documentation","NVIDIA Developer: DRIVE Simulation page","NVIDIA technical blog: Alpamayo and AlpaSim posts","GTC 2026 sessions on AV simulation (recordings)","DRIVE Sim on Omniverse documentation"]},
    {cat:"Standards & Safety", items:["ISO 26262 overview (functional safety)","ISO 21448 SOTIF (Safety of the Intended Functionality)","Euro NCAP 2026 testing protocols","NHTSA AV testing framework"]},
    {cat:"Industry Context", items:["Foretellix scenario-based V&V approach","dSPACE ASM + NVIDIA DRIVE Sim integration","CARLA ecosystem and community","Applied Intuition, Cognata — simulation competitors","Waymo Safety Report (simulation methodology)"]},
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
    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4"><div className="text-xs tracking-widest text-red-400 mb-1.5 font-mono">HONEST ASSESSMENT</div><div className="text-red-200 text-sm">{d.verdict}</div></div>
  </div>
);

const Intel = ({d}) => (
  <div className="space-y-6">
    <div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">RECENT DEVELOPMENTS</div>{d.news.map((n,i)=><div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 mb-2"><div className="text-white text-sm font-medium mb-1">{n.e}</div><div className="text-gray-400 text-sm">{n.d}</div></div>)}</div>
    <div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">SIMULATION STACK</div>{d.stack.map((s,i)=><div key={i} className="flex items-center gap-3 py-1.5"><Badge color={s.rel==="Core"?"green":s.rel==="Must-have"?"red":s.rel==="Important"?"amber":"gray"}>{s.rel}</Badge><span className="text-white text-sm font-medium min-w-32">{s.name}</span><span className="text-gray-500 text-sm">{s.role}</span></div>)}</div>
  </div>
);

const FitView = ({d}) => (
  <div className="space-y-6">
    <div><div className="text-xs tracking-widest text-emerald-400 mb-3 font-mono">STRENGTHS</div>{d.strengths.map((s,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-emerald-400 mt-0.5 text-xs">✓</span><span className="text-gray-300 text-sm">{s}</span></div>)}</div>
    <div><div className="text-xs tracking-widest text-blue-400 mb-3 font-mono">ADJACENT — REFRAME THESE</div>{d.adjacent.map((a,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-blue-400 mt-0.5 text-xs">↗</span><span className="text-gray-300 text-sm">{a}</span></div>)}</div>
    <div><div className="text-xs tracking-widest text-red-400 mb-3 font-mono">GAPS — BE HONEST WITH YOURSELF</div>{d.gaps.map((g,i)=><div key={i} className="border border-white/10 rounded-lg p-3 mb-2"><div className="flex items-center gap-2 mb-1"><span className="text-white text-sm font-medium">{g.gap}</span><Badge color={g.critical==="HIGH"?"red":"amber"}>{g.critical}</Badge></div><p className="text-gray-400 text-sm">{g.note}</p><div className="text-xs text-gray-600 font-mono mt-1">Close in: {g.time}</div></div>)}</div>
  </div>
);

const KMap = ({d}) => {
  const [exp,setExp] = useState(null);
  return <div className="space-y-2">{d.map((k,i)=><div key={i} className="border border-white/10 rounded-lg overflow-hidden"><button onClick={()=>setExp(exp===i?null:i)} className="w-full text-left p-4 flex items-center justify-between hover:bg-white/5 transition-colors"><span className="text-white font-medium text-sm">{k.name}</span><span className="text-gray-500">{exp===i?"−":"+"}</span></button>{exp===i&&<div className="px-4 pb-4 border-t border-white/5"><div className="mt-3 space-y-1.5">{k.topics.map((t,j)=><div key={j} className="flex items-start gap-2"><span className="text-amber-400 mt-1 text-xs">›</span><span className="text-gray-300 text-sm">{t}</span></div>)}</div><div className="mt-3 bg-blue-900/20 border border-blue-500/20 rounded-lg p-3"><div className="text-xs tracking-widest text-blue-400 mb-1 font-mono">AI ACCELERATION</div><p className="text-blue-200 text-sm">{k.ai}</p></div></div>}</div>)}</div>;
};

const Plan = ({d}) => {
  const [aw,setAw] = useState(0);
  const w = d[aw];
  return <div><div className="flex gap-2 mb-4 overflow-x-auto">{d.map((_,i)=><button key={i} onClick={()=>setAw(i)} className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${aw===i?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-white/5 text-gray-400 border border-white/10"}`}>Phase {i+1}</button>)}</div><h4 className="text-white font-medium mb-4">{w.week}</h4><div className="space-y-4">{w.days.map((d,i)=><div key={i} className="border border-white/10 rounded-lg p-4"><div className="flex items-center justify-between mb-3"><div><span className="text-amber-400 font-mono text-xs">{d.day}</span><span className="text-gray-500 mx-2">·</span><span className="text-white text-sm font-medium">{d.focus}</span></div><span className="text-gray-600 text-xs font-mono">{d.hrs}</span></div><div className="space-y-1.5">{d.tasks.map((t,j)=><div key={j} className="flex items-start gap-2"><span className="text-gray-600 mt-0.5 text-xs font-mono">{String(j+1).padStart(2,"0")}</span><span className="text-gray-300 text-sm">{t}</span></div>)}</div></div>)}</div></div>;
};

const Tactics = ({d}) => <div className="space-y-4">{d.map((t,i)=><div key={i} className="border border-white/10 rounded-lg p-4"><div className="text-white font-medium text-sm mb-1">{t.name}</div><p className="text-gray-400 text-sm mb-3">{t.desc}</p><div className="bg-gray-900 rounded-lg p-3 border border-white/5"><div className="text-xs text-gray-600 font-mono mb-1">PROMPT</div><p className="text-amber-300 text-sm italic">"{t.ex}"</p></div></div>)}</div>;

const Res = ({d}) => <div className="space-y-6">{d.map((c,i)=><div key={i}><div className="text-xs tracking-widest text-amber-400 mb-2 font-mono">{c.cat.toUpperCase()}</div>{c.items.map((item,j)=><div key={j} className="flex items-start gap-2 mb-1"><span className="text-gray-600 mt-0.5 text-xs">›</span><span className="text-gray-300 text-sm">{item}</span></div>)}</div>)}</div>;

const R = {opp:Opp,intel:Intel,fit:FitView,knowledge:KMap,plan:Plan,tactics:Tactics,res:Res};

export default function Brief() {
  const [a,setA] = useState("opp");
  const s = S.find(x=>x.id===a);
  const V = R[s.type];
  return (
    <div className="min-h-screen text-white" style={{background:"linear-gradient(160deg,#080808 0%,#0e0e0e 50%,#090909 100%)",fontFamily:"'IBM Plex Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');.font-mono{font-family:'IBM Plex Mono',monospace}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}`}</style>
      <div className="border-b border-white/10 px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"/><span className="text-xs font-mono text-gray-500 tracking-widest">JOB PREP INTELLIGENCE BRIEF — STRETCH ROLE</span></div><h1 className="text-2xl md:text-3xl font-light text-white mb-2" style={{letterSpacing:"-0.02em"}}>NVIDIA · Sr. EM, L3/L4 Testing</h1><p className="text-gray-500 text-sm">Autonomous Vehicle Simulation at Scale · 60-day sprint (large domain gap)</p></div></div>
      <div className="border-b border-white/10 px-6 py-3 sticky top-0 z-10" style={{background:"rgba(8,8,8,0.95)",backdropFilter:"blur(12px)"}}><div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto">{S.map(x=><button key={x.id} onClick={()=>setA(x.id)} className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${a===x.id?"bg-white/10 text-white":"text-gray-600 hover:text-gray-400"}`}><span className="mr-1.5">{x.icon}</span>{x.title}</button>)}</div></div>
      <div className="px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-6"><span className="text-amber-400 text-lg">{s.icon}</span><h2 className="text-xl font-light text-white">{s.title}</h2></div><V d={s.data}/></div></div>
      <div className="border-t border-white/5 px-6 py-4"><div className="max-w-4xl mx-auto text-center"><p className="text-gray-700 text-xs font-mono">~150 hrs over 60 days · 2.5-3 hrs/day avg · domain immersion approach</p></div></div>
    </div>
  );
}
