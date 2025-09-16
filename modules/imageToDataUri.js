import fs from "node:fs/promises";
import path from "node:path";

export default async function imageToDataUri(imagePath) {
	const buffer = await fs.readFile(imagePath);
	const mime =
		{
			".png": "image/png",
			".jpg": "image/jpeg",
			".jpeg": "image/jpeg",
			".svg": "image/svg+xml"
		}[path.extname(imagePath).toLowerCase()] || "application/octet-stream";

	return `data:${mime};base64,${buffer.toString("base64")}`;
}
