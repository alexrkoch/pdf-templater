import path from "node:path";
import renderTemplate from "./renderTemplate.js";
import htmlToPdf from "./htmlToPdf.js";
import buildFilePath from "./buildFilePath.js";
import imageToDataUri from "./imageToDataUri.js";

export async function generatePdf(recipientData, config) {
	const templatePath = path.resolve("modules", "template.ejs");
	const imgDataUri = await imageToDataUri(
		path.resolve("assets", "header-left.jpg")
	);
	const html = await renderTemplate(templatePath, {
		...recipientData,
		...config,
		headerImg: imgDataUri
	});
	const outFile = buildFilePath(recipientData, config);
	await htmlToPdf(html, outFile);
}
