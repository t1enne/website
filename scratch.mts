import { chromium } from "playwright";
import { spawn } from "child_process";

const PORT = 4337;
const server = spawn("npm", ["run","preview","--","--port",PORT.toString()], {cwd: process.cwd(), shell:true, stdio:"pipe"});
await new Promise(r => setTimeout(r, 3500));
const browser = await chromium.launch();
const page = await browser.newPage({deviceScaleFactor:1});
await page.goto(`http://localhost:${PORT}/en`, {waitUntil:"networkidle"});
await page.waitForTimeout(2000);
const fs = await import("fs");
const pdf = await page.pdf({format:"A4", printBackground:true, preferCSSPageSize:true, margin:{top:"0mm",right:"0mm",bottom:"0mm",left:"0mm"}});
fs.writeFileSync("/tmp/resume-en.pdf", pdf);
await browser.close();
server.kill("SIGTERM");
console.log("written");
