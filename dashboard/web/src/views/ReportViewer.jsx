import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

/** Render markdown-ish text with basic styling (bold, lists, tables). */
function MarkdownContent({ text }) {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table detection: line with | characters
    if (line.trim().startsWith('|') && line.includes('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      // Parse table
      const rows = tableLines
        .filter((l) => !/^\|[\s\-|:]+\|$/.test(l.trim()))
        .map((l) =>
          l
            .split('|')
            .slice(1, -1)
            .map((c) => c.trim())
        );

      if (rows.length > 0) {
        elements.push(
          <div key={i} className="overflow-x-auto my-2">
            <table className="text-xs w-full">
              <thead>
                <tr className="border-b border-white/10">
                  {rows[0].map((cell, ci) => (
                    <th key={ci} className="text-left py-1 px-2 text-gray-500 font-mono">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, ri) => (
                  <tr key={ri} className="border-b border-white/5">
                    {row.map((cell, ci) => (
                      <td key={ci} className="py-1 px-2 text-gray-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // List items
    if (/^\s*[-*]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s/, ''));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-0.5 my-1">
          {items.map((item, ii) => (
            <li key={ii} className="text-gray-300 text-xs">
              <BoldText text={item} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\s*\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={i} className="list-decimal list-inside space-y-0.5 my-1">
          {items.map((item, ii) => (
            <li key={ii} className="text-gray-300 text-xs">
              <BoldText text={item} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-gray-300 text-xs my-1">
        <BoldText text={line} />
      </p>
    );
    i++;
  }

  return <div>{elements}</div>;
}

function BoldText({ text }) {
  // Replace **text** with bold spans
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="text-white font-medium">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function SectionPanel({ section, defaultExpanded = true }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-white text-sm font-medium">{section.title}</span>
        <span className="text-gray-600 text-xs">{expanded ? '-' : '+'}</span>
      </button>
      {expanded && (
        <div className="px-4 pb-4 border-t border-white/5">
          <MarkdownContent text={section.content} />
        </div>
      )}
    </div>
  );
}

export default function ReportViewer() {
  const { filename } = useParams();

  const { report, raw } = useMemo(() => {
    // Find matching report file by filename
    for (const [path, content] of Object.entries(reportFiles)) {
      const base = (path.split('/').pop() || '').replace(/\.md$/, '');
      if (base === filename) {
        return { report: parseReport(content), raw: content };
      }
    }
    return { report: null, raw: null };
  }, [filename]);

  if (!report) {
    return (
      <div className="min-h-screen px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/reports"
            className="text-amber-400 hover:text-amber-300 text-sm mb-4 inline-block transition-colors"
          >
            &larr; Back to Reports
          </Link>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-sm">Report not found.</p>
          </div>
        </div>
      </div>
    );
  }

  const sColor = scoreColor(report.score);
  const legColor = LEGITIMACY_COLORS[report.legitimacy] || '#6b7280';

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/reports"
          className="text-amber-400 hover:text-amber-300 text-sm mb-4 inline-block transition-colors"
        >
          &larr; Back to Reports
        </Link>

        {/* Header bar */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-4">
          <div className="flex items-start gap-4 flex-wrap">
            {/* Score */}
            {report.score && (
              <div
                className="text-3xl font-light font-mono px-4 py-2 rounded-lg border"
                style={{
                  color: sColor,
                  borderColor: `${sColor}30`,
                  background: `${sColor}10`,
                }}
              >
                {report.score}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-semibold text-white mb-1">{report.title}</h1>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400 font-mono">
                {report.date && <span>{report.date}</span>}
                {report.archetype && <span>{report.archetype}</span>}
                {report.legitimacy && (
                  <span
                    className="px-2 py-0.5 rounded-full border"
                    style={{
                      color: legColor,
                      borderColor: `${legColor}30`,
                      background: `${legColor}10`,
                    }}
                  >
                    {report.legitimacy}
                  </span>
                )}
              </div>
              {report.url && (
                <a
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-xs mt-1 inline-block transition-colors break-all"
                >
                  {report.url}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Section panels */}
        <div className="space-y-2">
          {report.sections.map((section) => (
            <SectionPanel key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
