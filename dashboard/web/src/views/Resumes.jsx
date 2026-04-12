import { useMemo } from 'react';
import { pdfFiles } from '../lib/loaders';

function filenameFromPath(path) {
  return path.split('/').pop() || '';
}

function extractCompany(filename) {
  // Pattern: "cv-company-name-role.pdf" or "001-company-name-2026-04-12.pdf"
  const base = filename.replace(/\.pdf$/, '');
  // Remove leading numbers and date patterns
  const cleaned = base
    .replace(/^\d{3}-/, '')
    .replace(/-\d{4}-\d{2}-\d{2}$/, '')
    .replace(/^cv-/, '');
  // Convert dashes to spaces and title-case
  return cleaned
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function Resumes() {
  const pdfs = useMemo(() => {
    // pdfFiles is an array of filenames from the virtual module
    return (Array.isArray(pdfFiles) ? pdfFiles : Object.keys(pdfFiles)).map((f) => {
      const filename = typeof f === 'string' ? f : filenameFromPath(f);
      return {
        path: `/output/${filename}`,
        filename,
        company: extractCompany(filename),
      };
    });
  }, []);

  if (!pdfs.length) {
    return (
      <div className="min-h-screen px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl font-semibold text-white mb-2">Resumes</h1>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-sm">
              No resumes generated yet. Run{' '}
              <code className="text-amber-400 bg-white/5 px-1.5 py-0.5 rounded">
                /career-ops pdf
              </code>{' '}
              to generate a tailored resume.
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
          <h1 className="text-xl font-semibold text-white">Resumes</h1>
          <span className="text-gray-500 text-xs font-mono">{pdfs.length} PDFs</span>
        </div>

        <div className="space-y-2">
          {pdfs.map((pdf) => (
            <div
              key={pdf.path}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-xs font-mono">PDF</span>
                </div>
                <div className="min-w-0">
                  <div className="text-white text-sm font-medium truncate">{pdf.company}</div>
                  <div className="text-gray-500 text-xs font-mono truncate">{pdf.filename}</div>
                </div>
              </div>
              <a
                href={pdf.path}
                download
                className="text-amber-400 hover:text-amber-300 text-xs font-mono transition-colors flex-shrink-0 ml-3"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
