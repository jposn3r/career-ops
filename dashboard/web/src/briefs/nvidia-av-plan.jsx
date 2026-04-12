import { useState } from "react";

export const tasks = [
  { title: "AV Simulation Fundamentals", type: "learning", roles: ["nvidia-av-planning", "nvidia-av-testing"], status: "not-started", desc: "Closed-loop sim, AlpaSim, DRIVE Sim, sensor simulation", priority: "medium", hours: 10 },
  { title: "AV Motion Planning Study", type: "learning", roles: ["nvidia-av-planning"], status: "not-started", desc: "Frenet frames, trajectory optimization, behavior planning, Alpamayo architecture", priority: "medium", hours: 6 },
  { title: "AV Safety Standards Overview", type: "learning", roles: ["nvidia-av-planning", "nvidia-av-testing"], status: "not-started", desc: "ISO 26262, SOTIF, RSS framework, NCAP 2026 requirements", priority: "medium", hours: 4 },
];

export const meta = {
  id: "nvidia-av-planning",
  company: "NVIDIA",
  title: "Sr. Dir, AV Planning & Controls",
  comp: "$240K–$379.5K",
  fit: "55%",
  priority: 5,
  status: "research",
  loc: "Santa Clara, CA",
  tags: ["PM/PgM","AV","Planning & Controls","Leadership"],
  color: "#f59e0b",
  strengths: ["EM → PM leadership skills","Spatial computing adjacency","AI-native thinking","Cross-team coordination","Builder mentality"],
  gaps: [{g:"No AV/robotics domain experience",s:"HIGH"},{g:"Planning & controls terminology",s:"HIGH"},{g:"NVIDIA DRIVE stack knowledge",s:"HIGH"},{g:"12+ yrs PM/PgM framing",s:"MEDIUM"}],
  verdict: "Compelling domain but significant stretch. Medium priority.",
};

const sections = [
  {
    id: "context",
    title: "The Opportunity",
    icon: "◆",
    content: {
      type: "analysis",
      data: {
        role: "Senior Director, Product & Program Management. AV Planning & Controls",
        comp: "$240K-$379.5K base + equity",
        team: "NVIDIA Autonomous Vehicles Division",
        focus: "Alpamayo ecosystem, L2 planners, L4 robotaxis, classical safety monitors, parking planners",
        status: "Applications accepted through March 16, 2026 (deadline passed, but roles like this recirculate or have sister postings)",
        fit: [
          "Your EM experience at Meta managing 12 engineers maps directly to the 5+ years people management requirement",
          "Your spatial computing expertise (Quest OS) translates to physical AI / sensor-driven systems thinking",
          "Your AI-native approach and ability to ship complex products at scale is exactly the execution DNA they want",
          "Your startup CTO instincts (NexusWealth, Hostr) show the builder mentality for ambitious roadmaps",
        ],
        gaps: [
          "No direct AV / robotics motion planning domain experience",
          "Need fluency in planning & controls terminology and architecture",
          "Need to understand the NVIDIA DRIVE stack and Alpamayo ecosystem deeply",
          "12+ years PM/PgM experience required; your path is EM, which is adjacent but needs reframing",
        ],
      },
    },
  },
  {
    id: "stack",
    title: "NVIDIA AV Stack Decoded",
    icon: "◇",
    content: {
      type: "stack",
      layers: [
        {
          name: "DRIVE AGX Thor",
          desc: "In-vehicle SoC. 2000+ TFLOPS. ASIL-D safety rated. Dual ECU for L4 redundancy. This is the silicon brain.",
          role: "Hardware compute platform",
        },
        {
          name: "DriveOS",
          desc: "Real-time OS with safety certification. Foundation for all software layers above.",
          role: "Operating system",
        },
        {
          name: "DRIVE Hyperion",
          desc: "Full reference platform: 14 cameras, 9 radars, 1 LiDAR, 12 ultrasonics + Thor compute. Production-ready for L4.",
          role: "Sensor + compute platform",
        },
        {
          name: "DRIVE AV Software",
          desc: "The full-stack autonomous driving software. This is where the job lives. Perception, planning, controls.",
          role: "Software stack (YOUR DOMAIN)",
        },
        {
          name: "Alpamayo",
          desc: "Open VLA model family. 10B-param reasoning model (Alpamayo 1.5), AlpaSim simulator, 1,700+ hrs driving data. Chain-of-thought reasoning for long-tail edge cases.",
          role: "AI reasoning layer",
        },
        {
          name: "Halos / Halos OS",
          desc: "Safety architecture. Three-layer safety stack. NCAP 5-star active safety. Classical safety monitors live here.",
          role: "Safety framework",
        },
        {
          name: "Omniverse / Cosmos",
          desc: "Simulation and synthetic data generation. World models for training. NuRec for neural reconstruction.",
          role: "Simulation + data",
        },
      ],
    },
  },
  {
    id: "knowledge",
    title: "Core Knowledge Map",
    icon: "△",
    content: {
      type: "knowledge",
      domains: [
        {
          name: "Motion Planning Fundamentals",
          topics: [
            "Path planning algorithms: A*, RRT, RRT*, PRM, Lattice planners",
            "Trajectory optimization: minimizing jerk, curvature constraints, time-optimal planning",
            "Behavior planning: finite state machines, decision trees, POMDP-based approaches",
            "Mission planning: route-level navigation, graph search over road networks",
            "Occupancy grids and collision checking",
          ],
          aiAccelerator:
            "Use Claude to explain each algorithm with visual analogies. Ask for pseudocode, then ask it to walk through edge cases. 2-3 hours per topic.",
        },
        {
          name: "Vehicle Controls",
          topics: [
            "PID controllers for lateral and longitudinal control",
            "Model Predictive Control (MPC): the gold standard for AV trajectory tracking",
            "Vehicle dynamics: bicycle model, tire slip, understeer/oversteer",
            "Stanley controller, Pure Pursuit for path following",
            "Control barrier functions for safety guarantees",
          ],
          aiAccelerator:
            "Ask Claude to simulate MPC scenarios in Python. Build intuition by tweaking parameters and seeing how the car responds. 2-3 hours per topic.",
        },
        {
          name: "AI-Based Planning (The Frontier)",
          topics: [
            "End-to-end driving: camera-in to actuation-out neural networks",
            "Vision-Language-Action (VLA) models: the Alpamayo paradigm",
            "Chain-of-thought reasoning for driving decisions",
            "Imitation learning and behavioral cloning",
            "Reinforcement learning for planning: GRPO, reward shaping",
            "Dual-system architecture: fast System 1 (reactive) + slow System 2 (reasoning)",
          ],
          aiAccelerator:
            "Read the Alpamayo Hugging Face page + technical blog. Use Claude to decompose the architecture. Study the AutoVLA and DriveVLM papers via Claude summaries.",
        },
        {
          name: "Safety & Validation",
          topics: [
            "Classical safety monitors: rule-based override systems",
            "Responsibility-Sensitive Safety (RSS) framework",
            "ASIL levels (A-D) and ISO 26262 functional safety",
            "NCAP safety ratings and active safety requirements",
            "Long-tail edge cases and how to systematically address them",
            "Closed-loop simulation vs. open-loop evaluation",
          ],
          aiAccelerator:
            "Use Claude to create a safety framework cheat sheet. Map each concept to NVIDIA's Halos architecture. 1-2 hours per topic.",
        },
        {
          name: "OEM Partnerships & Industry",
          topics: [
            "NVIDIA's OEM partners: Mercedes-Benz (CLA), BYD, Geely, Nissan, JLR, Lucid",
            "Uber robotaxi partnership: 28 markets by 2028",
            "Competitive landscape: Tesla FSD, Waymo, Mobileye, Cruise",
            "L2 vs L2++ vs L3 vs L4: regulatory and technical distinctions",
            "Autoware open-source stack (TIER IV / Isuzu integration)",
          ],
          aiAccelerator:
            "Use Claude + web search to map the competitive landscape. Build a comparison matrix you can reference in interviews.",
        },
      ],
    },
  },
  {
    id: "plan",
    title: "30-Day Sprint Plan",
    icon: "▽",
    content: {
      type: "plan",
      weeks: [
        {
          week: "Week 1: Foundation Layer",
          subtitle: "Days 1-7",
          daily: [
            {
              day: "Days 1-2",
              focus: "AV Architecture Overview",
              tasks: [
                "Coursera: Start UofT Self-Driving Cars Specialization, Course 1 (skim at 2x, focus on architecture overview)",
                "Read NVIDIA DRIVE AV product page + Hyperion docs end to end",
                "Use Claude to create a glossary of 50 key AV terms (BEV, HD map, odometry, ego vehicle, etc.)",
                "Watch Jensen Huang's CES 2026 keynote section on autonomous driving",
              ],
              hours: "4-5 hrs/day",
            },
            {
              day: "Days 3-4",
              focus: "Motion Planning Deep Dive",
              tasks: [
                "Coursera: Course 4 (Motion Planning for Self-Driving Cars). Complete in 2 days at accelerated pace",
                "Use Claude to implement A*, RRT* in Python. Run them. Build intuition",
                "Study behavior planning via FSMs. Ask Claude to design a highway lane-change FSM",
                "Read one survey paper on AV motion planning (use Claude to summarize and extract key insights)",
              ],
              hours: "4-5 hrs/day",
            },
            {
              day: "Days 5-6",
              focus: "Vehicle Controls Fundamentals",
              tasks: [
                "Study PID control, MPC, Pure Pursuit, Stanley controller via Claude tutorials",
                "Ask Claude to build a simple MPC demo in Python (bicycle model + trajectory tracking)",
                "Understand the bicycle model for vehicle dynamics. Draw the free-body diagram with Claude's help",
                "Study how planning hands off to controls: the planning-control interface",
              ],
              hours: "4-5 hrs/day",
            },
            {
              day: "Day 7",
              focus: "Week 1 Synthesis",
              tasks: [
                "Create a one-page 'AV Planning & Controls' architecture diagram using Claude",
                "Write a 500-word summary of what you learned. Explain it like you're briefing an exec",
                "Identify your top 5 knowledge gaps for Week 2",
              ],
              hours: "2-3 hrs",
            },
          ],
        },
        {
          week: "Week 2: NVIDIA Deep Dive",
          subtitle: "Days 8-14",
          daily: [
            {
              day: "Days 8-9",
              focus: "Alpamayo Ecosystem",
              tasks: [
                "Read the full NVIDIA Alpamayo technical blog post (developer.nvidia.com)",
                "Study Alpamayo 1.5 on Hugging Face: architecture, training data, capabilities",
                "Use Claude to decompose VLA architecture: vision encoder, text encoder, trajectory decoder",
                "Understand Chain-of-Causation (CoC) reasoning: how it differs from standard CoT",
                "Read the AlpaSim framework docs: understand closed-loop vs open-loop simulation",
              ],
              hours: "4-5 hrs/day",
            },
            {
              day: "Days 10-11",
              focus: "NVIDIA Safety Stack + L2 Systems",
              tasks: [
                "Study Halos OS: three-layer safety architecture, ASIL-D compliance",
                "Understand classical safety monitors: how they override AI planners",
                "Study NCAP 2026 requirements and how NVIDIA's active safety stack meets them",
                "Research the L2++ system: highway driving, urban capabilities, parking planners",
                "Map the Mercedes-Benz CLA integration as a case study",
              ],
              hours: "4-5 hrs/day",
            },
            {
              day: "Days 12-13",
              focus: "End-to-End Driving & VLA Models",
              tasks: [
                "Read the VLA4AD survey paper (arxiv 2512.16760) via Claude summary",
                "Study the dual-system paradigm: fast/reactive System 1 + slow/reasoning System 2",
                "Understand how Alpamayo serves as a teacher model for distillation into edge models",
                "Study the trajectory tokenization approach (continuous paths to discrete tokens)",
                "Research reinforcement learning for planning: GRPO and reward shaping",
              ],
              hours: "4-5 hrs/day",
            },
            {
              day: "Day 14",
              focus: "Week 2 Synthesis",
              tasks: [
                "Build a complete NVIDIA AV stack diagram showing all components and their relationships",
                "Write a 'briefing doc' explaining Alpamayo to a non-technical exec",
                "Prepare 10 intelligent questions you could ask in an interview about the planning stack",
              ],
              hours: "2-3 hrs",
            },
          ],
        },
        {
          week: "Week 3: Industry Context + Leadership Lens",
          subtitle: "Days 15-21",
          daily: [
            {
              day: "Days 15-16",
              focus: "Competitive Landscape",
              tasks: [
                "Deep dive: Tesla FSD architecture, data flywheel, vertical integration approach",
                "Deep dive: Waymo's system, HD maps, structured testing, commercial deployment",
                "Study Mobileye's approach: RSS framework, camera-first strategy",
                "Build a comparison matrix: NVIDIA vs Tesla vs Waymo vs Mobileye on planning approach, hardware, safety, scale",
              ],
              hours: "3-4 hrs/day",
            },
            {
              day: "Days 17-18",
              focus: "Product Management for AV",
              tasks: [
                "Study how AV companies prioritize: safety metrics, disengagement rates, miles between interventions",
                "Understand the product management challenges: prioritizing which edge cases to solve",
                "Research OEM integration challenges: different vehicle platforms, sensor configs, regional regulations",
                "Study how to measure 'driving comfort' and 'driving experience' quantitatively",
              ],
              hours: "3-4 hrs/day",
            },
            {
              day: "Days 19-20",
              focus: "Leadership & Team Building",
              tasks: [
                "Research how AV TPM/PM teams are structured at NVIDIA, Waymo, Cruise, Aurora",
                "Study matrixed org challenges: PM/PgM coordinating with ML engineers, safety engineers, OEM partners",
                "Prepare your narrative: how your Meta EM experience translates to this role",
                "Build your '90-day plan' framework for the role (what you'd do in first 90 days)",
              ],
              hours: "3-4 hrs/day",
            },
            {
              day: "Day 21",
              focus: "Week 3 Synthesis",
              tasks: [
                "Write your competitive landscape one-pager",
                "Draft your 'why me' narrative connecting Meta EM to NVIDIA AV PM leadership",
                "Refine your 90-day plan",
              ],
              hours: "2-3 hrs",
            },
          ],
        },
        {
          week: "Week 4: Interview Prep + Portfolio",
          subtitle: "Days 22-30",
          daily: [
            {
              day: "Days 22-24",
              focus: "Technical Interview Prep",
              tasks: [
                "Use Claude to run mock technical interviews: 'Explain how MPC works for trajectory tracking'",
                "Practice explaining VLA models to both technical and non-technical audiences",
                "Prepare answers for: 'How would you prioritize between L2 comfort improvements vs L4 capability?'",
                "Study system design: 'Design the planning stack for a robotaxi operating in San Francisco'",
                "Prepare for 'How would you handle a safety-critical bug in the planning module?'",
              ],
              hours: "3-4 hrs/day",
            },
            {
              day: "Days 25-27",
              focus: "Behavioral + Leadership Prep",
              tasks: [
                "Prepare STAR stories mapping Meta EM experience to AV PM leadership",
                "Practice: 'How do you build high-performing teams across time zones?'",
                "Practice: 'Tell me about a time you had to make a decision with incomplete information'",
                "Practice: 'How do you handle conflict between engineering and product priorities?'",
                "Use Claude as interview coach: have it play the interviewer role and give feedback",
              ],
              hours: "3-4 hrs/day",
            },
            {
              day: "Days 28-29",
              focus: "Portfolio & Artifacts",
              tasks: [
                "Create a polished one-pager: 'My Vision for NVIDIA AV Planning & Controls'",
                "Build a presentation deck (3-5 slides) showing your understanding of the domain",
                "Prepare a written 'product brief' for a hypothetical planning feature improvement",
                "Do a final full mock interview with Claude playing NVIDIA hiring manager",
              ],
              hours: "4-5 hrs/day",
            },
            {
              day: "Day 30",
              focus: "Final Review",
              tasks: [
                "Review all synthesis docs from Weeks 1-3",
                "Do one final mock interview covering technical + behavioral",
                "Finalize your 90-day plan document",
                "Reach out to NVIDIA recruiters / connections on LinkedIn with a tailored message",
              ],
              hours: "2-3 hrs",
            },
          ],
        },
      ],
    },
  },
  {
    id: "ai",
    title: "AI Acceleration Tactics",
    icon: "⬡",
    content: {
      type: "tactics",
      tactics: [
        {
          name: "Claude as Tutor",
          desc: "For every new concept, ask Claude to explain it three ways: (1) to a 10-year-old, (2) to a software engineer, (3) to a VP of Engineering. This forces deep understanding.",
          example: "\"Explain Model Predictive Control three ways: for a child, for a software engineer, and for a VP.\"",
        },
        {
          name: "Claude as Paper Summarizer",
          desc: "Feed arxiv papers and ask for: key contribution, how it relates to NVIDIA's stack, what interview question it could generate, and one thing that surprised you.",
          example: "\"Summarize this VLA paper. What would NVIDIA care about? What interview question does it suggest?\"",
        },
        {
          name: "Claude as Mock Interviewer",
          desc: "Have Claude play the role of a senior NVIDIA director interviewing you. Ask it to be tough but fair. Get feedback after each answer.",
          example: "\"You are a senior director at NVIDIA AV. Interview me for a planning & controls PM leader role. Be rigorous.\"",
        },
        {
          name: "Claude as Code Companion",
          desc: "Build working implementations of key algorithms. Nothing cements understanding like running code. Use Claude to generate, then modify and break things.",
          example: "\"Build me a Python MPC controller for a bicycle model. Then help me understand what happens when I change the prediction horizon.\"",
        },
        {
          name: "Claude as Synthesis Engine",
          desc: "At the end of each day, paste your notes and ask Claude to synthesize them into a structured brief. This compounds learning.",
          example: "\"Here are my notes from today. Synthesize into a structured brief I can reference in an interview.\"",
        },
        {
          name: "Web Search + Claude Research",
          desc: "Use Claude's web search to track the latest NVIDIA AV announcements, GTC talks, and partner news in real time. The field moves fast.",
          example: "\"Search for the latest NVIDIA autonomous vehicle announcements from GTC 2026.\"",
        },
      ],
    },
  },
  {
    id: "resources",
    title: "Essential Resources",
    icon: "□",
    content: {
      type: "resources",
      categories: [
        {
          name: "Courses (Priority Order)",
          items: [
            "UofT Self-Driving Cars Specialization on Coursera (especially Course 4: Motion Planning)",
            "MIT 6.800 Robotics: Science and Systems (free lectures on motion planning)",
            "Stanford CS237B: Principles of Robot Autonomy II (planning and decision-making)",
          ],
        },
        {
          name: "NVIDIA-Specific",
          items: [
            "NVIDIA Developer Blog: Alpamayo technical posts",
            "Alpamayo on Hugging Face (model card, dataset, AlpaSim)",
            "NVIDIA DRIVE AV product documentation",
            "GTC 2026 autonomous driving sessions (recordings when available)",
            "NVIDIA Halos safety documentation",
          ],
        },
        {
          name: "Key Papers (Use Claude to Summarize)",
          items: [
            "VLA4AD Survey (arxiv 2512.16760): comprehensive VLA landscape",
            "AutoVLA (NeurIPS 2025): adaptive reasoning + trajectory planning",
            "Alpamayo technical report on Hugging Face",
            "RSS (Responsibility-Sensitive Safety) by Mobileye: foundational safety framework",
            "UniAD: Planning-Oriented Autonomous Driving (CVPR 2023): influential planning paper",
          ],
        },
        {
          name: "Industry Context",
          items: [
            "The Verge / TechCrunch coverage of NVIDIA CES 2026 self-driving demos",
            "NVIDIA investor relations: automotive revenue breakdowns",
            "SAE J3016 levels of driving automation (the L0-L5 standard)",
            "Euro NCAP 2026 testing protocols",
          ],
        },
      ],
    },
  },
];

const AnalysisBlock = ({ data }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4">
        <div className="text-xs tracking-widest text-amber-400 mb-2 font-mono">ROLE</div>
        <div className="text-white text-sm">{data.role}</div>
      </div>
      <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4">
        <div className="text-xs tracking-widest text-amber-400 mb-2 font-mono">COMPENSATION</div>
        <div className="text-white text-sm">{data.comp}</div>
      </div>
      <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4">
        <div className="text-xs tracking-widest text-amber-400 mb-2 font-mono">TEAM</div>
        <div className="text-white text-sm">{data.team}</div>
      </div>
      <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4">
        <div className="text-xs tracking-widest text-amber-400 mb-2 font-mono">FOCUS AREAS</div>
        <div className="text-white text-sm">{data.focus}</div>
      </div>
    </div>
    <div className="bg-amber-900 bg-opacity-20 border border-amber-600 border-opacity-30 rounded-lg p-4">
      <div className="text-xs tracking-widest text-amber-400 mb-1 font-mono">STATUS NOTE</div>
      <div className="text-amber-200 text-sm">{data.status}</div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="text-xs tracking-widest text-emerald-400 mb-3 font-mono">YOUR STRENGTHS FOR THIS ROLE</div>
        {data.fit.map((f, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <span className="text-emerald-400 mt-0.5 text-xs">✓</span>
            <span className="text-gray-300 text-sm">{f}</span>
          </div>
        ))}
      </div>
      <div>
        <div className="text-xs tracking-widest text-red-400 mb-3 font-mono">GAPS TO CLOSE IN 30 DAYS</div>
        {data.gaps.map((g, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <span className="text-red-400 mt-0.5 text-xs">✕</span>
            <span className="text-gray-300 text-sm">{g}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StackBlock = ({ layers }) => (
  <div className="space-y-2">
    {layers.map((l, i) => (
      <div
        key={i}
        className={`border rounded-lg p-4 transition-all ${
          l.role.includes("YOUR DOMAIN")
            ? "bg-emerald-900 bg-opacity-30 border-emerald-500 border-opacity-50"
            : "bg-white bg-opacity-5 border-white border-opacity-10"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-semibold text-sm">{l.name}</span>
              {l.role.includes("YOUR DOMAIN") && (
                <span className="text-xs bg-emerald-500 bg-opacity-30 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                  THIS IS THE JOB
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{l.desc}</p>
          </div>
          <div className="text-xs text-gray-500 font-mono whitespace-nowrap">{l.role}</div>
        </div>
      </div>
    ))}
  </div>
);

const KnowledgeBlock = ({ domains }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="space-y-3">
      {domains.map((d, i) => (
        <div key={i} className="border border-white border-opacity-10 rounded-lg overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full text-left p-4 flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors"
          >
            <span className="text-white font-semibold text-sm">{d.name}</span>
            <span className="text-gray-500 text-lg">{expanded === i ? "−" : "+"}</span>
          </button>
          {expanded === i && (
            <div className="px-4 pb-4 border-t border-white border-opacity-5">
              <div className="mt-3 space-y-1.5">
                {d.topics.map((t, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 text-xs">›</span>
                    <span className="text-gray-300 text-sm">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-blue-900 bg-opacity-20 border border-blue-500 border-opacity-20 rounded-lg p-3">
                <div className="text-xs tracking-widest text-blue-400 mb-1 font-mono">AI ACCELERATION</div>
                <p className="text-blue-200 text-sm">{d.aiAccelerator}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const PlanBlock = ({ weeks }) => {
  const [activeWeek, setActiveWeek] = useState(0);
  const week = weeks[activeWeek];
  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {weeks.map((w, i) => (
          <button
            key={i}
            onClick={() => setActiveWeek(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
              activeWeek === i
                ? "bg-amber-500 bg-opacity-20 text-amber-300 border border-amber-500 border-opacity-40"
                : "bg-white bg-opacity-5 text-gray-400 border border-white border-opacity-10 hover:bg-white hover:bg-opacity-10"
            }`}
          >
            Week {i + 1}
          </button>
        ))}
      </div>
      <div className="mb-3">
        <h4 className="text-white font-semibold">{week.week}</h4>
        <p className="text-gray-500 text-sm font-mono">{week.subtitle}</p>
      </div>
      <div className="space-y-4">
        {week.daily.map((d, i) => (
          <div key={i} className="border border-white border-opacity-10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-amber-400 font-mono text-xs">{d.day}</span>
                <span className="text-gray-500 mx-2">·</span>
                <span className="text-white text-sm font-semibold">{d.focus}</span>
              </div>
              <span className="text-gray-600 text-xs font-mono">{d.hours}</span>
            </div>
            <div className="space-y-1.5">
              {d.tasks.map((t, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5 text-xs font-mono">{String(j + 1).padStart(2, "0")}</span>
                  <span className="text-gray-300 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TacticsBlock = ({ tactics }) => (
  <div className="space-y-4">
    {tactics.map((t, i) => (
      <div key={i} className="border border-white border-opacity-10 rounded-lg p-4">
        <div className="text-white font-semibold text-sm mb-1">{t.name}</div>
        <p className="text-gray-400 text-sm mb-3">{t.desc}</p>
        <div className="bg-gray-900 rounded-lg p-3 border border-white border-opacity-5">
          <div className="text-xs text-gray-600 font-mono mb-1">PROMPT EXAMPLE</div>
          <p className="text-amber-300 text-sm italic">"{t.example}"</p>
        </div>
      </div>
    ))}
  </div>
);

const ResourcesBlock = ({ categories }) => (
  <div className="space-y-6">
    {categories.map((c, i) => (
      <div key={i}>
        <div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">{c.name.toUpperCase()}</div>
        <div className="space-y-1.5">
          {c.items.map((item, j) => (
            <div key={j} className="flex items-start gap-2">
              <span className="text-gray-600 mt-0.5 text-xs">›</span>
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const renderContent = (section) => {
  const c = section.content;
  switch (c.type) {
    case "analysis":
      return <AnalysisBlock data={c.data} />;
    case "stack":
      return <StackBlock layers={c.layers} />;
    case "knowledge":
      return <KnowledgeBlock domains={c.domains} />;
    case "plan":
      return <PlanBlock weeks={c.weeks} />;
    case "tactics":
      return <TacticsBlock tactics={c.tactics} />;
    case "resources":
      return <ResourcesBlock categories={c.categories} />;
    default:
      return null;
  }
};

export default function NvidiaAVPlan() {
  const [activeSection, setActiveSection] = useState("context");
  const current = sections.find((s) => s.id === activeSection);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(145deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)",
        fontFamily: "'IBM Plex Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>

      {/* Header */}
      <div className="border-b border-white border-opacity-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-gray-500 tracking-widest">INTELLIGENCE BRIEF</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
            NVIDIA AV Planning & Controls
          </h1>
          <p className="text-gray-500 text-sm">
            30-day AI-accelerated learning sprint. From zero AV domain knowledge to interview-ready expert.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-white border-opacity-10 px-6 py-3 sticky top-0 z-10" style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${
                activeSection === s.id
                  ? "bg-white bg-opacity-10 text-white"
                  : "text-gray-600 hover:text-gray-400"
              }`}
            >
              <span className="mr-1.5">{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-amber-400 text-lg">{current.icon}</span>
            <h2 className="text-xl font-light text-white">{current.title}</h2>
          </div>
          {renderContent(current)}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white border-opacity-5 px-6 py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-xs font-mono">
            Total estimated time: 100-120 hours over 30 days (3.5-4 hrs/day avg)
          </p>
        </div>
      </div>
    </div>
  );
}
