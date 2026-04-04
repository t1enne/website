import { chromium } from "playwright";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const PDF_OUTPUT_DIR = PUBLIC_DIR;
const PORT = 4322; // Use a different port to avoid conflicts

// Ensure the public directory exists
if (!fs.existsSync(PDF_OUTPUT_DIR)) {
  fs.mkdirSync(PDF_OUTPUT_DIR, { recursive: true });
}

// Languages to generate PDFs for
const languages = ["en", "it"];

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
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Server at ${url} did not start within ${timeout}ms`);
}

async function generatePDFs() {
  console.log("Starting dev server...");

  // Start the dev server in the background
  const devServer = spawn(
    "npm",
    ["run", "dev", "--", "--port", PORT.toString(), "--host"],
    {
      cwd: process.cwd(),
      stdio: "pipe",
      shell: true,
      detached: true,
    },
  );

  // Log dev server output for debugging
  devServer.stdout?.on("data", (data) => {
    console.log(`[dev server] ${data.toString().trim()}`);
  });
  devServer.stderr?.on("data", (data) => {
    console.error(`[dev server] ${data.toString().trim()}`);
  });

  try {
    // Wait for the server to be ready
    await waitForServer(`http://localhost:${PORT}/en`);
    console.log("Dev server started successfully");

    const browser = await chromium.launch();

    for (const lang of languages) {
      console.log(`Generating PDF for /${lang}...`);

      const context = await browser.newContext();
      const page = await context.newPage();

      // Navigate to the local dev server
      await page.goto(`http://localhost:${PORT}/${lang}`, {
        waitUntil: "networkidle",
      });

      // Wait for fonts to load
      await page.waitForTimeout(2000);

      // Generate PDF optimized for print
      const pdfPath = path.join(PDF_OUTPUT_DIR, `resume-${lang}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: "A4",
        printBackground: true,
        margin: {
          top: "0mm",
          right: "0mm",
          bottom: "0mm",
          left: "0mm",
        },
        scale: 1,
      });

      console.log(`PDF generated: resume-${lang}.pdf`);
      await context.close();
    }

    await browser.close();
    console.log("PDF generation complete!");
  } finally {
    // Kill the dev server
    if (devServer.pid) {
      try {
        process.kill(-devServer.pid, "SIGTERM");
      } catch {
        // Ignore errors if process already exited
      }
    }
  }
}

generatePDFs().catch((error) => {
  console.error("Error generating PDFs:", error);
  process.exit(1);
});
