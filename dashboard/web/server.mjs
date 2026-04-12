#!/usr/bin/env node

/**
 * Career-Ops Web Dashboard — start/stop helper
 *
 * Usage:
 *   job-prep-start    → starts dev server in background, saves port to .dashboard-port
 *   job-prep-stop     → reads .dashboard-port, kills the server
 */

import { spawn, execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, writeFileSync, readFileSync, unlinkSync } from 'fs';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const action = process.argv[2] || 'start';
const PORT_FILE = resolve(__dirname, '.dashboard-port');
const DEFAULT_PORT = 3000;

function getPort() {
  // CLI arg > env var > saved port file > default
  const envPort = process.env.PORT;
  if (envPort) return parseInt(envPort, 10);
  if (existsSync(PORT_FILE)) {
    const saved = readFileSync(PORT_FILE, 'utf-8').trim();
    if (saved) return parseInt(saved, 10);
  }
  return DEFAULT_PORT;
}

function isPortInUse(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}/`, () => { resolve(true); });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => { req.destroy(); resolve(false); });
  });
}

function killPort(port) {
  try {
    if (process.platform === 'win32') {
      const out = execSync(`netstat -ano | findstr :${port} | findstr LISTENING`, { encoding: 'utf-8' });
      const pids = [...new Set(out.trim().split('\n').map(l => l.trim().split(/\s+/).pop()))];
      for (const pid of pids) {
        try { execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' }); } catch {}
      }
    } else {
      execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null`, { stdio: 'ignore' });
    }
  } catch {}
}

async function main() {
  if (action === 'stop') {
    const port = getPort();
    const inUse = await isPortInUse(port);
    if (!inUse) {
      console.log(`Nothing running on port ${port}.`);
    } else {
      killPort(port);
      console.log(`Dashboard stopped (port ${port}).`);
    }
    try { unlinkSync(PORT_FILE); } catch {}
    process.exit(0);
  }

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : DEFAULT_PORT;

  // Check if already running
  if (await isPortInUse(port)) {
    console.log(`Dashboard is already running at http://localhost:${port}`);
    process.exit(0);
  }

  // Check if node_modules exists
  if (!existsSync(resolve(__dirname, 'node_modules'))) {
    console.log('Installing dependencies...');
    execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
  }

  console.log(`Starting Career-Ops Dashboard on http://localhost:${port}...`);
  const child = spawn('node', [resolve(__dirname, 'node_modules/vite/bin/vite.js'), '--port', String(port), '--strictPort'], {
    cwd: __dirname,
    stdio: 'ignore',
    detached: true,
  });
  child.unref();

  // Wait for server to be ready
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    if (await isPortInUse(port)) {
      writeFileSync(PORT_FILE, String(port));
      console.log(`Dashboard running at http://localhost:${port}`);
      console.log('Run job-prep-stop to shut it down.');
      process.exit(0);
    }
  }
  console.error(`Failed to start on port ${port}.`);
  process.exit(1);
}

main();
