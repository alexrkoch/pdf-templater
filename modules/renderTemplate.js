import fs from "node:fs/promises";
import ejs from "ejs";

export default async function renderTemplate(templatePath, data) {
	const template = await fs.readFile(templatePath, "utf8");
	return ejs.render(template, data, { async: true });
}
