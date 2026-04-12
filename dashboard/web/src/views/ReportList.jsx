import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { reportFiles } from '../lib/loaders';
import parseReport from '../lib/parse-report';

function scoreColor(score) {
  const num = parseFloat(score);
  if (isNaN(num)) return '#6b7280';
  if (num >= 4.0) return '#10b981';
  if (num >= 3.0) return '#f59e0b';
  return '#ef4444';
}

const LEGITIMACY_COLORS = {
  Green: '#10b981',
  Amber: '#f59e0b',
  Red: '#ef4444',
};

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

function filenameFromPath(path) {
  // "../../../reports/001-netflix-2026-04-12.md" -> "001-netflix-2026-04-12"
  const base = path.split('/').pop() || '';
  return base.replace(/\.md$/, '');
}

function reportNumber(filename) {
  const m = filename.match(/^(\d+)/);
  return m ? m[1] : '';
}

export default function ReportList() {
  const reports = useMemo(() => {
    const entries = Object.entries(reportFiles);
    return entries
      .map(([path, raw]) => {
        const parsed = parseReport(raw);
        if (!parsed) return null;
        const filename = filenameFromPath(path);
        return { ...parsed, filename, num: reportNumber(filename) };
      })
      .filter(Boolean)
      .sort((a, b) => {
        // Sort by date descending, then by number descending
        if (a.date && b.date && a.date !== b.date) return b.date.localeCompare(a.date);
        return (parseInt(b.num) || 0) - (parseInt(a.num) || 0);
      });
  }, []);

  if (!reports.length) {
    return (
      <div className="min-h-screen px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl font-semibold text-white mb-2">Evaluation Reports</h1>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-sm">
              No reports yet. Evaluate a job offer with{' '}
              <code className="text-amber-400 bg-white/5 px-1.5 py-0.5 rounded">/career-ops</code>{' '}
              to generate your first report.
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
          <h1 className="text-xl font-semibold text-white">Evaluation Reports</h1>
          <span className="text-gray-500 text-xs font-mono">{reports.length} reports</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {['#', 'Company / Role', 'Date', 'Score', 'Archetype', 'Legitimacy'].map((h) => (
                  <th
                    key={h}
                    className="text-left py-2 px-3 text-xs font-mono text-gray-500 tracking-widest"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => {
                const legColor =
                  LEGITIMACY_COLORS[r.legitimacy] ||
                  (r.legitimacy ? '#6b7280' : 'transparent');
                return (
                  <tr
                    key={r.filename}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition-colors cursor-pointer"
                  >
                    <td className="py-2 px-3 text-gray-600 font-mono text-xs">{r.num}</td>
                    <td className="py-2 px-3">
                      <Link
                        to={`/reports/${r.filename}`}
                        className="text-white hover:text-amber-400 transition-colors text-sm"
                      >
                        {r.title || r.filename}
                      </Link>
                    </td>
                    <td className="py-2 px-3 text-gray-400 font-mono text-xs whitespace-nowrap">
                      {r.date}
                    </td>
                    <td className="py-2 px-3">
                      {r.score && <Pill color={scoreColor(r.score)}>{r.score}</Pill>}
                    </td>
                    <td className="py-2 px-3 text-gray-400 text-xs">{r.archetype}</td>
                    <td className="py-2 px-3">
                      {r.legitimacy && <Pill color={legColor}>{r.legitimacy}</Pill>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
