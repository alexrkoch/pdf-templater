import { createReadStream } from "node:fs";
import { parse } from "csv";

export default function parseCsv(inputFilePath) {
	return new Promise((resolve, reject) => {
		const readable = createReadStream(inputFilePath);
		const rows = [];

		readable
			.pipe(
				parse({
					columns: true,
					skip_empty_lines: true,
					trim: true
				})
			)
			.on("data", (row) => {
				rows.push(row);
			})
			.on("end", () => {
				console.log(`CSV at ${inputFilePath} successfully parsed`);
				resolve(rows);
			})
			.on("error", (err) => {
				console.error("Error while reading CSV:", err);
				reject(err);
			});
	});
}
