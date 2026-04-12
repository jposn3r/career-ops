#!/usr/bin/env node

/**
 * Career-Ops Web Dashboard — start/stop helper
 *
 * Usage:
 *   job-prep-start    → starts dev server in background
 *   job-prep-stop     → kills it
 */

import { spawn, execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const action = process.argv[2] || 'start';
const PORT = process.env.PORT || 3000;

if (action === 'stop') {
  try {
    execSync(`npx kill-port ${PORT}`, { stdio: 'ignore' });
  } catch {
    // fallback: find and kill vite processes on this port
    try {
      if (process.platform === 'win32') {
        const out = execSync(`netstat -ano | findstr :${PORT} | findstr LISTENING`, { encoding: 'utf-8' });
        const pids = [...new Set(out.trim().split('\n').map(l => l.trim().split(/\s+/).pop()))];
        for (const pid of pids) {
          try { execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' }); } catch {}
        }
      } else {
        execSync(`lsof -ti:${PORT} | xargs kill -9 2>/dev/null`, { stdio: 'ignore' });
      }
    } catch {}
  }
  console.log(`Dashboard stopped (port ${PORT})`);
  process.exit(0);
}

// Check if node_modules exists
if (!existsSync(resolve(__dirname, 'node_modules'))) {
  console.log('Installing dependencies...');
  execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
}

console.log(`Starting Career-Ops Dashboard on http://localhost:${PORT}`);
const child = spawn('node', [resolve(__dirname, 'node_modules/vite/bin/vite.js'), '--port', String(PORT)], {
  cwd: __dirname,
  stdio: 'ignore',
  detached: true,
});
child.unref();
console.log(`Dashboard running (pid ${child.pid}). Open http://localhost:${PORT}`);
console.log('Run job-prep-stop to shut it down.');
