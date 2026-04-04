import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const DIST_DIR = path.join(process.cwd(), 'dist');
const PDF_OUTPUT_DIR = DIST_DIR;

// Ensure the dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  console.error('Error: dist/ directory does not exist. Run astro build first.');
  process.exit(1);
}

// Ensure the output directory exists
if (!fs.existsSync(PDF_OUTPUT_DIR)) {
  fs.mkdirSync(PDF_OUTPUT_DIR, { recursive: true });
}

// Languages to generate PDFs for
const languages = ['en', 'it'];

async function generatePDFs() {
  const browser = await chromium.launch();

  try {
    for (const lang of languages) {
      const htmlPath = path.join(DIST_DIR, lang, 'index.html');
      
      // Check if the HTML file exists
      if (!fs.existsSync(htmlPath)) {
        console.warn(`Warning: ${htmlPath} not found, skipping...`);
        continue;
      }
      
      console.log(`Generating PDF for /${lang}...`);
      
      const context = await browser.newContext();
      const page = await context.newPage();
      
      // Open the local HTML file directly
      const fileUrl = 'file://' + htmlPath;
      await page.goto(fileUrl, {
        waitUntil: 'networkidle',
      });

      // Wait for fonts to load
      await page.waitForTimeout(1000);

      // Generate PDF optimized for print
      const pdfPath = path.join(PDF_OUTPUT_DIR, `resume-${lang}.pdf`);
      await page.pdf({
        path: pdfPath,
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

      console.log(`PDF generated: resume-${lang}.pdf`);
      await context.close();
    }

    console.log('PDF generation complete!');
  } finally {
    await browser.close();
  }
}

generatePDFs().catch((error) => {
  console.error('Error generating PDFs:', error);
  process.exit(1);
});
