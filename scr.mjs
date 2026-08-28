import { chromium } from "playwright";
import { spawn } from "child_process";
import { writeFileSync } from "fs";

const PORT = 4331;
const server = spawn("npm", ["run","preview","--","--port",PORT.toString()], {cwd: process.cwd(), shell:true, stdio:"pipe"});
await new Promise(r => setTimeout(r, 3000));
const browser = await chromium.launch();
const page = await browser.newPage({deviceScaleFactor:2});
await page.goto(`http://localhost:${PORT}/en`, {waitUntil:"networkidle"});
await page.waitForTimeout(1500);
const pagePDF = await page.pdf({format:"A4", printBackground:true, margin:{top:"0mm",right:"0mm",bottom:"0mm",left:"0mm"}});
writeFileSync("/tmp/resume-preview.pdf", pagePDF);
await page.emulateMedia({media:"print"});
await page.evaluate(()=>window.scrollTo(0,0));
await page.screenshot({path:"/tmp/resume-print-top.png"});
await browser.close();
server.kill("SIGTERM");
console.log("done");
