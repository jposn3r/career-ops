import { useMemo, useState } from 'react';
import { interviewFiles } from '../lib/loaders';
import parseInterview from '../lib/parse-interview';

function filenameFromPath(path) {
  return (path.split('/').pop() || '').replace(/\.md$/, '');
}

/** Basic markdown rendering for section content. */
function MarkdownContent({ text }) {
  if (!text) return null;

  return (
    <div className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap">
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="text-white font-medium">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
}

export default function InterviewPrep() {
  const files = useMemo(() => {
    return Object.entries(interviewFiles)
      .filter(([path]) => !path.endsWith('story-bank.md'))
      .map(([path, raw]) => ({
        path,
        name: filenameFromPath(path),
        sections: parseInterview(raw),
      }))
      .filter((f) => f.sections.length > 0);
  }, []);

  const [selectedIdx, setSelectedIdx] = useState(0);

  if (!files.length) {
    return (
      <div className="min-h-screen px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl font-semibold text-white mb-2">Interview Prep</h1>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-sm">
              No interview prep files yet. Evaluate offers to generate company-specific interview
              intel in{' '}
              <code className="text-amber-400 bg-white/5 px-1.5 py-0.5 rounded">
                interview-prep/
              </code>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  const selected = files[selectedIdx] || files[0];

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-white">Interview Prep</h1>
          <span className="text-gray-500 text-xs font-mono">{files.length} files</span>
        </div>

        {/* File selector tabs */}
        {files.length > 1 && (
          <div className="flex gap-1 mb-4 overflow-x-auto border-b border-white/10 pb-2">
            {files.map((f, i) => (
              <button
                key={f.path}
                onClick={() => setSelectedIdx(i)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-all whitespace-nowrap ${
                  i === selectedIdx
                    ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30'
                    : 'text-gray-500 hover:text-gray-300 border border-transparent'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-3">
          {selected.sections.map((section, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h2 className="text-white text-sm font-medium mb-2">{section.title}</h2>
              <MarkdownContent text={section.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
