import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";

import { useEffect } from "react";
import Dashboard from "./views/Dashboard.jsx";
import RoleDetail from "./views/RoleDetail.jsx";
import Pipeline from "./views/Pipeline.jsx";
import StoryBank from "./views/StoryBank.jsx";
import ReportList from "./views/ReportList.jsx";
import ReportViewer from "./views/ReportViewer.jsx";
import InterviewPrep from "./views/InterviewPrep.jsx";
import Resumes from "./views/Resumes.jsx";

// ─── Auto-discover briefs ─────────────────────────────────────
const briefModules = import.meta.glob("./briefs/*.jsx", { eager: true });

const ROLES = [];
const BRIEFS = [];
const BRIEF_COMPONENTS = {};
const INITIAL_TASKS = [];
let taskId = 1;

for (const [path, mod] of Object.entries(briefModules)) {
  const { meta, tasks: briefTasks, default: Component } = mod;
  if (!meta || !Component) continue;
  ROLES.push({ ...meta, brief: path.split("/").pop() });
  BRIEFS.push({
    path: meta.id,
    label: `${meta.company} ${meta.title}`,
    component: Component,
    priority: meta.priority,
    color: meta.color,
  });
  BRIEF_COMPONENTS[meta.id] = Component;
  if (briefTasks) {
    for (const t of briefTasks) {
      if (!INITIAL_TASKS.some((existing) => existing.title === t.title)) {
        INITIAL_TASKS.push({ ...t, id: `t${taskId++}` });
      }
    }
  }
}

ROLES.sort((a, b) => parseInt(b.fit) - parseInt(a.fit));
BRIEFS.sort((a, b) => {
  const fitA = ROLES.find((r) => r.id === a.path);
  const fitB = ROLES.find((r) => r.id === b.path);
  return (fitB ? parseInt(fitB.fit) : 0) - (fitA ? parseInt(fitA.fit) : 0);
});

// ─── Nav Components ──────────────────────────────────────────

function NavBriefLink({ b, active }) {
  const [hover, setHover] = useState(false);
  const [rect, setRect] = useState(null);
  const ref = useRef(null);
  const role = ROLES.find((r) => r.id === b.path);
  const fitVal = role ? parseInt(role.fit) : 0;
  const fitColor = fitVal >= 85 ? "#10b981" : fitVal >= 60 ? "#f59e0b" : "#ef4444";

  const onEnter = () => {
    setHover(true);
    if (ref.current) setRect(ref.current.getBoundingClientRect());
  };

  return (
    <span ref={ref} onMouseEnter={onEnter} onMouseLeave={() => setHover(false)}>
      <Link
        to={`/role/${b.path}`}
        style={{
          color: active ? "#fff" : "#6b7280",
          textDecoration: "none",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 11,
          padding: "6px 10px",
          borderRadius: 6,
          whiteSpace: "nowrap",
          background: active ? "rgba(255,255,255,0.1)" : "transparent",
          transition: "all 0.15s",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 6,
            height: 6,
            borderRadius: 3,
            background: b.color,
            marginRight: 6,
          }}
        />
        #{b.priority}
      </Link>
      {hover && role && rect &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: rect.bottom + 8,
              left: rect.left + rect.width / 2,
              transform: "translateX(-50%)",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                padding: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                minWidth: 200,
                whiteSpace: "nowrap",
              }}
            >
              <div style={{ color: "#fff", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                {role.company} · {role.title}
              </div>
              <div style={{ color: "#9ca3af", fontSize: 11, fontFamily: "JetBrains Mono, monospace" }}>
                {role.comp}
              </div>
              <div style={{ color: "#9ca3af", fontSize: 11, fontFamily: "JetBrains Mono, monospace", marginTop: 2 }}>
                {role.loc}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                <span style={{ color: fitColor, fontSize: 11, fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}>
                  {role.fit} fit
                </span>
                <span style={{ color: "#6b7280", fontSize: 11, fontFamily: "JetBrains Mono, monospace" }}>
                  {role.status}
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </span>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return null;
}

const NAV_LINKS = [
  { to: "/pipeline", label: "Pipeline" },
  { to: "/stories", label: "Stories" },
  { to: "/reports", label: "Reports" },
  { to: "/interview", label: "Interview Prep" },
  { to: "/resumes", label: "Resumes" },
];

function Nav() {
  const location = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(7,7,7,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", height: 52, gap: 12 }}>
          {/* Logo / Home */}
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "#f59e0b" : "#9ca3af",
              textDecoration: "none",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.05em",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 16 }}>◈</span>
            COMMAND CENTER
          </Link>

          {/* Separator */}
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

          {/* Career-ops section links */}
          <div style={{ display: "flex", gap: 2, flexShrink: 0 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: location.pathname.startsWith(link.to) ? "#fff" : "#6b7280",
                  textDecoration: "none",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  padding: "6px 10px",
                  borderRadius: 6,
                  whiteSpace: "nowrap",
                  background: location.pathname.startsWith(link.to) ? "rgba(255,255,255,0.1)" : "transparent",
                  transition: "all 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Separator */}
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

          {/* Brief nav dots */}
          <div
            style={{
              display: "flex",
              gap: 4,
              overflowX: "auto",
              flex: 1,
              scrollbarWidth: "none",
            }}
          >
            {BRIEFS.map((b) => (
              <NavBriefLink key={b.path} b={b} active={location.pathname === `/role/${b.path}`} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Placeholder Pages ───────────────────────────────────────

function PlaceholderPage({ title }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(160deg,#070707 0%,#0d0d0d 50%,#080808 100%)" }}
    >
      <div className="text-center">
        <div className="text-amber-400 text-lg font-mono mb-2">{title}</div>
        <div className="text-gray-500 text-sm">Coming soon</div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────

export default function App() {
  const [roles, setRoles] = useState(ROLES);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [notes, setNotes] = useState([]);

  const nextId = useRef(100);
  const genId = (prefix) => `${prefix}${nextId.current++}`;

  const addNote = (roleId, text) => {
    setNotes((prev) => [...prev, { id: genId("n"), roleId, text, createdAt: Date.now() }]);
  };

  const addTask = (taskData) => {
    setTasks((prev) => [...prev, { ...taskData, id: genId("t") }]);
  };

  const updateTask = (taskId, updates) => {
    setTasks((prev) => prev.map((t) => (t.id === taskId ? { ...t, ...updates } : t)));
  };

  const updateRole = (roleId, updates) => {
    setRoles((prev) => prev.map((r) => (r.id === roleId ? { ...r, ...updates } : r)));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        {/* Dashboard */}
        <Route
          path="/"
          element={
            <div style={{ paddingTop: 52 }}>
              <Dashboard roles={roles} tasks={tasks} onUpdateTask={updateTask} onUpdateRole={updateRole} />
            </div>
          }
        />

        {/* Role Detail */}
        <Route
          path="/role/:id"
          element={
            <div style={{ paddingTop: 52 }}>
              <RoleDetail
                roles={roles}
                tasks={tasks}
                notes={notes}
                onAddNote={addNote}
                onAddTask={addTask}
                onUpdateTask={updateTask}
                onUpdateRole={updateRole}
                briefComponents={BRIEF_COMPONENTS}
              />
            </div>
          }
        />

        {/* Career-ops views */}
        <Route path="/pipeline" element={<div style={{ paddingTop: 52 }}><Pipeline /></div>} />
        <Route path="/stories" element={<div style={{ paddingTop: 52 }}><StoryBank /></div>} />
        <Route path="/reports" element={<div style={{ paddingTop: 52 }}><ReportList /></div>} />
        <Route path="/reports/:filename" element={<div style={{ paddingTop: 52 }}><ReportViewer /></div>} />
        <Route path="/interview" element={<div style={{ paddingTop: 52 }}><InterviewPrep /></div>} />
        <Route path="/interview/:filename" element={<div style={{ paddingTop: 52 }}><InterviewPrep /></div>} />
        <Route path="/resumes" element={<div style={{ paddingTop: 52 }}><Resumes /></div>} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
