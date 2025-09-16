import { generatePdf } from "./modules/generatePdf.js";
import parseCsv from "./modules/parseCsv.js";

const config = await parseCsv("./inputs/config.csv");
const recipients = await parseCsv("./inputs/recipients.csv");

console.log("Generating PDFs...");

const promises = recipients.map((recipient) =>
	generatePdf(recipient, config[0])
);

await Promise.all(promises);

console.log("Complete!");
