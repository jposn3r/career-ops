// Shared role-status definitions used by Dashboard (Command Center)
// and RoleDetail. Add a new status in ONE place — both views pick it up.

export const ROLE_STATUSES = [
  "prep",
  "research",
  "watching",
  "applied",
  "interviewing",
  "rejected",
  "not-interested",
  "closed",
];

export const ROLE_STATUS_COLORS = {
  prep: "#10b981",
  research: "#f59e0b",
  watching: "#6b7280",
  applied: "#3b82f6",
  interviewing: "#8b5cf6",
  rejected: "#ef4444",
  "not-interested": "#6b7280",
  closed: "#78716c",
};

export const ROLE_STATUS_LABELS = {
  prep: "Prepping",
  research: "Researching",
  watching: "Watching",
  applied: "Applied",
  interviewing: "Interviewing",
  rejected: "Rejected",
  "not-interested": "Not Interested",
  closed: "Closed",
};
