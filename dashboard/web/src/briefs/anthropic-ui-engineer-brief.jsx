import { useState } from "react";

export const tasks = [
  { title: "Streaming Chat Clone", type: "project", roles: ["anthropic-ui-engineer", "anthropic-claude-code-pm", "anthropic-consumer-pm"], status: "not-started", desc: "Next.js + Anthropic SDK streaming chat interface", priority: "high" },
  { title: "Artifact Renderer or Skills UI", type: "project", roles: ["anthropic-ui-engineer"], status: "not-started", desc: "Build an artifact sandbox renderer or Skills management UI", priority: "high" },
  { title: "Accessibility Audit & Fix", type: "project", roles: ["anthropic-ui-engineer"], status: "not-started", desc: "Full a11y audit with axe DevTools, ARIA live regions, keyboard nav", priority: "medium" },
];

export const meta = {
  id: "anthropic-ui-engineer",
  company: "Anthropic",
  title: "UI Software Engineer",
  comp: "$320K–$405K",
  fit: "70%",
  priority: 6,
  status: "research",
  loc: "SF / NYC / Seattle",
  tags: ["IC","Frontend","React/Next.js","Consumer"],
  color: "#8b5cf6",
  strengths: ["Product instincts","AI-native thinking","IS the target user","Shipping discipline"],
  gaps: [{g:"5+ yrs hands-on frontend (recent)",s:"HIGH"},{g:"Recent IC shipping velocity",s:"MEDIUM"},{g:"Performance optimization depth",s:"MEDIUM"},{g:"Accessibility expertise",s:"MEDIUM"}],
  verdict: "Strong if you want EM→IC. Need to prove recent hands-on coding.",
};

const sections = [
  {
    id: "opportunity", title: "The Opportunity", icon: "◆",
    content: {
      role: "UI Software Engineer, Claude.ai Consumer Product",
      comp: "$320K–$405K base + equity",
      team: "Claude.ai Consumer Product Team (under Ami Vora, Head of Product; CTO Rahul Patil)",
      locations: "San Francisco, CA | New York City, NY | Seattle, WA",
      focus: "Building the web experience for claude.ai — the interfaces, interactions, and moments that turn Claude into a product people love using",
      whyNow: "Anthropic is in hypergrowth. Claude Code became a billion-dollar product in 6 months. Cowork launched Jan 2026 and rattled enterprise software stocks. Skills, Chrome extension, Artifacts, inline charts — the consumer product is evolving at breakneck speed. They need frontend engineers who can ship polished features fast.",
      status: "Active posting on multiple job boards. Anthropic is hiring aggressively across engineering.",
    },
  },
  {
    id: "company", title: "Company Intel", icon: "◇",
    content: {
      recent: [
        { event: "Anthropic Labs launched", detail: "Mike Krieger (Instagram co-founder, 2yr CPO) moved to Labs for experimental products. Ami Vora now leads Product org." },
        { event: "Claude Code hit $1B ARR", detail: "Grew from research preview to billion-dollar product in 6 months. Now 100M+ monthly MCP downloads." },
        { event: "Cowork launched", detail: "Agentic desktop tool. Enterprise software stocks dropped $285B on the news. Plugins, Skills, connectors for Drive, Gmail, etc." },
        { event: "Skills open standard", detail: "Agent Skills spec opened as industry standard. 30+ agent products adopted it including OpenAI Codex, Google Gemini CLI, Cursor." },
        { event: "Opus 4.6 + Sonnet 4.6 released", detail: "1M token context window. Top Finance Agent benchmark. 14.5hr task completion." },
        { event: "$380B valuation", detail: "~2,300 employees. $30B Azure compute deal with Microsoft. 80% revenue from enterprise." },
      ],
      stack: [
        { name: "React", role: "Core UI framework", relevance: "primary" },
        { name: "Next.js", role: "Full-stack React framework, SSR/SSG", relevance: "primary" },
        { name: "TypeScript", role: "Type-safe JS across frontend and backend", relevance: "primary" },
        { name: "Node.js", role: "Backend runtime for API routes", relevance: "secondary" },
        { name: "Streaming/SSE", role: "Real-time chat responses from Claude API", relevance: "primary" },
        { name: "Tailwind CSS", role: "Utility-first styling (used in artifacts)", relevance: "secondary" },
        { name: "shadcn/ui", role: "Component library (used in artifacts)", relevance: "secondary" },
      ],
    },
  },
  {
    id: "fit", title: "Fit Analysis", icon: "△",
    content: {
      strengths: [
        "You're deeply embedded in the AI product ecosystem — you use Claude daily, build with it, and understand the UX firsthand",
        "Your EM experience means you understand product-engineering collaboration, tradeoffs, and shipping discipline at scale",
        "Experience at Meta Reality Labs shipping consumer-facing XR products — complex UI for novel interaction paradigms",
        "Your side projects (NexusWealth, Hostr) prove you can build full-stack consumer products independently",
        "You're an AI power user who builds skills, artifacts, and complex workflows — you *are* the target user for claude.ai",
      ],
      adjacent: [
        "EM → IC transition: your architectural judgment and product sense are assets, but you'll need to show you can still write production React daily",
        "XR/spatial computing UI translates to building novel AI interfaces — both are inventing new interaction patterns",
        "Your newsletter research workflow demonstrates deep familiarity with claude.ai's feature surface area",
      ],
      gaps: [
        { gap: "5+ years hands-on consumer frontend (React/Next.js/TypeScript)", critical: "HIGH", closeable: "Your Meta experience counts, but recent IC coding samples will be essential. Need to show current, production-quality React code.", timeline: "30 days" },
        { gap: "Recent IC-level shipping velocity", critical: "MEDIUM", closeable: "Build 2-3 polished side projects in React/Next.js/TypeScript over the next 30 days to demonstrate current hands-on skills.", timeline: "30 days" },
        { gap: "Performance optimization expertise (bundle size, rendering, latency)", critical: "MEDIUM", closeable: "Learnable through focused study + building. Use Chrome DevTools, Lighthouse, React Profiler extensively.", timeline: "30 days" },
        { gap: "Accessibility best practices", critical: "MEDIUM", closeable: "Study WCAG 2.1 AA, aria patterns, screen reader testing. Build accessible components.", timeline: "14 days" },
        { gap: "Streaming/real-time chat interface experience", critical: "MEDIUM", closeable: "Build a streaming chat UI using the Anthropic SDK. Direct hands-on experience with the exact product surface.", timeline: "7 days" },
      ],
    },
  },
  {
    id: "knowledge", title: "Knowledge Map", icon: "▽",
    content: [
      {
        name: "React + Next.js Advanced Patterns",
        topics: [
          "Server Components vs Client Components in Next.js App Router",
          "Streaming SSR and Suspense boundaries for progressive loading",
          "React Server Actions for mutations",
          "Optimistic UI updates for perceived performance",
          "Custom hooks for complex state (useReducer, context patterns)",
          "Error boundaries and graceful degradation",
        ],
        ai: "Use Claude to generate increasingly complex React components. Ask it to review your code for anti-patterns. Build a mini claude.ai clone to practice streaming.",
      },
      {
        name: "TypeScript Mastery",
        topics: [
          "Generic types, conditional types, mapped types",
          "Discriminated unions for state machines (chat states, loading states)",
          "Type-safe API layers with tRPC or typed fetch",
          "Utility types: Partial, Pick, Omit, Record in practice",
          "Strict mode patterns and avoiding 'any'",
        ],
        ai: "Ask Claude to generate TypeScript challenges. Practice typing complex React component props. Build a type-safe API client for the Anthropic API.",
      },
      {
        name: "Performance Engineering",
        topics: [
          "Core Web Vitals: LCP, FID, CLS — how to measure and optimize",
          "React rendering optimization: memo, useMemo, useCallback, lazy",
          "Bundle splitting and code splitting with Next.js dynamic imports",
          "Image optimization and font loading strategies",
          "Profiling with React DevTools and Chrome Performance tab",
          "Streaming response rendering — incremental DOM updates for chat",
        ],
        ai: "Ask Claude to walk you through profiling a slow React app. Build intentionally unoptimized components, then optimize them. Document before/after metrics.",
      },
      {
        name: "Accessibility (a11y)",
        topics: [
          "WCAG 2.1 AA compliance requirements",
          "ARIA roles, states, and properties for custom widgets",
          "Keyboard navigation patterns and focus management",
          "Screen reader testing with VoiceOver/NVDA",
          "Color contrast ratios and responsive text sizing",
          "Accessible chat interfaces: live regions for streaming messages",
        ],
        ai: "Use Claude to audit your components for accessibility issues. Ask it to generate accessible versions of common UI patterns. Test with screen readers.",
      },
      {
        name: "Anthropic Product Surface",
        topics: [
          "claude.ai feature inventory: chat, projects, artifacts, skills, connectors, memory",
          "Streaming API: SSE, token-by-token rendering, thinking blocks",
          "MCP (Model Context Protocol): how tools connect to Claude",
          "Artifacts: React/HTML rendering in chat, persistent storage API",
          "Skills ecosystem: SKILL.md format, auto-triggering, progressive disclosure",
          "Cowork architecture: desktop agent, plugins, sub-agents",
        ],
        ai: "You already know much of this from daily use. Deepen by reading the developer docs, building MCP servers, and exploring the open-source SDK.",
      },
      {
        name: "Interview Prep: Anthropic-Specific",
        topics: [
          "Coding: implementation-heavy problems in Python or TypeScript, multi-step with evolving requirements",
          "System design: design a streaming chat UI, a real-time collaboration system, a component library",
          "Mission alignment: AI safety, Constitutional AI, why Anthropic vs OpenAI/Google",
          "Behavioral: safety-first decisions, handling ambiguity, cross-functional collaboration",
          "Culture: 'hold light and shade', 'don't invent a spaceship if you need a bicycle', intellectual honesty",
        ],
        ai: "Run mock interviews with Claude playing an Anthropic interviewer. Practice the in-memory database problem (SET/GET/DELETE with TTL). Study Anthropic's published research.",
      },
    ],
  },
  {
    id: "plan", title: "30-Day Sprint", icon: "⬡",
    content: [
      {
        week: "Week 1: Ship Something Real",
        days: [
          { day: "Days 1-2", focus: "Claude Chat Clone", tasks: ["Build a streaming chat UI with Anthropic TypeScript SDK + Next.js App Router", "Implement proper streaming with SSE, token-by-token rendering", "Style with Tailwind, make it responsive, add dark mode", "Deploy to Vercel — you now have a portfolio piece"], hours: "4-5 hrs/day" },
          { day: "Days 3-4", focus: "Advanced React Patterns", tasks: ["Add conversation history with optimistic UI updates", "Implement error boundaries and loading states with Suspense", "Add keyboard shortcuts and focus management (a11y)", "Profile with React DevTools — identify and fix any rendering issues"], hours: "4-5 hrs/day" },
          { day: "Days 5-6", focus: "Performance Deep Dive", tasks: ["Run Lighthouse on your chat app — optimize until you hit 95+ on all metrics", "Implement code splitting, lazy loading for conversation history", "Add service worker for offline shell, optimize font loading", "Document your optimization journey — before/after screenshots with metrics"], hours: "4-5 hrs/day" },
          { day: "Day 7", focus: "Synthesis", tasks: ["Write a blog post or README documenting your streaming chat architecture decisions", "Review your code as if you were an Anthropic interviewer — what would they critique?", "Identify top 3 gaps for Week 2"], hours: "2-3 hrs" },
        ],
      },
      {
        week: "Week 2: Deepen the Stack",
        days: [
          { day: "Days 8-9", focus: "TypeScript + API Design", tasks: ["Refactor your chat app to be fully type-safe — zero 'any' types", "Build a typed API client for the Anthropic Messages API", "Implement proper error handling with discriminated unions", "Add tRPC or typed server actions for all API routes"], hours: "4-5 hrs/day" },
          { day: "Days 10-11", focus: "Accessibility Sprint", tasks: ["Audit your chat app with axe DevTools and VoiceOver", "Implement ARIA live regions for streaming messages", "Add full keyboard navigation — Tab, Enter, Escape patterns", "Test with screen reader — fix all issues until it's usable without a mouse"], hours: "4-5 hrs/day" },
          { day: "Days 12-13", focus: "Second Portfolio Project", tasks: ["Build an Artifact-style renderer: take React JSX strings and render them safely in an iframe", "Or: build a Skills management UI — upload, toggle, preview SKILL.md files", "Either project demonstrates deep understanding of claude.ai's product surface", "Make it polished — transitions, loading states, error handling"], hours: "4-5 hrs/day" },
          { day: "Day 14", focus: "Synthesis", tasks: ["Deploy both projects. Write clear READMEs with architecture diagrams", "Prepare to discuss technical decisions in an interview setting"], hours: "2-3 hrs" },
        ],
      },
      {
        week: "Week 3: Anthropic Deep Dive",
        days: [
          { day: "Days 15-16", focus: "Product Knowledge", tasks: ["Read all Anthropic engineering blog posts from the last 6 months", "Study the MCP spec and build a simple MCP server", "Read Anthropic's research: Constitutional AI, RLHF, interpretability", "Prepare your 'why Anthropic' narrative — tie it to the mission, not just the product"], hours: "3-4 hrs/day" },
          { day: "Days 17-18", focus: "Competitive Analysis + Industry", tasks: ["Compare claude.ai UX to ChatGPT, Gemini, Copilot — what does Anthropic do better?", "Study how streaming chat interfaces work across competitors", "Research AI UI patterns: artifacts, tool use visualization, thinking indicators", "Write up your product opinions — what would you change about claude.ai?"], hours: "3-4 hrs/day" },
          { day: "Days 19-20", focus: "Narrative + Resume", tasks: ["Craft your EM → IC story: 'I've been managing teams but I miss building. I want to build the product I use every day.'", "Update resume to emphasize frontend shipping, not people management", "Highlight your AI product building (skills, artifacts, NexusWealth)", "Prepare 5 STAR stories that map to Anthropic's values"], hours: "3-4 hrs/day" },
          { day: "Day 21", focus: "Synthesis", tasks: ["Finalize your portfolio: 2 deployed projects + clear documentation", "Write a cover letter draft emphasizing product intuition + technical craft"], hours: "2-3 hrs" },
        ],
      },
      {
        week: "Week 4: Interview Gauntlet",
        days: [
          { day: "Days 22-24", focus: "Coding Interview Prep", tasks: ["Practice Anthropic-style problems: in-memory database with TTL, producer-consumer buffer", "Do 2 LeetCode mediums/day focused on implementation quality over speed", "Practice in both Python AND TypeScript — Anthropic uses Python heavily", "Focus on clean APIs, modularity, edge cases, extensibility under changing requirements"], hours: "4-5 hrs/day" },
          { day: "Days 25-27", focus: "System Design + Behavioral", tasks: ["Design exercise: 'Design the streaming message renderer for claude.ai'", "Design exercise: 'Design an artifact sandboxing system'", "Mock behavioral interviews with Claude — mission alignment, safety-first decisions", "Practice explaining your portfolio projects as if presenting to Anthropic eng team"], hours: "4-5 hrs/day" },
          { day: "Days 28-29", focus: "Full Mock Interviews", tasks: ["Full mock interview day 1: recruiter screen + coding round simulation", "Full mock interview day 2: system design + behavioral + culture fit", "Review and refine answers based on feedback", "Prepare questions to ask interviewers about the consumer product roadmap"], hours: "4-5 hrs/day" },
          { day: "Day 30", focus: "Launch", tasks: ["Final review of all materials: resume, portfolio, cover letter, prep notes", "Submit application with tailored materials", "Reach out to Anthropic engineers on LinkedIn with a specific, thoughtful message", "Start the process — you're ready"], hours: "2-3 hrs" },
        ],
      },
    ],
  },
  {
    id: "tactics", title: "AI Tactics", icon: "□",
    content: [
      { name: "Claude as Pair Programmer", desc: "Build your portfolio projects with Claude Code or in-chat. But don't just accept output — review every line, understand every decision, and be able to explain it in an interview.", example: "Build me a streaming chat component in React with TypeScript that handles SSE from the Anthropic API. I want to understand every architectural decision — explain as you build." },
      { name: "Claude as Code Reviewer", desc: "After building something, ask Claude to review it as if it were an Anthropic senior engineer. Ask for specific feedback on performance, accessibility, and code quality.", example: "Review this React component as if you're a senior engineer at Anthropic. Focus on performance, accessibility, type safety, and any patterns that wouldn't pass code review at a top-tier consumer product team." },
      { name: "Claude as Mock Interviewer", desc: "Practice the full Anthropic interview loop. Coding, system design, behavioral, and culture fit.", example: "You're a senior Anthropic engineer interviewing me for a UI Software Engineer role on the claude.ai consumer team. Give me a multi-step implementation problem that starts simple and gets progressively complex. Evaluate my code quality, not just correctness." },
      { name: "Claude as Product Analyst", desc: "Discuss claude.ai product decisions, tradeoffs, and what you'd improve.", example: "I'm preparing for an Anthropic interview. What are the biggest UX challenges in building a streaming chat interface? What tradeoffs does the claude.ai team likely face between performance, features, and simplicity?" },
      { name: "Claude as Research Summarizer", desc: "Read Anthropic's technical publications with Claude as your guide.", example: "Summarize Anthropic's Constitutional AI paper. What are the key ideas, and how might they influence product decisions on the claude.ai consumer team?" },
    ],
  },
  {
    id: "resources", title: "Resources", icon: "◈",
    content: [
      { category: "Build With", items: [
        "Anthropic TypeScript SDK (npm @anthropic-ai/sdk)",
        "Next.js 15 App Router documentation",
        "Vercel AI SDK — streaming hooks for chat UIs",
        "shadcn/ui component library",
        "Tailwind CSS docs",
      ]},
      { category: "Study", items: [
        "Anthropic Engineering Blog (anthropic.com/engineering)",
        "Anthropic Careers page — values and interview process",
        "React docs: Server Components, Suspense, Streaming SSR",
        "web.dev: Core Web Vitals, Performance, Accessibility",
        "WCAG 2.1 AA Quick Reference",
      ]},
      { category: "Interview Prep", items: [
        "interviewing.io/anthropic-interview-questions — real candidate reports",
        "Exponent Anthropic SWE guide",
        "LeetCode medium problems (focus on implementation quality)",
        "System Design Primer (GitHub) — focus on real-time systems",
        "Glassdoor Anthropic interview experiences",
      ]},
      { category: "Anthropic Product", items: [
        "claude.ai — use it daily, study every feature",
        "Anthropic docs (docs.claude.com)",
        "MCP specification (modelcontextprotocol.io)",
        "Agent Skills open standard (agentskills.io)",
        "Anthropic SDK source code on GitHub",
      ]},
    ],
  },
];

const Badge = ({ color, children }) => {
  const colors = {
    green: "bg-emerald-500 bg-opacity-15 text-emerald-300 border-emerald-500",
    amber: "bg-amber-500 bg-opacity-15 text-amber-300 border-amber-500",
    red: "bg-red-500 bg-opacity-15 text-red-300 border-red-500",
    blue: "bg-blue-500 bg-opacity-15 text-blue-300 border-blue-500",
    gray: "bg-gray-500 bg-opacity-15 text-gray-300 border-gray-500",
  };
  return <span className={`text-xs px-2 py-0.5 rounded-full border border-opacity-30 font-mono ${colors[color]}`}>{children}</span>;
};

const Opportunity = ({ c }) => (
  <div className="space-y-5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {[["ROLE", c.role], ["COMP", c.comp], ["TEAM", c.team], ["LOCATIONS", c.locations]].map(([label, val]) => (
        <div key={label} className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4">
          <div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">{label}</div>
          <div className="text-white text-sm">{val}</div>
        </div>
      ))}
    </div>
    <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4">
      <div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">FOCUS</div>
      <div className="text-white text-sm">{c.focus}</div>
    </div>
    <div className="bg-emerald-900 bg-opacity-20 border border-emerald-600 border-opacity-30 rounded-lg p-4">
      <div className="text-xs tracking-widest text-emerald-400 mb-1.5 font-mono">WHY THIS ROLE EXISTS NOW</div>
      <div className="text-emerald-200 text-sm leading-relaxed">{c.whyNow}</div>
    </div>
    <div className="bg-amber-900 bg-opacity-20 border border-amber-600 border-opacity-30 rounded-lg p-4">
      <div className="text-xs tracking-widest text-amber-400 mb-1.5 font-mono">STATUS</div>
      <div className="text-amber-200 text-sm">{c.status}</div>
    </div>
  </div>
);

const Company = ({ c }) => (
  <div className="space-y-6">
    <div>
      <div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">RECENT DEVELOPMENTS</div>
      <div className="space-y-2">
        {c.recent.map((r, i) => (
          <div key={i} className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-3">
            <div className="text-white text-sm font-medium mb-1">{r.event}</div>
            <div className="text-gray-400 text-sm">{r.detail}</div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <div className="text-xs tracking-widest text-amber-400 mb-3 font-mono">TECH STACK (LIKELY)</div>
      <div className="space-y-1.5">
        {c.stack.map((s, i) => (
          <div key={i} className="flex items-center gap-3 py-1.5">
            <Badge color={s.relevance === "primary" ? "green" : "gray"}>{s.relevance}</Badge>
            <span className="text-white text-sm font-medium min-w-24">{s.name}</span>
            <span className="text-gray-500 text-sm">{s.role}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Fit = ({ c }) => (
  <div className="space-y-6">
    <div>
      <div className="text-xs tracking-widest text-emerald-400 mb-3 font-mono">STRENGTHS</div>
      {c.strengths.map((s, i) => (
        <div key={i} className="flex items-start gap-2 mb-2">
          <span className="text-emerald-400 mt-0.5 text-xs">✓</span>
          <span className="text-gray-300 text-sm">{s}</span>
        </div>
      ))}
    </div>
    <div>
      <div className="text-xs tracking-widest text-blue-400 mb-3 font-mono">ADJACENT STRENGTHS (REFRAME THESE)</div>
      {c.adjacent.map((a, i) => (
        <div key={i} className="flex items-start gap-2 mb-2">
          <span className="text-blue-400 mt-0.5 text-xs">↗</span>
          <span className="text-gray-300 text-sm">{a}</span>
        </div>
      ))}
    </div>
    <div>
      <div className="text-xs tracking-widest text-red-400 mb-3 font-mono">GAPS TO CLOSE</div>
      <div className="space-y-3">
        {c.gaps.map((g, i) => (
          <div key={i} className="border border-white border-opacity-10 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-sm font-medium">{g.gap}</span>
              <Badge color={g.critical === "HIGH" ? "red" : "amber"}>{g.critical}</Badge>
            </div>
            <p className="text-gray-400 text-sm">{g.closeable}</p>
            <div className="text-xs text-gray-600 font-mono mt-1">Close in: {g.timeline}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Knowledge = ({ c }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="space-y-2">
      {c.map((d, i) => (
        <div key={i} className="border border-white border-opacity-10 rounded-lg overflow-hidden">
          <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full text-left p-4 flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors">
            <span className="text-white font-medium text-sm">{d.name}</span>
            <span className="text-gray-500">{expanded === i ? "−" : "+"}</span>
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
              <div className="mt-3 bg-blue-900 bg-opacity-20 border border-blue-500 border-opacity-20 rounded-lg p-3">
                <div className="text-xs tracking-widest text-blue-400 mb-1 font-mono">AI ACCELERATION</div>
                <p className="text-blue-200 text-sm">{d.ai}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Plan = ({ c }) => {
  const [activeWeek, setActiveWeek] = useState(0);
  const week = c[activeWeek];
  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {c.map((w, i) => (
          <button key={i} onClick={() => setActiveWeek(i)} className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${activeWeek === i ? "bg-amber-500 bg-opacity-20 text-amber-300 border border-amber-500 border-opacity-40" : "bg-white bg-opacity-5 text-gray-400 border border-white border-opacity-10"}`}>
            Wk {i + 1}
          </button>
        ))}
      </div>
      <h4 className="text-white font-medium mb-4">{week.week}</h4>
      <div className="space-y-4">
        {week.days.map((d, i) => (
          <div key={i} className="border border-white border-opacity-10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-amber-400 font-mono text-xs">{d.day}</span>
                <span className="text-gray-500 mx-2">·</span>
                <span className="text-white text-sm font-medium">{d.focus}</span>
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

const Tactics = ({ c }) => (
  <div className="space-y-4">
    {c.map((t, i) => (
      <div key={i} className="border border-white border-opacity-10 rounded-lg p-4">
        <div className="text-white font-medium text-sm mb-1">{t.name}</div>
        <p className="text-gray-400 text-sm mb-3">{t.desc}</p>
        <div className="bg-gray-900 rounded-lg p-3 border border-white border-opacity-5">
          <div className="text-xs text-gray-600 font-mono mb-1">PROMPT</div>
          <p className="text-amber-300 text-sm italic">"{t.example}"</p>
        </div>
      </div>
    ))}
  </div>
);

const Resources = ({ c }) => (
  <div className="space-y-6">
    {c.map((cat, i) => (
      <div key={i}>
        <div className="text-xs tracking-widest text-amber-400 mb-2 font-mono">{cat.category.toUpperCase()}</div>
        <div className="space-y-1.5">
          {cat.items.map((item, j) => (
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

const renderers = { opportunity: Opportunity, company: Company, fit: Fit, knowledge: Knowledge, plan: Plan, tactics: Tactics, resources: Resources };

export default function AnthropicBrief() {
  const [active, setActive] = useState("opportunity");
  const section = sections.find(s => s.id === active);
  const Renderer = renderers[active];

  return (
    <div className="min-h-screen text-white" style={{ background: "linear-gradient(160deg, #090909 0%, #0f0f0f 50%, #0a0a0a 100%)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');.font-mono{font-family:'IBM Plex Mono',monospace}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}`}</style>
      <div className="border-b border-white border-opacity-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-gray-500 tracking-widest">JOB PREP INTELLIGENCE BRIEF</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-light text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
            Anthropic · UI Software Engineer
          </h1>
          <p className="text-gray-500 text-sm">Claude.ai Consumer Product · 30-day sprint from EM to IC builder</p>
        </div>
      </div>
      <div className="border-b border-white border-opacity-10 px-6 py-3 sticky top-0 z-10" style={{ background: "rgba(9,9,9,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-4xl mx-auto flex gap-1 overflow-x-auto">
          {sections.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all ${active === s.id ? "bg-white bg-opacity-10 text-white" : "text-gray-600 hover:text-gray-400"}`}>
              <span className="mr-1.5">{s.icon}</span>{s.title}
            </button>
          ))}
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-amber-400 text-lg">{section.icon}</span>
            <h2 className="text-xl font-light text-white">{section.title}</h2>
          </div>
          <Renderer c={section.content} />
        </div>
      </div>
      <div className="border-t border-white border-opacity-5 px-6 py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-xs font-mono">~110 hours over 30 days · 3.5-4 hrs/day avg · portfolio-driven approach</p>
        </div>
      </div>
    </div>
  );
}
