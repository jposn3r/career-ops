import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { trackerRaw } from '../lib/loaders';
import parseTracker from '../lib/parse-tracker';

const STATUS_COLORS = {
  Evaluated: '#f59e0b',
  Applied: '#3b82f6',
  Responded: '#10b981',
  Interview: '#8b5cf6',
  Offer: '#10b981',
  Rejected: '#ef4444',
  Discarded: '#6b7280',
  SKIP: '#4b5563',
};

function scoreColor(score) {
  const num = parseFloat(score);
  if (isNaN(num)) return '#6b7280';
  if (num >= 4.0) return '#10b981';
  if (num >= 3.0) return '#f59e0b';
  return '#ef4444';
}

function Pill({ color, children }) {
  return (
    <span
      className="text-xs px-2 py-0.5 rounded-full font-mono border whitespace-nowrap"
      style={{
        background: `${color}15`,
        color,
        borderColor: `${color}30`,
      }}
    >
      {children}
    </span>
  );
}

export default function Pipeline() {
  const apps = useMemo(() => parseTracker(trackerRaw), []);

  if (!apps.length) {
    return (
      <div className="min-h-screen px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl font-semibold text-white mb-2">Application Pipeline</h1>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-sm">
              No applications tracked yet. Run{' '}
              <code className="text-amber-400 bg-white/5 px-1.5 py-0.5 rounded">/career-ops</code>{' '}
              with a job description to evaluate your first offer.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-white">Application Pipeline</h1>
          <span className="text-gray-500 text-xs font-mono">{apps.length} applications</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {['#', 'Date', 'Company', 'Role', 'Score', 'Status', 'PDF', 'Report', 'Notes'].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left py-2 px-3 text-xs font-mono text-gray-500 tracking-widest"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {apps.map((app, i) => (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                >
                  <td className="py-2 px-3 text-gray-600 font-mono text-xs">{app.num}</td>
                  <td className="py-2 px-3 text-gray-400 font-mono text-xs whitespace-nowrap">
                    {app.date}
                  </td>
                  <td className="py-2 px-3 text-white text-sm">{app.company}</td>
                  <td className="py-2 px-3 text-gray-300 text-sm max-w-[200px] truncate">
                    {app.role}
                  </td>
                  <td className="py-2 px-3">
                    <Pill color={scoreColor(app.score)}>{app.score}</Pill>
                  </td>
                  <td className="py-2 px-3">
                    <Pill color={STATUS_COLORS[app.status] || '#6b7280'}>{app.status}</Pill>
                  </td>
                  <td className="py-2 px-3 text-center">{app.pdf}</td>
                  <td className="py-2 px-3">
                    {app.report ? (
                      <Link
                        to={`/reports/${app.report}`}
                        className="text-amber-400 hover:text-amber-300 text-xs font-mono transition-colors"
                      >
                        View
                      </Link>
                    ) : (
                      <span className="text-gray-600 text-xs">--</span>
                    )}
                  </td>
                  <td className="py-2 px-3 text-gray-500 text-xs max-w-[200px] truncate">
                    {app.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
