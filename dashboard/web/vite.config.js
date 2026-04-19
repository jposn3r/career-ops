import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'fs';

const careerOpsRoot = resolve(__dirname, '../..');
const DASHBOARD_STATE_PATH = resolve(careerOpsRoot, 'data/dashboard-state.json');

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
    configureServer(server) {
      // File-backed dashboard state API — GET reads from data/dashboard-state.json,
      // POST writes to it. Committing that file syncs state across machines.
      server.middlewares.use('/api/dashboard-state', (req, res, next) => {
        if (req.method === 'GET') {
          let body = '{}';
          try {
            if (existsSync(DASHBOARD_STATE_PATH)) {
              body = readFileSync(DASHBOARD_STATE_PATH, 'utf-8') || '{}';
            }
          } catch {
            body = '{}';
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(body);
          return;
        }
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              // Validate JSON before writing so we never clobber with garbage
              JSON.parse(body || '{}');
              writeFileSync(DASHBOARD_STATE_PATH, body, 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true, path: 'data/dashboard-state.json' }));
            } catch (err) {
              res.statusCode = 400;
              res.end(JSON.stringify({ ok: false, error: String(err) }));
            }
          });
          return;
        }
        next();
      });
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
