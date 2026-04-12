import { useState } from "react";

export const tasks = [
  { title: "TPM Release Readiness Template", type: "project", roles: ["nvidia-dht-tpm"], status: "not-started", desc: "Design release checklist: QA, security, legal, docs, model card, Hugging Face publish", priority: "medium" },
  { title: "Digital Human Tech Landscape Doc", type: "project", roles: ["nvidia-dht-tpm"], status: "not-started", desc: "One-pager covering ACE stack, partners, competitive positioning", priority: "medium" },
  { title: "NVIDIA ACE & Digital Humans", type: "learning", roles: ["nvidia-dht-tpm"], status: "not-started", desc: "Audio2Face, Riva, ACE architecture, partner ecosystem", priority: "medium", hours: 6 },
  { title: "XR → Digital Humans Narrative", type: "learning", roles: ["nvidia-dht-tpm"], status: "not-started", desc: "Map Meta Reality Labs experience to digital human concepts, prepare STAR stories", priority: "medium", hours: 4 },
];

export const meta = {
  id: "nvidia-dht-tpm",
  company: "NVIDIA",
  title: "TPM, Digital Human Tech",
  comp: "$200K–$322K",
  fit: "78%",
  priority: 4,
  status: "research",
  loc: "Remote (CA) +4",
  tags: ["TPM","Digital Humans","3D/Animation","GenAI"],
  color: "#3b82f6",
  strengths: ["XR→Digital Humans connection","Cross-team coordination DNA","8+ yrs program mgmt","GenAI practitioner","Communication skills","Remote"],
  gaps: [{g:"No TPM title on resume",s:"LOW"},{g:"Open-source model release exp",s:"MEDIUM"},{g:"3D/animation domain depth",s:"MEDIUM"},{g:"Jira proficiency",s:"LOW"}],
  verdict: "Sleeper pick. XR background connects. Remote-friendly.",
};

const S = [
  { id:"opp", title:"The Opportunity", icon:"◆", type:"opp", data:{
    role:"Technical Program Manager — Digital Human Technology", comp:"L4: $168K–$258.75K | L5: $200K–$322K + equity", team:"NVIDIA Digital Human Technology (DHT)", loc:"Remote (CA) + 4 more locations",
    focus:"Drive cross-team delivery for NVIDIA's digital human AI stack: generative AI-driven motion, animation retargeting, synthetic data generation. Coordinate across product, research, and engineering. Translate technical discussions into decisions and action.",
    whyNow:"NVIDIA ACE (Avatar Cloud Engine) is now GA with Audio2Face, Riva, and Nemotron LLM powering digital humans across gaming, healthcare, and customer service. At GTC 2026, Cosmos 3 unified synthetic world generation with action simulation. The DHT team ships open-source models and open-weight AI — the TPM role coordinates release readiness across QA, security, legal, and partner teams. This is infrastructure-level work for the next generation of AI characters and avatars.",
    status:"Active (JR2014342). Remote-friendly — a major plus since you're in Boca Raton.",
    verdict:"This is a surprisingly strong fit. It's a TPM role (not EM), but the core competencies — cross-team coordination, translating technical work into clear communication, driving delivery in ambiguous environments — map directly to your EM skill set. The domain (3D, animation, generative AI, digital humans) connects to your Meta Reality Labs spatial computing experience. The lower comp range makes it potentially a step down financially, but L5 range ($200K-$322K) is competitive and the domain alignment is strong.",
  }},
  { id:"intel", title:"Company & Stack Intel", icon:"◇", type:"intel", data:{
    news:[
      {e:"NVIDIA ACE Generally Available", d:"Suite of digital human technologies: Audio2Face for lip-sync animation, Riva for speech recognition/TTS, Nemotron LLM for conversational AI. Used by Hippocratic AI (healthcare), Perfect World Games, ServiceNow, Dell."},
      {e:"Audio2Face-3D open weights", d:"Regression (2.3) and diffusion (3.0) models for generating lip-sync from audio. Open weights in ONNX-TRT format. Unreal Engine and Maya plugins. Training framework in Python (Apache license)."},
      {e:"Cosmos 3 (GTC 2026)", d:"First world foundation model unifying synthetic world generation, vision reasoning, and action simulation. Powers synthetic data generation for digital humans and robotics."},
      {e:"DAIR Research Lab", d:"Data-Driven AI for Robotics — researches human motion modeling, retargeting, and synthetic data. Publishes at ICCV, CVPR. Papers on GENMO (generative motion), GeoMan, AdaHuman."},
      {e:"Physical AI Data Factory", d:"Open reference architecture for data curation, augmentation, evaluation. The DHT team likely uses this pipeline for synthetic human motion data."},
      {e:"GR00T N2 for humanoid robots", d:"Humanoid robot foundation model uses human motion data for training. DHT's motion and retargeting work feeds directly into robotics."},
    ],
    stack:[
      {name:"NVIDIA ACE", role:"Digital human technology suite (Audio2Face, Riva, Nemotron)", rel:"Core domain"},
      {name:"Audio2Face-3D", role:"AI-driven facial animation from audio input", rel:"Core product"},
      {name:"Omniverse", role:"3D collaboration and simulation platform", rel:"Integration layer"},
      {name:"Cosmos / Cosmos 3", role:"World foundation models for synthetic data generation", rel:"Key technology"},
      {name:"Python + ONNX-TRT", role:"Model inference, training frameworks, deployment", rel:"Technical context"},
      {name:"Unreal Engine 5", role:"Game engine integration for digital humans", rel:"Partner ecosystem"},
      {name:"Jira", role:"Project tracking — explicitly called out in the posting", rel:"Must-have tool"},
      {name:"gRPC / NIM microservices", role:"Service architecture for ACE deployment", rel:"Technical context"},
    ],
  }},
  { id:"fit", title:"Fit Analysis", icon:"△", type:"fit", data:{
    strengths:[
      "Meta Reality Labs → Digital Humans: You worked on the Quest OS starting experience — the interface layer for XR. Digital humans are the interface layer for AI. Both are about making technology feel natural and human.",
      "Cross-team coordination is your daily job: As an EM managing 12 engineers across pods, you already translate technical discussions into decisions, drive alignment, and coordinate releases.",
      "8+ years program/project management: Your combined EM + CTO experience easily covers the 8+ year requirement. EMs are effectively TPMs + people managers.",
      "Generative AI practitioner: You build with Claude daily, understand model evaluation, prompt engineering, and AI product lifecycle. The role explicitly wants 'familiarity with AI/ML concepts, model/data lifecycles, evaluation.'",
      "You understand 3D/spatial computing: Your Meta Reality Labs work directly touches the '3D/animation, digital humans, robotics' nice-to-have.",
      "Communication and facilitation skills: The role emphasizes 'excellent written and verbal communication and strong meeting facilitation skills' — core EM competencies you exercise daily.",
      "Remote-friendly: You're in Boca Raton. This role supports remote work, unlike most NVIDIA AV roles that require Santa Clara presence.",
    ],
    adjacent:[
      "EM → TPM transition: TPM is a lateral move, not a step up in people management. But at NVIDIA, senior TPMs have high visibility and influence. Frame it as 'I want to drive programs, not manage people.'",
      "XR platform work → Digital human platform work: Both are about coordinating complex technology stacks that combine 3D rendering, AI models, and user interaction into a cohesive experience.",
      "Your AI skill-building (this conversation!) demonstrates exactly the 'AI/ML concepts, model/data lifecycles, evaluation' familiarity they want.",
    ],
    gaps:[
      {gap:"No direct TPM title on resume", critical:"LOW", note:"Your EM experience covers all TPM competencies and more. EMs who coordinate cross-team delivery ARE doing TPM work. Just reframe your resume to emphasize program execution, not people management.", time:"Resume rewrite"},
      {gap:"Open-source software and open-weights AI model release experience", critical:"MEDIUM", note:"Listed as 'ways to stand out.' You haven't managed open-source releases, but you can learn the release lifecycle (licensing, model cards, Hugging Face publishing) quickly.", time:"1-2 weeks"},
      {gap:"Deep 3D/animation domain knowledge", critical:"MEDIUM", note:"Listed as 'ways to stand out,' not required. Your XR background gives you adjacency. Study NVIDIA ACE, Audio2Face, and basic animation pipeline concepts.", time:"2 weeks"},
      {gap:"Jira proficiency", critical:"LOW", note:"They explicitly call this out. If you use Jira at Meta, you're fine. If not, spend a few hours getting comfortable with boards, epics, sprints, and JQL queries.", time:"2-3 days"},
      {gap:"Product lifecycle coordination with QA, security, legal", critical:"LOW", note:"Required experience. As an EM, you've coordinated launches that involve security reviews and legal sign-offs. Reframe your launch experience to emphasize this coordination.", time:"Narrative prep"},
    ],
  }},
  { id:"knowledge", title:"Knowledge Map", icon:"▽", type:"knowledge", data:[
    {name:"NVIDIA Digital Human Stack", topics:["ACE architecture: Audio2Face, Riva ASR/TTS, Nemotron LLM, Animation Graph","Audio2Face-3D: regression vs diffusion models, open weights, ONNX-TRT deployment","NIM microservices: how ACE deploys across cloud and edge (RTX AI PCs)","Omniverse integration: how digital humans live in 3D collaborative environments","Partner ecosystem: Unreal Engine plugin, Maya plugin, Inworld AI, Hippocratic AI"], ai:"Use Claude to walk through the NVIDIA ACE developer page. Ask it to explain each microservice and how they compose into a full digital human pipeline."},
    {name:"Generative AI for Motion & Animation", topics:["Motion generation: how generative AI creates human movement from text/audio prompts","Retargeting: transferring motion from one character skeleton to another","Synthetic data for human motion: generating training data for action recognition","GENMO / GEM research papers from NVIDIA DAIR lab","Physics-based simulation of human movement (Newton physics engine)"], ai:"Ask Claude to explain motion retargeting and why it's hard. Then study NVIDIA's DAIR lab research page. Focus on understanding the concepts, not the math."},
    {name:"Synthetic Data Generation", topics:["Why synthetic data matters: scaling training data without expensive capture","Cosmos 3: unified world generation, vision reasoning, action simulation","Physical AI Data Factory: curation, augmentation, evaluation pipeline","SynthDa: synthetic data augmentation for human action recognition","Quality metrics: how to evaluate synthetic data fidelity and usefulness"], ai:"Use Claude to explain the synthetic data flywheel: real data → train model → generate synthetic data → train better model. Understand how DHT's work feeds into this."},
    {name:"Open-Source AI Model Releases", topics:["Model lifecycle: training → evaluation → documentation → release → maintenance","Model cards: what they contain, why they matter for open releases","Licensing: Apache 2.0, MIT, NVIDIA Open Model License, non-commercial licenses","Hugging Face publishing workflow: model weights, datasets, spaces","Governance: security review, legal clearance, export controls for AI models"], ai:"Study how NVIDIA releases models on Hugging Face (look at Audio2Face, Alpamayo model cards). Ask Claude to explain the full release lifecycle for an open-weight AI model."},
    {name:"TPM Skills for NVIDIA", topics:["Program operating cadence: sprint planning, standup facilitation, retrospectives","Roadmap-aligned scheduling: translating product roadmaps into delivery milestones","Release readiness: coordinating across QA, security, legal, documentation","Risk management: identification, tracking, mitigation, escalation patterns","Dashboards and status reporting: lightweight tools for delivery health","Cross-team integration: managing dependencies between research, product, and engineering"], ai:"Ask Claude to help you design a program operating cadence for a team shipping AI models quarterly. Include all the ceremonies, artifacts, and communication channels."},
    {name:"Interview Prep", topics:["TPM scenario: 'How would you coordinate a cross-team release of an open-source AI model?'","Technical: 'Explain how Audio2Face works at a high level'","Behavioral: 'Tell me about a time you unblocked a multi-team dependency'","Communication: 'How do you translate a technical research discussion into an exec update?'","NVIDIA culture: execution focus, meeting deadlines, OEM customer awareness"], ai:"Run mock interviews with Claude as the DHT hiring manager. Practice explaining digital human concepts AND your program management methodology."},
  ]},
  { id:"plan", title:"30-Day Sprint", icon:"⬡", type:"plan", data:[
    {week:"Week 1: Domain Immersion", days:[
      {day:"Days 1-2", focus:"NVIDIA ACE Deep Dive", tasks:["Read the full NVIDIA ACE developer page and all linked documentation","Study Audio2Face-3D: understand regression vs diffusion models, how they generate lip-sync","Watch any available NVIDIA demos of digital humans (GTC sessions, YouTube)","Use Claude to create a one-page summary of the entire ACE technology stack"], hrs:"3-4 hrs/day"},
      {day:"Days 3-4", focus:"Generative AI Motion & Synthetic Data", tasks:["Study NVIDIA DAIR research lab page — focus on human motion, retargeting, synthetic data papers","Read about Cosmos 3 and the Physical AI Data Factory blueprint","Understand the synthetic data pipeline: capture → augment → generate → evaluate","Use Claude to explain motion retargeting in the context of digital humans"], hrs:"3-4 hrs/day"},
      {day:"Days 5-6", focus:"Open-Source Model Release Lifecycle", tasks:["Study how NVIDIA publishes on Hugging Face: model cards, licenses, weights, datasets","Look at Audio2Face-3D model card as a case study","Understand the release coordination: QA validation, security review, legal sign-off, documentation","Research open-source licensing: Apache 2.0, MIT, NVIDIA Open Model License differences"], hrs:"3-4 hrs/day"},
      {day:"Day 7", focus:"Synthesis", tasks:["Write a 'Digital Human Technology Landscape' one-pager covering the full stack","Map every technology to its role in the product pipeline","Identify your top 3 knowledge gaps for Week 2"], hrs:"2-3 hrs"},
    ]},
    {week:"Week 2: TPM Methodology + Cross-Domain Connections", days:[
      {day:"Days 8-9", focus:"TPM Framework Design", tasks:["Design your ideal program operating cadence for a team shipping open-source AI models","Include: sprint ceremonies, release readiness checklist, risk register, status dashboard","Create a release readiness template: QA signoff, security review, legal clearance, docs, model card","Study Jira workflows: create a sample project board with epics, stories, sprints"], hrs:"3-4 hrs/day"},
      {day:"Days 10-11", focus:"XR → Digital Humans Narrative", tasks:["Map your Meta Reality Labs experience to digital human technology concepts","Document the parallels: 3D rendering, real-time interaction, AI-driven experiences, platform coordination","Prepare your story: 'I've been coordinating complex 3D + AI technology stacks at Meta. Digital humans are the next evolution of this work.'","Write 5 STAR stories that bridge XR experience to DHT program management"], hrs:"3-4 hrs/day"},
      {day:"Days 12-13", focus:"Partner Ecosystem & Integrations", tasks:["Study Unreal Engine 5 integration with NVIDIA ACE (plugin architecture)","Research key partners: Inworld AI (gaming NPCs), Hippocratic AI (healthcare), UneeQ (customer service)","Understand cross-product integrations within NVIDIA: ACE ↔ Omniverse ↔ Cosmos ↔ NIM","This maps to the 'collaborate with partner teams across DHT and NVIDIA' responsibility"], hrs:"3-4 hrs/day"},
      {day:"Day 14", focus:"Synthesis", tasks:["Update your one-pager with deeper technical understanding","Prepare your 'Why Digital Humans, Why NVIDIA, Why TPM' narrative","Review and refine STAR stories"], hrs:"2-3 hrs"},
    ]},
    {week:"Week 3: Competitive Context + Narrative Polish", days:[
      {day:"Days 15-16", focus:"Digital Human Landscape", tasks:["Research competitors: Soul Machines, Synthesia, HeyGen, Inworld AI, Convai","Understand where NVIDIA ACE fits: platform/infrastructure vs application layer","Study the gaming NPC space: how AI characters are evolving","Research enterprise digital assistants: healthcare, banking, retail use cases"], hrs:"3-4 hrs/day"},
      {day:"Days 17-18", focus:"Resume & Materials", tasks:["Rewrite resume to emphasize: program execution, cross-team coordination, release management, 3D/AI technology","De-emphasize people management; emphasize delivery and technical coordination","Draft cover letter: connect Meta XR → NVIDIA Digital Humans → your passion for human-AI interaction","Prepare a '90-day plan' for the TPM role: how you'd establish cadence and drive first release"], hrs:"3-4 hrs/day"},
      {day:"Days 19-21", focus:"Interview Prep", tasks:["Mock interviews with Claude: TPM scenario questions, technical understanding, behavioral","Practice: 'Walk me through how you'd coordinate the release of Audio2Face 4.0'","Practice: 'How do you handle a dependency that's blocking 3 teams simultaneously?'","Practice: 'Explain the digital human technology pipeline to a non-technical executive'","Practice explaining Jira workflows and how you use data to track program health"], hrs:"3-4 hrs/day"},
    ]},
    {week:"Week 4: Apply", days:[
      {day:"Days 22-25", focus:"Full Mock Loop + Polish", tasks:["Full mock interview: TPM scenario + technical + behavioral + culture fit","Refine weak areas based on mock feedback","Finalize all application materials","Research NVIDIA DHT team members on LinkedIn — look for warm introductions"], hrs:"3-4 hrs/day"},
      {day:"Days 26-30", focus:"Submit + Network", tasks:["Submit application with tailored resume, cover letter, 90-day plan","Reach out to NVIDIA DHT engineers or TPMs on LinkedIn","Share your enthusiasm for the intersection of AI and human interaction","Follow up on any connections from the NVIDIA AV roles you've also been exploring"], hrs:"2-3 hrs/day"},
    ]},
  ]},
  { id:"tactics", title:"AI Tactics", icon:"□", type:"tactics", data:[
    {name:"Claude as Digital Human Tutor", desc:"Quickly build domain knowledge by having Claude explain the ACE stack and generative AI animation concepts.", ex:"Explain NVIDIA's Audio2Face technology: how does it generate facial animation from audio? What's the difference between the regression model (2.3) and the diffusion model (3.0)? Explain it at a level I could present to a VP."},
    {name:"Claude as TPM Process Designer", desc:"Design program management frameworks tailored to AI model release cycles.", ex:"Help me design a release readiness checklist for an open-source AI model release at NVIDIA. Include: QA validation criteria, security review steps, legal clearance (licensing), documentation requirements, Hugging Face publishing steps, and partner communication plan."},
    {name:"Claude as Mock Interviewer", desc:"Practice TPM-specific interview scenarios for the NVIDIA DHT role.", ex:"You're the hiring manager for NVIDIA's Digital Human Technology team. Interview me for the TPM role. Focus on: how I'd establish a program operating cadence, coordinate a cross-team model release, handle conflicting priorities between research and product, and translate technical discussions into executive updates."},
    {name:"Claude as Narrative Coach", desc:"Refine your story connecting Meta XR to NVIDIA Digital Humans.", ex:"I'm an EM at Meta Reality Labs working on Quest OS. I'm applying for a TPM role at NVIDIA's Digital Human Technology team. Help me craft a compelling narrative connecting my XR experience to digital humans. What are the strongest parallels? What's my unfair advantage?"},
    {name:"Claude as Research Summarizer", desc:"Quickly digest NVIDIA DAIR lab papers on motion generation and retargeting.", ex:"Summarize the GENMO paper from NVIDIA DAIR lab. What problem does it solve? How does it generate human motion? How would a TPM need to understand this to coordinate the team's roadmap?"},
  ]},
  { id:"res", title:"Resources", icon:"◈", type:"res", data:[
    {cat:"NVIDIA DHT-Specific", items:["NVIDIA ACE developer page (developer.nvidia.com/ace)","Audio2Face-3D on Hugging Face (model cards, weights)","NVIDIA DAIR research lab page (research.nvidia.com/labs/dair)","GTC 2026 Digital Human and Cosmos sessions","NVIDIA Omniverse platform documentation"]},
    {cat:"Domain Knowledge", items:["Soul Machines, Synthesia, HeyGen — competitor digital human platforms","Unreal Engine MetaHuman documentation","Motion retargeting and animation pipeline basics","Synthetic data generation for AI training overview","Open-source AI model governance best practices"]},
    {cat:"TPM Skills", items:["Jira administration and JQL query basics","Release management frameworks for AI/ML products","Agile/Scrum refresher (if pursuing CSM or SAFe cert)","Risk management frameworks for cross-team programs","Status dashboard design patterns (Confluence, Notion, or lightweight tools)"]},
    {cat:"Interview Prep", items:["NVIDIA TPM interview format (typically lighter on coding, heavier on scenario/behavioral)","Exponent TPM interview guide","Program management case studies: coordinating multi-team AI product launches","NVIDIA culture and values research"]},
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
    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4"><div className="text-xs tracking-widest text-blue-400 mb-1.5 font-mono">ASSESSMENT</div><div className="text-blue-200 text-sm">{d.verdict}</div></div>
  </div>
);

const Intel = ({d}) => (
  <div className="space-y-6">
    <div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">RECENT DEVELOPMENTS</div>{d.news.map((n,i)=><div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 mb-2"><div className="text-white text-sm font-medium mb-1">{n.e}</div><div className="text-gray-400 text-sm">{n.d}</div></div>)}</div>
    <div><div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">TECHNOLOGY STACK</div>{d.stack.map((s,i)=><div key={i} className="flex items-center gap-3 py-1.5"><Badge color={s.rel.includes("Core")?"green":s.rel==="Must-have tool"?"red":s.rel.includes("Key")?"amber":"gray"}>{s.rel}</Badge><span className="text-white text-sm font-medium min-w-32">{s.name}</span><span className="text-gray-500 text-sm">{s.role}</span></div>)}</div>
  </div>
);

const FitView = ({d}) => (
  <div className="space-y-6">
    <div><div className="text-xs tracking-widest text-emerald-400 mb-3 font-mono">STRENGTHS</div>{d.strengths.map((s,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-emerald-400 mt-0.5 text-xs">✓</span><span className="text-gray-300 text-sm">{s}</span></div>)}</div>
    <div><div className="text-xs tracking-widest text-blue-400 mb-3 font-mono">ADJACENT — REFRAME THESE</div>{d.adjacent.map((a,i)=><div key={i} className="flex items-start gap-2 mb-2"><span className="text-blue-400 mt-0.5 text-xs">↗</span><span className="text-gray-300 text-sm">{a}</span></div>)}</div>
    <div><div className="text-xs tracking-widest text-red-400 mb-3 font-mono">GAPS</div>{d.gaps.map((g,i)=><div key={i} className="border border-white/10 rounded-lg p-3 mb-2"><div className="flex items-center gap-2 mb-1"><span className="text-white text-sm font-medium">{g.gap}</span><Badge color={g.critical==="LOW"?"green":"amber"}>{g.critical}</Badge></div><p className="text-gray-400 text-sm">{g.note}</p><div className="text-xs text-gray-600 font-mono mt-1">Close in: {g.time}</div></div>)}</div>
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
      <div className="border-b border-white/10 px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"/><span className="text-xs font-mono text-gray-500 tracking-widest">JOB PREP INTELLIGENCE BRIEF</span></div><h1 className="text-2xl md:text-3xl font-light text-white mb-2" style={{letterSpacing:"-0.02em"}}>NVIDIA · TPM, Digital Human Technology</h1><p className="text-gray-500 text-sm">Where your XR + AI + program execution skills converge · 30-day sprint</p></div></div>
      <div className="border-b border-white/10 px-6 py-3 sticky top-0 z-10" style={{background:"rgba(9,9,9,0.95)",backdropFilter:"blur(12px)"}}><div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto">{S.map(x=><button key={x.id} onClick={()=>setA(x.id)} className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${a===x.id?"bg-white/10 text-white":"text-gray-600 hover:text-gray-400"}`}><span className="mr-1.5">{x.icon}</span>{x.title}</button>)}</div></div>
      <div className="px-6 py-8"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-2 mb-6"><span className="text-amber-400 text-lg">{s.icon}</span><h2 className="text-xl font-light text-white">{s.title}</h2></div><V d={s.data}/></div></div>
      <div className="border-t border-white/5 px-6 py-4"><div className="max-w-4xl mx-auto text-center"><p className="text-gray-700 text-xs font-mono">~80 hrs over 30 days · 2.5-3 hrs/day avg · domain learning + narrative approach</p></div></div>
    </div>
  );
}
