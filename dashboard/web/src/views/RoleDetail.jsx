import { useState, useRef, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { reportFiles, interviewFiles, storyBankRaw, pdfFiles } from "../lib/loaders";
import parseReport from "../lib/parse-report";
import parseStoryBank from "../lib/parse-story-bank";
import parseInterview from "../lib/parse-interview";
import { ROLE_STATUSES, ROLE_STATUS_COLORS, ROLE_STATUS_LABELS } from "../lib/role-statuses";

// ─── Constants ───────────────────────────────────────────────
const STATUS_COLORS = {"not-started":"#4b5563","in-progress":"#f59e0b","complete":"#10b981"};
const STATUS_LABELS = {"not-started":"Not Started","in-progress":"In Progress","complete":"Complete"};

// ─── Inline Components ───────────────────────────────────────
const Pill = ({ color, children }) => (
  <span
    className="text-xs px-2 py-0.5 rounded-full font-mono border"
    style={{ background: `${color}15`, color: color, borderColor: `${color}30` }}
  >
    {children}
  </span>
);

function StatusDropdown({ current, options, colorMap, labelMap, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const colors = colorMap || STATUS_COLORS;
  const labels = labelMap || STATUS_LABELS;
  const color = colors[current] || "#4b5563";
  const label = labels[current] || current;

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <span ref={ref} style={{ position: "relative" }}>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((o) => !o); }}
        className="text-xs px-3 py-1.5 rounded-full font-mono border flex items-center gap-1.5 transition-colors hover:brightness-125"
        style={{ background: `${color}15`, color, borderColor: `${color}30` }}
      >
        {label}
        <span style={{ fontSize: 8, marginLeft: 2 }}>▼</span>
      </button>
      {open && (
        <div
          style={{
            position: "absolute", top: "100%", right: 0, marginTop: 4, zIndex: 60,
            background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 8, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          {options.map((s) => (
            <button
              key={s}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onChange(s); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-xs font-mono flex items-center gap-2 hover:bg-white/10 transition-colors"
              style={{ color: current === s ? (colors[s] || "#9ca3af") : "#9ca3af", minWidth: 140 }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 3, background: colors[s] || "#6b7280" }} />
              {labels[s] || s}
            </button>
          ))}
        </div>
      )}
    </span>
  );
}

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
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={(e) => { e.stopPropagation(); setShow((s) => !s); }}
    >
      <span
        className="text-xs px-2 py-0.5 rounded-full font-mono border cursor-default"
        style={{ background: `${role.color}15`, color: role.color, borderColor: `${role.color}30` }}
      >
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

// ─── Activity Tab ─────────────────────────────────────────────
function ActivityTab({ notes, onAddNote }) {
  const [text, setText] = useState("");
  const feedEnd = useRef(null);
  const prevCount = useRef(notes.length);

  useEffect(() => {
    // Only auto-scroll when a new note is added, not on initial mount
    if (notes.length > prevCount.current) {
      feedEnd.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevCount.current = notes.length;
  }, [notes.length]);

  const submit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddNote(trimmed);
    setText("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-3 pr-2" style={{ minHeight: 0 }}>
        {notes.length === 0 && (
          <div className="text-gray-600 text-sm text-center py-12">No notes yet. Add your first note below.</div>
        )}
        {notes.map((n) => (
          <div key={n.id} className="bg-white/5 border border-white/10 rounded-lg p-3">
            <div className="text-gray-300 text-sm whitespace-pre-wrap">{n.text}</div>
            <div className="text-gray-600 text-xs font-mono mt-2">
              {new Date(n.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              {" "}
              {new Date(n.createdAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
            </div>
          </div>
        ))}
        <div ref={feedEnd} />
      </div>
      <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); }
          }}
          placeholder="Add a note... (Enter to send, Shift+Enter for newline)"
          className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-amber-500/40"
          rows={2}
        />
        <button
          onClick={submit}
          className="px-4 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-lg text-sm font-mono hover:bg-amber-500/30 transition-colors self-end"
          style={{ height: 40 }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

// ─── Tasks Tab ────────────────────────────────────────────────
function TasksTab({ tasks, roles, roleId, onAddTask, onUpdateTask }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("project");
  const [priority, setPriority] = useState("high");
  const [desc, setDesc] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([roleId]);

  const resetForm = () => {
    setTitle("");
    setType("project");
    setPriority("high");
    setDesc("");
    setSelectedRoles([roleId]);
    setShowForm(false);
  };

  const submit = () => {
    if (!title.trim()) return;
    onAddTask({
      title: title.trim(),
      type,
      priority,
      desc: desc.trim(),
      roles: selectedRoles,
      status: "not-started",
    });
    resetForm();
  };

  const toggleRole = (rid) => {
    setSelectedRoles((prev) =>
      prev.includes(rid) ? prev.filter((r) => r !== rid) : [...prev, rid]
    );
  };

  const cycleStatus = (task) => {
    const order = ["not-started", "in-progress", "complete"];
    const next = order[(order.indexOf(task.status) + 1) % order.length];
    onUpdateTask(task.id, { status: next });
  };

  const roleTasks = tasks.filter((t) => t.roles.includes(roleId));
  const sorted = [...roleTasks].sort((a, b) => {
    const pOrd = { high: 0, medium: 1, low: 2 };
    const sOrd = { "in-progress": 0, "not-started": 1, "complete": 2 };
    return (sOrd[a.status] ?? 1) - (sOrd[b.status] ?? 1) || (pOrd[a.priority] ?? 1) - (pOrd[b.priority] ?? 1);
  });

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-xs tracking-widest text-amber-400 font-mono">
          TASKS ({roleTasks.length})
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30 transition-colors"
        >
          {showForm ? "Cancel" : "+ Add Task"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-amber-500/20 rounded-lg p-4 space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/40"
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description (optional)"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/40"
          />
          <div className="flex gap-3">
            <div>
              <div className="text-xs text-gray-500 font-mono mb-1">TYPE</div>
              <div className="flex gap-1">
                {["project", "learning"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-mono border transition-colors ${
                      type === t
                        ? "bg-amber-500/20 border-amber-500/30 text-amber-400"
                        : "bg-white/5 border-white/10 text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-mono mb-1">PRIORITY</div>
              <div className="flex gap-1">
                {["high", "medium", "low"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPriority(p)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-mono border transition-colors ${
                      priority === p
                        ? "bg-amber-500/20 border-amber-500/30 text-amber-400"
                        : "bg-white/5 border-white/10 text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-mono mb-1">APPLIES TO ROLES (click to toggle)</div>
            <div className="flex gap-1 flex-wrap">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => toggleRole(r.id)}
                  className={`text-xs px-2 py-1 rounded-full font-mono border transition-colors ${
                    selectedRoles.includes(r.id)
                      ? "border-opacity-60 text-white"
                      : "border-white/10 text-gray-600 hover:text-gray-400"
                  }`}
                  style={
                    selectedRoles.includes(r.id)
                      ? { background: `${r.color}20`, borderColor: `${r.color}50`, color: r.color }
                      : {}
                  }
                >
                  {r.company} · {r.title.split(",")[0]}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={submit}
            className="px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-lg text-sm font-mono hover:bg-amber-500/30 transition-colors"
          >
            Create Task
          </button>
        </div>
      )}

      {sorted.length === 0 && !showForm && (
        <div className="text-gray-600 text-sm text-center py-12">No tasks for this role yet.</div>
      )}

      {sorted.map((t) => (
        <div key={t.id} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/[0.07] transition-colors">
          <button
            onClick={() => cycleStatus(t)}
            className="mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors"
            style={{
              borderColor: STATUS_COLORS[t.status],
              background: t.status === "complete" ? STATUS_COLORS[t.status] : "transparent",
            }}
            title="Click to cycle status"
          >
            {t.status === "complete" && <span className="text-white text-[8px]">✓</span>}
            {t.status === "in-progress" && (
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: STATUS_COLORS[t.status] }} />
            )}
          </button>
          <div className="flex-1 min-w-0">
            <div className={`text-sm font-medium ${t.status === "complete" ? "text-gray-500 line-through" : "text-white"}`}>
              {t.title}
            </div>
            {t.desc && <div className="text-gray-500 text-xs mt-0.5">{t.desc}</div>}
            <div className="flex gap-1 mt-2 flex-wrap">
              <Pill color={t.type === "project" ? "#3b82f6" : "#8b5cf6"}>{t.type}</Pill>
              <Pill color={t.priority === "high" ? "#ef4444" : t.priority === "medium" ? "#f59e0b" : "#6b7280"}>
                {t.priority}
              </Pill>
              {t.roles.length > 1 && <Pill color="#10b981">{t.roles.length}x return</Pill>}
              {t.roles
                .filter((rid) => rid !== roleId)
                .map((rid) => {
                  const r = roles.find((x) => x.id === rid);
                  return r ? <RolePill key={rid} role={r} /> : null;
                })}
            </div>
          </div>
          <Pill color={STATUS_COLORS[t.status]}>{STATUS_LABELS[t.status]}</Pill>
        </div>
      ))}
    </div>
  );
}

// ─── Brief Tab ────────────────────────────────────────────────
function BriefTab({ BriefComponent }) {
  if (!BriefComponent) {
    return <div className="text-gray-600 text-sm text-center py-12">No brief available for this role.</div>;
  }
  return (
    <div className="brief-embed" style={{ contain: "layout style" }}>
      <BriefComponent />
    </div>
  );
}

// ─── Markdown Renderer (inline) ──────────────────────────────
function BoldText({ text }) {
  const parts = (text || '').split(/(\*\*[^*]+\*\*)/g);
  return <>{parts.map((p, i) => p.startsWith('**') && p.endsWith('**')
    ? <strong key={i} className="text-white font-medium">{p.slice(2, -2)}</strong>
    : <span key={i}>{p}</span>)}</>;
}

function MdContent({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  const els = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith('|') && line.includes('|')) {
      const tbl = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) { tbl.push(lines[i]); i++; }
      const rows = tbl.filter(l => !/^\|[\s\-|:]+\|$/.test(l.trim())).map(l => l.split('|').slice(1,-1).map(c=>c.trim()));
      if (rows.length > 0) els.push(
        <div key={i} className="overflow-x-auto my-2"><table className="text-xs w-full">
          <thead><tr className="border-b border-white/10">{rows[0].map((c,ci) => <th key={ci} className="text-left py-1 px-2 text-gray-500 font-mono">{c}</th>)}</tr></thead>
          <tbody>{rows.slice(1).map((r,ri) => <tr key={ri} className="border-b border-white/5">{r.map((c,ci) => <td key={ci} className="py-1 px-2 text-gray-300"><BoldText text={c}/></td>)}</tr>)}</tbody>
        </table></div>
      );
      continue;
    }
    if (/^\s*[-*]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s/.test(lines[i])) { items.push(lines[i].replace(/^\s*[-*]\s/, '')); i++; }
      els.push(<ul key={i} className="list-disc list-inside space-y-0.5 my-1">{items.map((it,ii) => <li key={ii} className="text-gray-300 text-xs"><BoldText text={it}/></li>)}</ul>);
      continue;
    }
    if (!line.trim()) { i++; continue; }
    els.push(<p key={i} className="text-gray-300 text-xs my-1"><BoldText text={line}/></p>);
    i++;
  }
  return <div>{els}</div>;
}

// ─── Report Tab ──────────────────────────────────────────────
function ReportTab({ role }) {
  const report = useMemo(() => {
    const companySlug = role.company.toLowerCase().replace(/\s+/g, '-');
    for (const [filename, raw] of Object.entries(reportFiles || {})) {
      if (filename.toLowerCase().includes(companySlug)) {
        return parseReport(raw);
      }
    }
    return null;
  }, [role.company]);

  if (!report) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">No evaluation report for {role.company} yet.</p>
        <p className="text-gray-600 text-xs mt-2">Run <code className="text-amber-400 bg-white/5 px-1.5 py-0.5 rounded">/career-ops</code> with this role's JD to generate one.</p>
      </div>
    );
  }

  const sColor = parseFloat(report.score) >= 4.0 ? '#10b981' : parseFloat(report.score) >= 3.0 ? '#f59e0b' : '#ef4444';

  return (
    <div className="space-y-3">
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-4">
        {report.score && (
          <div className="text-2xl font-light font-mono px-3 py-1 rounded-lg border" style={{ color: sColor, borderColor: `${sColor}30`, background: `${sColor}10` }}>
            {report.score}
          </div>
        )}
        <div>
          <div className="text-white text-sm font-medium">{report.title}</div>
          <div className="text-gray-500 text-xs font-mono">{report.date} · {report.archetype}</div>
        </div>
        {report.legitimacy && (
          <Pill color={report.legitimacy.includes('High') ? '#10b981' : report.legitimacy.includes('Suspicious') ? '#ef4444' : '#f59e0b'}>
            {report.legitimacy}
          </Pill>
        )}
      </div>
      {report.sections.map((section) => (
        <details key={section.id} open className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
          <summary className="px-4 py-3 text-white text-sm font-medium cursor-pointer hover:bg-white/[0.03]">{section.title}</summary>
          <div className="px-4 pb-4 border-t border-white/5"><MdContent text={section.content} /></div>
        </details>
      ))}
    </div>
  );
}

// ─── Stories Tab ──────────────────────────────────────────────
const THEME_COLORS = { Leadership:'#10b981', Change:'#f59e0b', 'Cross-Functional':'#3b82f6', Technical:'#8b5cf6', '0-to-1':'#ef4444', People:'#ec4899', Data:'#06b6d4', Platform:'#6366f1' };
function themeColor(theme) {
  if (!theme) return '#6b7280';
  for (const [k, c] of Object.entries(THEME_COLORS)) { if (theme.toLowerCase().includes(k.toLowerCase())) return c; }
  return '#6b7280';
}

function StoriesTab({ role }) {
  const allStories = useMemo(() => parseStoryBank(storyBankRaw), []);
  const [expanded, setExpanded] = useState({});

  const companyLower = role.company.toLowerCase();
  const roleWords = role.title.toLowerCase().split(/[\s,\-]+/).filter(w => w.length > 2);

  // Stories directly sourced from this role's evaluation
  const directStories = allStories.filter(s => s.source && s.source.toLowerCase().includes(companyLower));

  // Recommended stories: match by tags/themes against role tags and gaps
  const roleTags = (role.tags || []).map(t => t.toLowerCase());
  const recommended = allStories.filter(s => {
    if (directStories.includes(s)) return false;
    const storyTags = s.tags.map(t => t.toLowerCase());
    return storyTags.some(t => roleTags.some(rt => t.includes(rt) || rt.includes(t)));
  });

  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));

  const renderStory = (story, i, label) => {
    const color = themeColor(story.theme);
    const isOpen = expanded[`${label}-${i}`];
    return (
      <div key={`${label}-${i}`} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/[0.07] transition-all cursor-pointer"
        onClick={() => toggle(`${label}-${i}`)}>
        <div className="flex items-start justify-between mb-2">
          <div>
            {story.theme && <span className="text-xs px-2 py-0.5 rounded-full font-mono border inline-block mb-2" style={{ background: `${color}15`, color, borderColor: `${color}30` }}>{story.theme}</span>}
            <h3 className="text-white text-sm font-medium">{story.title}</h3>
            {story.source && <p className="text-gray-500 text-xs mt-1 font-mono">{story.source}</p>}
          </div>
          <span className="text-gray-600 text-xs ml-2">{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && (
          <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
            {story.situation && <div><span className="text-amber-400 text-xs font-mono">S:</span><p className="text-gray-300 text-xs mt-0.5">{story.situation}</p></div>}
            {story.task && <div><span className="text-amber-400 text-xs font-mono">T:</span><p className="text-gray-300 text-xs mt-0.5">{story.task}</p></div>}
            {story.action && <div><span className="text-amber-400 text-xs font-mono">A:</span><p className="text-gray-300 text-xs mt-0.5">{story.action}</p></div>}
            {story.result && <div><span className="text-amber-400 text-xs font-mono">R:</span><p className="text-gray-300 text-xs mt-0.5">{story.result}</p></div>}
            {story.reflection && <div><span className="text-purple-400 text-xs font-mono">Reflection:</span><p className="text-gray-300 text-xs mt-0.5">{story.reflection}</p></div>}
          </div>
        )}
        {story.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {story.tags.map((tag, ti) => <span key={ti} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 font-mono">{tag}</span>)}
          </div>
        )}
      </div>
    );
  };

  if (!allStories.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">No stories in the story bank yet.</p>
        <p className="text-gray-600 text-xs mt-2">Stories accumulate as you evaluate offers.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {directStories.length > 0 && (
        <div>
          <div className="text-xs tracking-widest text-amber-400 font-mono mb-3">STORIES FROM THIS EVALUATION</div>
          <div className="grid grid-cols-1 gap-2">{directStories.map((s, i) => renderStory(s, i, 'direct'))}</div>
        </div>
      )}
      {recommended.length > 0 && (
        <div>
          <div className="text-xs tracking-widest text-blue-400 font-mono mb-3">RECOMMENDED FOR THIS ROLE</div>
          <div className="grid grid-cols-1 gap-2">{recommended.map((s, i) => renderStory(s, i, 'rec'))}</div>
        </div>
      )}
      {directStories.length === 0 && recommended.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">{allStories.length} stories in bank, but none matched this role.</p>
        </div>
      )}
    </div>
  );
}

// ─── Interview Prep Tab ──────────────────────────────────────
function InterviewTab({ role }) {
  const sections = useMemo(() => {
    const companySlug = role.company.toLowerCase().replace(/\s+/g, '-');
    for (const [filename, raw] of Object.entries(interviewFiles || {})) {
      if (filename.toLowerCase().includes(companySlug) && !filename.endsWith('story-bank.md')) {
        return parseInterview(raw);
      }
    }
    return [];
  }, [role.company]);

  if (!sections.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">No interview prep for {role.company} yet.</p>
        <p className="text-gray-600 text-xs mt-2">Evaluate this role to generate company-specific interview intel.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sections.map((section, i) => (
        <details key={i} open={i < 3} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
          <summary className="px-4 py-3 text-white text-sm font-medium cursor-pointer hover:bg-white/[0.03]">{section.title}</summary>
          <div className="px-4 pb-4 border-t border-white/5">
            <div className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap">
              {(section.content || '').split(/(\*\*[^*]+\*\*)/g).map((part, pi) =>
                part.startsWith('**') && part.endsWith('**')
                  ? <strong key={pi} className="text-white font-medium">{part.slice(2, -2)}</strong>
                  : <span key={pi}>{part}</span>
              )}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

// ─── Resume Tab ──────────────────────────────────────────────
function ResumeTab({ role }) {
  const matchingPdfs = useMemo(() => {
    const companySlug = role.company.toLowerCase().replace(/\s+/g, '-');
    return (Array.isArray(pdfFiles) ? pdfFiles : []).filter(f => f.toLowerCase().includes(companySlug));
  }, [role.company]);

  if (!matchingPdfs.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">No tailored resume for {role.company} yet.</p>
        <p className="text-gray-600 text-xs mt-2">Run <code className="text-amber-400 bg-white/5 px-1.5 py-0.5 rounded">/career-ops pdf</code> to generate one.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {matchingPdfs.map((filename) => (
        <div key={filename} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 text-xs font-mono">PDF</span>
            </div>
            <div>
              <div className="text-white text-sm font-medium">{filename}</div>
              <div className="text-gray-500 text-xs">Tailored for {role.company} · {role.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Role Detail Page ─────────────────────────────────────────
export default function RoleDetail({ roles, tasks, notes, onAddNote, onAddTask, onUpdateTask, onUpdateRole, briefComponents }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subTab, setSubTab] = useState("brief");
  const [statusOpen, setStatusOpen] = useState(false);
  const contentRef = useRef(null);

  const switchTab = (tabId) => {
    setSubTab(tabId);
  };
  const role = roles.find((r) => r.id === id);

  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#070707" }}>
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-4">Role not found</div>
          <button onClick={() => navigate("/")} className="text-amber-400 text-sm font-mono hover:underline">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const roleNotes = notes.filter((n) => n.roleId === id).sort((a, b) => a.createdAt - b.createdAt);
  const BriefComponent = briefComponents[role.id] || null;

  const subTabs = [
    { id: "brief", label: "Brief" },
    { id: "report", label: "Report" },
    { id: "stories", label: "Stories" },
    { id: "interview", label: "Interview" },
    { id: "resume", label: "Resume" },
    { id: "tasks", label: "Tasks", count: tasks.filter((t) => t.roles.includes(id)).length },
    { id: "activity", label: "Activity", count: roleNotes.length },
  ];

  const fitColor = parseInt(role.fit) >= 85 ? "#10b981" : parseInt(role.fit) >= 60 ? "#f59e0b" : "#ef4444";
  const currentStatusColor = ROLE_STATUS_COLORS[role.status] || "#6b7280";
  const currentStatusLabel = ROLE_STATUS_LABELS[role.status] || role.status;

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "linear-gradient(160deg,#070707 0%,#0d0d0d 50%,#080808 100%)" }}
    >
      {/* Sticky Header */}
      <div
        style={{
          position: "sticky",
          top: 52,
          zIndex: 40,
          background: "rgba(7,7,7,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-4" style={{ height: 48 }}>
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-white transition-colors text-sm font-mono flex items-center gap-2"
          >
            <span>←</span> Dashboard
          </button>
          <div className="w-px h-5 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: role.color }} />
            <span className="text-white font-medium">{role.company} · {role.title}</span>
          </div>
          <div style={{ position: "relative", marginLeft: "auto" }}>
            <button
              onClick={() => setStatusOpen((s) => !s)}
              className="text-xs px-3 py-1.5 rounded-full font-mono border flex items-center gap-1.5 transition-colors hover:brightness-125"
              style={{ background: `${currentStatusColor}15`, color: currentStatusColor, borderColor: `${currentStatusColor}30` }}
            >
              {currentStatusLabel}
              <span style={{ fontSize: 8, marginLeft: 2 }}>▼</span>
            </button>
            {statusOpen && (
              <div
                style={{
                  position: "absolute", top: "100%", right: 0, marginTop: 4, zIndex: 60,
                  background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                }}
              >
                {ROLE_STATUSES.map((s) => (
                  <button
                    key={s}
                    onClick={() => { onUpdateRole(id, { status: s }); setStatusOpen(false); }}
                    className="w-full text-left px-4 py-2 text-xs font-mono flex items-center gap-2 hover:bg-white/10 transition-colors"
                    style={{ color: role.status === s ? ROLE_STATUS_COLORS[s] : "#9ca3af", minWidth: 140 }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: 3, background: ROLE_STATUS_COLORS[s] }} />
                    {ROLE_STATUS_LABELS[s]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, minHeight: "calc(100vh - 160px)", alignItems: "start" }}>
          {/* Left Rail */}
          <div className="space-y-4" style={{ position: "sticky", top: 110, alignSelf: "start" }}>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">COMPENSATION</div>
                <div className="text-white text-sm">{role.comp}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">LOCATION</div>
                <div className="text-white text-sm">{role.loc}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">FIT</div>
                <div className="text-lg font-medium" style={{ color: fitColor }}>{role.fit}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono mb-1">TAGS</div>
                <div className="flex gap-1 flex-wrap">
                  {(role.tags || []).map((t) => (
                    <Pill key={t} color="#6b7280">{t}</Pill>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-600/30 rounded-lg p-3">
              <div className="text-xs tracking-widest text-emerald-400 font-mono mb-1">VERDICT</div>
              <div className="text-emerald-200 text-sm">{role.verdict}</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-xs tracking-widest text-emerald-400 font-mono mb-2">STRENGTHS</div>
              {(role.strengths || []).map((s, i) => (
                <div key={i} className="flex items-start gap-2 mb-1">
                  <span className="text-emerald-400 text-xs mt-0.5">✓</span>
                  <span className="text-gray-300 text-xs">{s}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-xs tracking-widest text-red-400 font-mono mb-2">GAPS</div>
              {(role.gaps || []).map((g, i) => (
                <div key={i} className="flex items-center gap-2 mb-1.5">
                  <Pill color={g.s === "HIGH" ? "#ef4444" : g.s === "MEDIUM" ? "#f59e0b" : "#10b981"}>{g.s}</Pill>
                  <span className="text-gray-300 text-xs">{g.g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col" style={{ minHeight: 0, minWidth: 0 }}>
            {/* Sub-tabs */}
            <div ref={contentRef} className="border-b border-white/8 flex gap-1 mb-4" style={{ position: "sticky", top: 100, zIndex: 30, background: "rgba(7,7,7,0.95)", backdropFilter: "blur(12px)", paddingTop: 4, marginTop: -4, scrollMarginTop: 110 }}>
              {subTabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => switchTab(t.id)}
                  className={`px-4 py-2 text-sm font-mono transition-all border-b-2 ${
                    subTab === t.id
                      ? "text-white border-amber-400"
                      : "text-gray-500 border-transparent hover:text-gray-300"
                  }`}
                >
                  {t.label}
                  {t.count !== undefined && <span className="ml-1.5 text-xs opacity-60">({t.count})</span>}
                </button>
              ))}
            </div>

            {/* Sub-tab Content */}
            <div className="flex-1" style={{ minHeight: 400, overflow: "hidden" }}>
              {subTab === "activity" && (
                <ActivityTab notes={roleNotes} onAddNote={(text) => onAddNote(id, text)} />
              )}
              {subTab === "tasks" && (
                <TasksTab
                  tasks={tasks}
                  roles={roles}
                  roleId={id}
                  onAddTask={onAddTask}
                  onUpdateTask={onUpdateTask}
                />
              )}
              {subTab === "brief" && <BriefTab BriefComponent={BriefComponent} />}
              {subTab === "report" && <ReportTab role={role} />}
              {subTab === "stories" && <StoriesTab role={role} />}
              {subTab === "interview" && <InterviewTab role={role} />}
              {subTab === "resume" && <ResumeTab role={role} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
