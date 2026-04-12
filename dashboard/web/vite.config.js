import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readFileSync, readdirSync, existsSync } from 'fs';

const careerOpsRoot = resolve(__dirname, '../..');

/**
 * Vite plugin that reads career-ops data files at serve/build time
 * and exposes them as virtual modules. This avoids cross-platform
 * glob path issues and works reliably on Windows/Mac/Linux.
 */
function careerOpsData() {
  const readSafe = (p) => {
    try { return readFileSync(resolve(careerOpsRoot, p), 'utf-8'); } catch { return ''; }
  };
  const listDir = (dir, ext) => {
    const p = resolve(careerOpsRoot, dir);
    try { return readdirSync(p).filter(f => f.endsWith(ext)); } catch { return []; }
  };

  return {
    name: 'career-ops-data',
    resolveId(id) {
      if (id.startsWith('virtual:career-ops/')) return id;
    },
    load(id) {
      if (id === 'virtual:career-ops/tracker') {
        return `export default ${JSON.stringify(readSafe('data/applications.md'))};`;
      }
      if (id === 'virtual:career-ops/story-bank') {
        return `export default ${JSON.stringify(readSafe('interview-prep/story-bank.md'))};`;
      }
      if (id === 'virtual:career-ops/profile') {
        return `export default ${JSON.stringify(readSafe('config/profile.yml'))};`;
      }
      if (id === 'virtual:career-ops/reports') {
        const files = listDir('reports', '.md');
        const data = {};
        for (const f of files) data[f] = readSafe(`reports/${f}`);
        return `export default ${JSON.stringify(data)};`;
      }
      if (id === 'virtual:career-ops/interview-prep') {
        const files = listDir('interview-prep', '.md');
        const data = {};
        for (const f of files) data[f] = readSafe(`interview-prep/${f}`);
        return `export default ${JSON.stringify(data)};`;
      }
      if (id === 'virtual:career-ops/pdfs') {
        const files = listDir('output', '.pdf');
        return `export default ${JSON.stringify(files)};`;
      }
    },
    handleHotUpdate({ file, server }) {
      // Hot-reload when career-ops data files change
      const rel = file.replace(careerOpsRoot.replace(/\\/g, '/'), '').replace(/^\//, '');
      if (rel.startsWith('data/') || rel.startsWith('reports/') || rel.startsWith('interview-prep/') || rel.startsWith('config/')) {
        const mod = server.moduleGraph.getModuleById('virtual:career-ops/tracker')
          || server.moduleGraph.getModuleById('virtual:career-ops/reports');
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: 'full-reload' });
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), careerOpsData()],
  server: {
    port: 3000,
    fs: {
      allow: [careerOpsRoot],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
  },
});
