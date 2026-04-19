import { useState } from "react";
import { Link } from "react-router-dom";
import { ROLE_STATUSES, ROLE_STATUS_COLORS, ROLE_STATUS_LABELS } from "../lib/role-statuses";

// Column order: left = early-funnel, right = terminal
const COLUMN_ORDER = [
  "prep",
  "research",
  "watching",
  "applied",
  "interviewing",
  "rejected",
  "closed",
  "not-interested",
];

function fitColor(fitStr) {
  const n = parseInt(fitStr);
  if (isNaN(n)) return "#6b7280";
  if (n >= 85) return "#10b981";
  if (n >= 60) return "#f59e0b";
  return "#ef4444";
}

function Card({ role, onDragStart, onDragEnd, isDragging }) {
  const fc = fitColor(role.fit);
  return (
    <Link
      to={`/role/${role.id}`}
      state={{ from: "/pipeline", label: "Pipeline" }}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", role.id);
        onDragStart(role.id);
      }}
      onDragEnd={onDragEnd}
      className="block bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-grab active:cursor-grabbing no-underline"
      style={{
        textDecoration: "none",
        opacity: isDragging ? 0.4 : 1,
      }}
    >
      <div className="flex items-start gap-2">
        <div
          className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
          style={{ background: role.color }}
        />
        <div className="flex-1 min-w-0">
          <div className="text-white text-sm font-medium truncate">
            {role.company}
          </div>
          <div className="text-gray-400 text-xs truncate mt-0.5">
            {role.title}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-full font-mono border"
              style={{
                background: `${fc}15`,
                color: fc,
                borderColor: `${fc}30`,
              }}
            >
              {role.fit}
            </span>
            <span className="text-gray-600 text-[10px] font-mono truncate">
              {role.loc}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Column({ status, roles, onDrop, onDragOver, isTarget, dragId, onDragStart, onDragEnd }) {
  const color = ROLE_STATUS_COLORS[status] || "#6b7280";
  const label = ROLE_STATUS_LABELS[status] || status;
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        onDragOver(status);
      }}
      onDrop={(e) => {
        e.preventDefault();
        onDrop(status);
      }}
      className="flex flex-col rounded-lg border transition-colors"
      style={{
        minWidth: 260,
        maxWidth: 260,
        background: isTarget ? `${color}10` : "rgba(255,255,255,0.02)",
        borderColor: isTarget ? `${color}60` : "rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="px-3 py-2 border-b flex items-center justify-between"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: color }} />
          <span className="text-white text-xs font-mono tracking-wide">{label}</span>
        </div>
        <span
          className="text-[10px] px-1.5 py-0.5 rounded-full font-mono"
          style={{ color, background: `${color}15` }}
        >
          {roles.length}
        </span>
      </div>
      <div className="flex-1 p-2 space-y-2 overflow-y-auto" style={{ minHeight: 100 }}>
        {roles.length === 0 && (
          <div className="text-gray-700 text-[11px] text-center py-6 font-mono">
            drop here
          </div>
        )}
        {roles.map((r) => (
          <Card
            key={r.id}
            role={r}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            isDragging={dragId === r.id}
          />
        ))}
      </div>
    </div>
  );
}

export default function Pipeline({ roles, onUpdateRole }) {
  const [dragId, setDragId] = useState(null);
  const [targetCol, setTargetCol] = useState(null);

  if (!roles || roles.length === 0) {
    return (
      <div className="min-h-screen px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold text-white mb-2">Pipeline</h1>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-sm">No roles yet.</p>
          </div>
        </div>
      </div>
    );
  }

  // Group roles by status, defaulting unknown statuses to "research"
  const byStatus = {};
  for (const s of COLUMN_ORDER) byStatus[s] = [];
  for (const r of roles) {
    const s = COLUMN_ORDER.includes(r.status) ? r.status : "research";
    byStatus[s].push(r);
  }
  // Sort each column by fit desc
  for (const s of COLUMN_ORDER) {
    byStatus[s].sort((a, b) => parseInt(b.fit) - parseInt(a.fit));
  }

  const handleDrop = (newStatus) => {
    if (dragId && roles.find((r) => r.id === dragId)?.status !== newStatus) {
      onUpdateRole(dragId, { status: newStatus });
    }
    setDragId(null);
    setTargetCol(null);
  };

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold text-white">Pipeline</h1>
            <p className="text-gray-500 text-xs font-mono mt-1">
              {roles.length} roles · drag cards between columns to change status
            </p>
          </div>
          <div className="flex gap-2 text-[10px] font-mono">
            {COLUMN_ORDER.map((s) => {
              const c = ROLE_STATUS_COLORS[s];
              const n = byStatus[s].length;
              if (n === 0) return null;
              return (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded-full"
                  style={{ color: c, background: `${c}15` }}
                >
                  {ROLE_STATUS_LABELS[s]}: {n}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4" style={{ minHeight: "calc(100vh - 160px)" }}>
          {COLUMN_ORDER.map((s) => (
            <Column
              key={s}
              status={s}
              roles={byStatus[s]}
              dragId={dragId}
              isTarget={targetCol === s}
              onDragStart={(id) => setDragId(id)}
              onDragEnd={() => { setDragId(null); setTargetCol(null); }}
              onDragOver={(col) => setTargetCol(col)}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
