// Career-ops data via virtual modules (Vite plugin reads files at serve/build time)
export { default as trackerRaw } from 'virtual:career-ops/tracker';
export { default as storyBankRaw } from 'virtual:career-ops/story-bank';
export { default as profileRaw } from 'virtual:career-ops/profile';
export { default as reportFiles } from 'virtual:career-ops/reports';
export { default as interviewFiles } from 'virtual:career-ops/interview-prep';
export { default as pdfFiles } from 'virtual:career-ops/pdfs';

// Briefs (system-layer, always in src/briefs/)
export const briefModules = import.meta.glob('../briefs/*.jsx', { eager: true });
