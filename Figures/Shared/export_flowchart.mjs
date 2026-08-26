import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [inputPath, pdfPath, pngPath, widthText, heightText] = process.argv.slice(2);

if (!inputPath || !pdfPath || !pngPath || !widthText || !heightText) {
  throw new Error("Usage: export_flowchart.mjs INPUT_HTML OUTPUT_PDF OUTPUT_PNG WIDTH HEIGHT");
}

const width = Number(widthText);
const height = Number(heightText);

if (!Number.isFinite(width) || !Number.isFinite(height)) {
  throw new Error("WIDTH and HEIGHT must be numeric CSS-pixel dimensions");
}

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROME_EXECUTABLE || chromium.executablePath(),
});
const context = await browser.newContext({
  viewport: { width, height },
  deviceScaleFactor: 4,
});
const page = await context.newPage();

await page.goto(pathToFileURL(inputPath).href, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "screen" });

await page.pdf({
  path: pdfPath,
  width: `${width}px`,
  height: `${height}px`,
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await page.screenshot({
  path: pngPath,
  clip: { x: 0, y: 0, width, height },
  omitBackground: false,
});

await browser.close();
