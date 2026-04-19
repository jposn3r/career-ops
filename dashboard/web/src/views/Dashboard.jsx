import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const STATUS_COLORS = {"not-started":"#4b5563","in-progress":"#f59e0b","complete":"#10b981","applied":"#3b82f6","interviewing":"#8b5cf6","watching":"#6b7280","rejected":"#ef4444","not-interested":"#6b7280","closed":"#78716c","prep":"#10b981","research":"#f59e0b"};
const STATUS_LABELS = {"not-started":"Not Started","in-progress":"In Progress","complete":"Complete","applied":"Applied","interviewing":"Interviewing","watching":"Watching","prep":"Prepping","research":"Researching","rejected":"Rejected","not-interested":"Not Interested","closed":"Closed"};
const ROLE_STATUSES = ["prep","research","watching","applied","interviewing","rejected","not-interested","closed"];
const TASK_STATUSES = ["not-started","in-progress","complete"];

const Tab = ({active,label,onClick,count}) => (
  <button onClick={onClick} className={`px-4 py-2 text-sm font-mono transition-all border-b-2 ${active ? "text-white border-amber-400" : "text-gray-500 border-transparent hover:text-gray-300"}`}>
    {label}{count !== undefined && <span className="ml-1.5 text-xs opacity-60">({count})</span>}
  </button>
);

const Pill = ({color,children}) => (
  <span className="text-xs px-2 py-0.5 rounded-full font-mono border" style={{background:`${color}15`,color:color,borderColor:`${color}30`}}>{children}</span>
);

function StatusDropdown({ current, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const color = STATUS_COLORS[current] || "#4b5563";
  const label = STATUS_LABELS[current] || current;

  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <span ref={ref} style={{ position: "relative" }}>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o); }}
        className="text-xs px-2 py-0.5 rounded-full font-mono border transition-colors hover:brightness-125"
        style={{ background: `${color}25`, color: "#fff", borderColor: `${color}40` }}
      >{label}</button>
      {open && (
        <div
          style={{ position: "absolute", top: "100%", right: 0, marginTop: 4, zIndex: 60, background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          {options.map(s => (
            <button
              key={s}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onChange(s); setOpen(false); }}
              className="w-full text-left px-3 py-1.5 text-xs font-mono flex items-center gap-2 hover:bg-white/10 transition-colors"
              style={{ color: current === s ? (STATUS_COLORS[s] || "#9ca3af") : "#9ca3af", minWidth: 120 }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 3, background: STATUS_COLORS[s] || "#6b7280" }} />
              {STATUS_LABELS[s] || s}
            </button>
          ))}
        </div>
      )}
    </span>
  );
}

const ProgressBar = ({pct,color="#10b981"}) => (
  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
    <div className="h-full rounded-full transition-all duration-500" style={{width:`${pct}%`,background:color}}/>
  </div>
);

function shortTitle(role) {
  if (!role) return "?";
  const t = role.title;
  if (t.length <= 20) return t;
  return t.split(",")[0].split(" - ")[0];
}

function RolePill({ role }) {
  const [show, setShow] = useState(false);
  if (!role) return null;
  const fitVal = parseInt(role.fit);
  const fitColor = fitVal >= 85 ? "#10b981" : fitVal >= 60 ? "#f59e0b" : "#ef4444";
  return (
    <span className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span className="text-xs px-2 py-0.5 rounded-full font-mono border cursor-default"
        style={{ background: `${role.color}15`, color: role.color, borderColor: `${role.color}30` }}>
        {shortTitle(role)}
      </span>
      {show && (
        <span className="absolute z-50 left-1/2 bottom-full mb-2 pointer-events-none" style={{ transform: "translateX(-50%)" }}>
          <span className="block bg-[#1a1a1a] border border-white/15 rounded-lg p-3 shadow-xl whitespace-nowrap text-left" style={{ minWidth: 180 }}>
            <span className="block text-white text-xs font-medium mb-1">{role.title}</span>
            <span className="block text-gray-400 text-[11px] font-mono">{role.company}</span>
            <span className="block text-gray-400 text-[11px] font-mono mt-0.5">{role.comp}</span>
            <span className="block text-[11px] font-mono mt-1" style={{ color: fitColor }}>{role.fit} fit</span>
          </span>
        </span>
      )}
    </span>
  );
}

function crossRoleScore(task) {
  const roleCount = task.roles ? task.roles.length : 1;
  const priBonus = task.priority === "high" ? 5 : task.priority === "medium" ? 2 : 0;
  return (roleCount * 10) + priBonus;
}

const Overview = ({roles,tasks,onUpdateTask,onUpdateRole}) => {
  const prepping = roles.filter(r=>r.status==="prep").length;
  const projects = tasks.filter(t=>t.type==="project");
  const learning = tasks.filter(t=>t.type==="learning");
  const projectsDone = projects.filter(p=>p.status==="complete").length;
  const totalHours = learning.reduce((a,l)=>a+(l.hours||0),0);
  const doneHours = learning.filter(l=>l.status==="complete").reduce((a,l)=>a+(l.hours||0),0);
  const topProjects = [...projects].sort((a,b) => crossRoleScore(b) - crossRoleScore(a)).slice(0, 6);
  const topLearning = [...learning].sort((a,b) => crossRoleScore(b) - crossRoleScore(a)).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          ["ROLES TRACKED", roles.length, "#f59e0b"],
          ["PREPPING", prepping, "#10b981"],
          ["PROJECTS", `${projectsDone}/${projects.length}`, "#3b82f6"],
          ["LEARNING", `${doneHours}/${totalHours} hrs`, "#8b5cf6"],
        ].map(([label,val,color])=>(
          <div key={label} className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-xs tracking-widest font-mono mb-1" style={{color}}>{label}</div>
            <div className="text-2xl font-light text-white">{val}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="text-xs tracking-widest text-amber-400 font-mono mb-3">RANKED BY FIT</div>
        <div className="space-y-2">
          {[...roles].sort((a,b)=>parseInt(b.fit)-parseInt(a.fit)).map(r=>(
            <div key={r.id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/[0.08] transition-colors">
              <Link to={`/role/${r.id}`} className="flex items-center gap-3 flex-1 min-w-0 no-underline" style={{textDecoration:"none"}}>
                <span className="text-gray-600 font-mono text-xs w-6">#{r.priority}</span>
                <div className="w-2 h-2 rounded-full" style={{background:r.color}}/>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-medium truncate">{r.company} · {r.title}</div>
                  <div className="text-gray-500 text-xs">{r.comp} · {r.loc}</div>
                </div>
                <Pill color={parseInt(r.fit)>=85?"#10b981":parseInt(r.fit)>=60?"#f59e0b":"#ef4444"}>{r.fit} fit</Pill>
              </Link>
              <StatusDropdown current={r.status} options={ROLE_STATUSES} onChange={(s) => onUpdateRole(r.id, { status: s })} />
            </div>
          ))}
        </div>
      </div>

      {topProjects.length > 0 && <div>
        <div className="text-xs tracking-widest text-blue-400 font-mono mb-3">TOP PROJECTS</div>
        <div className="space-y-2">
          {topProjects.map(p=>(
            <div key={p.id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="w-3 h-3 rounded border" style={{borderColor:STATUS_COLORS[p.status],background:p.status==="complete"?STATUS_COLORS[p.status]:"transparent"}}/>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm">{p.title}</div>
                <div className="text-gray-500 text-xs">{p.desc}</div>
              </div>
              {p.roles && p.roles.length > 1 && <Pill color="#10b981">{p.roles.length}x return</Pill>}
              <StatusDropdown current={p.status} options={TASK_STATUSES} onChange={(s) => onUpdateTask(p.id, { status: s })} />
            </div>
          ))}
        </div>
      </div>}

      {topLearning.length > 0 && <div>
        <div className="text-xs tracking-widest text-purple-400 font-mono mb-3">TOP LEARNING</div>
        <div className="space-y-2">
          {topLearning.map(l=>(
            <div key={l.id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="w-3 h-3 rounded border" style={{borderColor:STATUS_COLORS[l.status],background:l.status==="complete"?STATUS_COLORS[l.status]:"transparent"}}/>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm">{l.title}</div>
                <div className="text-gray-500 text-xs">{l.desc}</div>
              </div>
              {l.roles && l.roles.length > 1 && <Pill color="#10b981">{l.roles.length}x return</Pill>}
              {l.hours && <span className="text-gray-500 text-xs font-mono">{l.hours}h</span>}
              <StatusDropdown current={l.status} options={TASK_STATUSES} onChange={(s) => onUpdateTask(l.id, { status: s })} />
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
};

const RolesView = ({roles, onUpdateRole}) => (
  <div className="space-y-2">
    <div className="text-xs tracking-widest text-amber-400 font-mono mb-3">ALL ROLES — RANKED BY FIT</div>
    {[...roles].sort((a,b)=>parseInt(b.fit)-parseInt(a.fit)).map(r=>(
      <div key={r.id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/[0.08] hover:border-amber-500/20 transition-all">
        <Link to={`/role/${r.id}`} className="flex items-center gap-3 flex-1 min-w-0 no-underline" style={{textDecoration:"none"}}>
          <span className="text-gray-600 font-mono text-xs w-6">#{r.priority}</span>
          <div className="w-2.5 h-2.5 rounded-full" style={{background:r.color}}/>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm font-medium">{r.company} · {r.title}</div>
            <div className="text-gray-500 text-xs mt-0.5">{r.comp} · {r.loc}</div>
          </div>
          <Pill color={parseInt(r.fit)>=85?"#10b981":parseInt(r.fit)>=60?"#f59e0b":"#ef4444"}>{r.fit} fit</Pill>
        </Link>
        <div className="flex items-center gap-2">
          <StatusDropdown current={r.status} options={ROLE_STATUSES} onChange={(s) => onUpdateRole(r.id, { status: s })} />
          <Link to={`/role/${r.id}`} className="text-gray-600 text-sm no-underline" style={{textDecoration:"none"}}>→</Link>
        </div>
      </div>
    ))}
  </div>
);

const CompareView = ({roles}) => {
  const top = [...roles].sort((a,b)=>parseInt(b.fit)-parseInt(a.fit)).slice(0,4);
  const fields = [
    {label:"Company",fn:r=>r.company},{label:"Role",fn:r=>r.title},{label:"Comp",fn:r=>r.comp},
    {label:"Fit",fn:r=>r.fit},{label:"Location",fn:r=>r.loc},{label:"Status",fn:r=>STATUS_LABELS[r.status]},
    {label:"# Strengths",fn:r=>r.strengths?.length||0},{label:"# Gaps",fn:r=>r.gaps?.length||0},
    {label:"High Gaps",fn:r=>(r.gaps||[]).filter(g=>g.s==="HIGH").length},
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-white/10">
          <th className="text-left py-2 px-3 text-xs font-mono text-amber-400 tracking-widest">METRIC</th>
          {top.map(r=><th key={r.id} className="text-left py-2 px-3"><div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{background:r.color}}/><span className="text-white font-mono text-xs">#{r.priority}</span></div></th>)}
        </tr></thead>
        <tbody>
          {fields.map((f,i)=>(
            <tr key={i} className="border-b border-white/5">
              <td className="py-2 px-3 text-gray-500 font-mono text-xs">{f.label}</td>
              {top.map(r=><td key={r.id} className="py-2 px-3 text-gray-300 text-sm">{f.fn(r)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProjectsView = ({tasks,roles,onUpdateTask}) => {
  const projects = [...tasks.filter(t=>t.type==="project")].sort((a,b) => crossRoleScore(b) - crossRoleScore(a));
  const total = projects.length;
  const done = projects.filter(p=>p.status==="complete").length;
  const pct = total > 0 ? Math.round(done/total*100) : 0;

  return (
    <div className="space-y-4">
      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400 text-sm">Overall Progress</span>
          <span className="text-white font-mono text-sm">{done}/{total} complete ({pct}%)</span>
        </div>
        <ProgressBar pct={pct} color="#3b82f6"/>
      </div>
      <div className="text-xs tracking-widest text-blue-400 font-mono mb-2">STACK RANKED BY CROSS-ROLE VALUE</div>
      <div className="space-y-2">
        {projects.map((p,i) => {
          const roleObjs = (p.roles||[]).map(rid => roles.find(r=>r.id===rid)).filter(Boolean);
          return (
            <div key={p.id} className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 font-mono text-xs w-5">#{i+1}</span>
                  <div className={`text-sm font-medium ${p.status==="complete"?"text-gray-500 line-through":"text-white"}`}>{p.title}</div>
                </div>
                <div className="flex items-center gap-2">
                  {p.roles && p.roles.length > 1 && <Pill color="#10b981">{p.roles.length}x return</Pill>}
                  <Pill color={p.priority==="high"?"#ef4444":"#f59e0b"}>{p.priority}</Pill>
                  <StatusDropdown current={p.status} options={TASK_STATUSES} onChange={(s) => onUpdateTask(p.id, { status: s })} />
                </div>
              </div>
              <div className="text-gray-500 text-xs mb-2 ml-11">{p.desc}</div>
              <div className="flex gap-1 flex-wrap ml-11">{roleObjs.map(r=><RolePill key={r.id} role={r}/>)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LearningView = ({tasks,roles,onUpdateTask}) => {
  const learning = [...tasks.filter(t=>t.type==="learning")].sort((a,b) => crossRoleScore(b) - crossRoleScore(a));
  const total = learning.reduce((a,l)=>a+(l.hours||0),0);
  const done = learning.filter(l=>l.status==="complete").reduce((a,l)=>a+(l.hours||0),0);
  const pct = total > 0 ? Math.round(done/total*100) : 0;

  const cycleStatus = (task) => {
    const order = ["not-started", "in-progress", "complete"];
    const next = order[(order.indexOf(task.status) + 1) % order.length];
    onUpdateTask(task.id, { status: next });
  };

  return (
    <div className="space-y-4">
      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400 text-sm">Overall Progress</span>
          <span className="text-white font-mono text-sm">{done}/{total} hrs ({pct}%)</span>
        </div>
        <ProgressBar pct={pct} color="#8b5cf6"/>
      </div>
      <div className="space-y-2">
        {learning.map((l,i) => {
          const roleObjs = (l.roles||[]).map(rid => roles.find(r=>r.id===rid)).filter(Boolean);
          return (
            <div key={l.id} className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 font-mono text-xs w-5">#{i+1}</span>
                  <button onClick={()=>cycleStatus(l)} className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0"
                    style={{borderColor:STATUS_COLORS[l.status],background:l.status==="complete"?STATUS_COLORS[l.status]:"transparent"}}>
                    {l.status==="complete"&&<span className="text-white text-[8px]">✓</span>}
                    {l.status==="in-progress"&&<div className="w-1.5 h-1.5 rounded-full" style={{background:STATUS_COLORS[l.status]}}/>}
                  </button>
                  <div className={`text-sm font-medium ${l.status==="complete"?"text-gray-500 line-through":"text-white"}`}>{l.title}</div>
                </div>
                <div className="flex items-center gap-2">
                  {l.roles && l.roles.length > 1 && <Pill color="#10b981">{l.roles.length}x return</Pill>}
                  {l.hours && <span className="text-gray-500 text-xs font-mono">{l.hours}h</span>}
                  <StatusDropdown current={l.status} options={TASK_STATUSES} onChange={(s) => onUpdateTask(l.id, { status: s })} />
                </div>
              </div>
              <div className="text-gray-500 text-xs mb-2 ml-11">{l.desc}</div>
              <div className="flex gap-1 flex-wrap ml-11">{roleObjs.map(r=><RolePill key={r.id} role={r}/>)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Dashboard({ roles, tasks, onUpdateTask, onUpdateRole }) {
  const [tab, setTab] = useState("overview");
  const projects = tasks.filter(t=>t.type==="project");
  const learning = tasks.filter(t=>t.type==="learning");

  const tabs = [
    {id:"overview", label:"Overview"},
    {id:"roles", label:"Roles", count:roles.length},
    {id:"compare", label:"Compare"},
    {id:"projects", label:"Projects", count:projects.length},
    {id:"learning", label:"Learning", count:learning.length},
  ];

  return (
    <div className="min-h-screen text-white" style={{background:"linear-gradient(160deg,#070707 0%,#0d0d0d 50%,#080808 100%)"}}>
      <div className="border-b border-white/8 px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <span className="text-amber-400 text-sm">◈</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white" style={{letterSpacing:"-0.02em"}}>Career-Ops Command Center</h1>
              <p className="text-gray-500 text-xs font-mono">{roles.length} roles · {projects.length} projects · {learning.reduce((a,l)=>a+(l.hours||0),0)} hrs learning</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/8 px-6 sticky top-0 z-10" style={{background:"rgba(7,7,7,0.95)",backdropFilter:"blur(12px)"}}>
        <div className="max-w-5xl mx-auto flex gap-1 overflow-x-auto">
          {tabs.map(t=><Tab key={t.id} active={tab===t.id} label={t.label} count={t.count} onClick={()=>setTab(t.id)}/>)}
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="max-w-5xl mx-auto">
          {tab==="overview" && <Overview roles={roles} tasks={tasks} onUpdateTask={onUpdateTask} onUpdateRole={onUpdateRole}/>}
          {tab==="roles" && <RolesView roles={roles} onUpdateRole={onUpdateRole}/>}
          {tab==="compare" && <CompareView roles={roles}/>}
          {tab==="projects" && <ProjectsView tasks={tasks} roles={roles} onUpdateTask={onUpdateTask}/>}
          {tab==="learning" && <LearningView tasks={tasks} roles={roles} onUpdateTask={onUpdateTask}/>}
        </div>
      </div>
    </div>
  );
}
