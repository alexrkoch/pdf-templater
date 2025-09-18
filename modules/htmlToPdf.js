import puppeteer from "puppeteer";

export default async function htmlToPdf(html, outputPath) {
	const browser = await puppeteer.launch({
		timeout: 120_000,
		headless: true,
		args: ["--no-sandbox", "--disable-setuid-sandbox"]
	});
	const page = await browser.newPage();

	await page.setContent(html, { waitUntil: "networkidle0" });

	await page.pdf({
		path: outputPath,
		format: "A4",
		printBackground: true
	});

	await browser.close();
}
