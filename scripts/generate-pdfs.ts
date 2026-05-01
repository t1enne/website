import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { copyFileSync } from 'fs';
import fs from 'fs';
import path from 'path';

const CWD = process.cwd();
const DIST_DIR = path.join(CWD, 'dist');
const PUBLIC_DIR = path.join(CWD, 'public');
const PORT = 4325;

// Output to dist/ for astro preview / production, and public/ for astro dev
const PDF_OUTPUT_DIRS = [DIST_DIR, PUBLIC_DIR].filter((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  return true;
});

if (!fs.existsSync(DIST_DIR)) {
  console.error('Error: dist/ directory does not exist. Run astro build first.');
  process.exit(1);
}

// Languages to generate PDFs for
const languages = ['en', 'it', 'fr'];

async function waitForServer(url: string, timeout = 60000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Server not ready yet
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error(`Server at ${url} did not start within ${timeout}ms`);
}

async function generatePDFs() {
  console.log('Starting astro preview...');
  
  // Start astro preview server
  const previewServer = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString()], {
    cwd: process.cwd(),
    stdio: 'pipe',
    shell: true,
    detached: true,
  });

  // Log server output for debugging
  previewServer.stdout?.on('data', (data) => {
    console.log(`[preview] ${data.toString().trim()}`);
  });
  previewServer.stderr?.on('data', (data) => {
    console.error(`[preview] ${data.toString().trim()}`);
  });

  try {
    // Wait for the server to be ready
    await waitForServer(`http://localhost:${PORT}/en`);
    console.log('Preview server started successfully');

    const browser = await chromium.launch();

    for (const lang of languages) {
      console.log(`Generating PDF for /${lang}...`);
      
      const context = await browser.newContext();
      const page = await context.newPage();
      
      // Navigate to the preview server
      await page.goto(`http://localhost:${PORT}/${lang}`, {
        waitUntil: 'networkidle',
      });

      // Wait for fonts to load
      await page.waitForTimeout(2000);

      // Generate PDF optimized for print — write to dist/ then copy to public/
      const basePdfPath = path.join(DIST_DIR, `resume-${lang}.pdf`);
      await page.pdf({
        path: basePdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '0mm',
          right: '0mm',
          bottom: '0mm',
          left: '0mm',
        },
        scale: 1,
      });

      // Copy to public/ so astro dev serves it too
      const publicPdfPath = path.join(PUBLIC_DIR, `resume-${lang}.pdf`);
      copyFileSync(basePdfPath, publicPdfPath);

      console.log(`PDF generated: resume-${lang}.pdf`);
      await context.close();
    }

    await browser.close();
    console.log('PDF generation complete!');
  } finally {
    // Kill the preview server
    if (previewServer.pid) {
      try {
        process.kill(-previewServer.pid, 'SIGTERM');
      } catch {
        // Ignore errors if process already exited
      }
    }
  }
}

generatePDFs().catch((error) => {
  console.error('Error generating PDFs:', error);
  process.exit(1);
});
