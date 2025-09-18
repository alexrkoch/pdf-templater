import { generatePdf } from "./modules/generatePdf.js";
import parseCsv from "./modules/parseCsv.js";

const config = await parseCsv("./inputs/config.csv");
const recipients = await parseCsv("./inputs/recipients.csv");

console.log("Generating PDFs...");

for (let i = 0; i < recipients.length; i++) {
	await generatePdf(recipients[i], config[0]);
	console.log(`PDF for ${recipients[i].businessName} complete.`);
}

console.log("All complete!");
