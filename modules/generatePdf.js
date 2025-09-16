import path from "node:path";
import renderTemplate from "./renderTemplate.js";
import htmlToPdf from "./htmlToPdf.js";
import buildFilePath from "./buildFilePath.js";

export async function generatePdf(recipientData, config) {
	const templatePath = path.resolve("modules", "template.ejs");
	const html = await renderTemplate(templatePath, recipientData);
	const outFile = buildFilePath(recipientData, config);
	await htmlToPdf(html, outFile);
}
