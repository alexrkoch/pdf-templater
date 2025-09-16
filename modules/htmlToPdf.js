import puppeteer from "puppeteer";

export default async function htmlToPdf(html, outputPath) {
	const browser = await puppeteer.launch({
		headless: true,
		args: ["--no-sandbox", "--disable-setuid-sandbox"]
	});
	const page = await browser.newPage();

	await page.setContent(html, { waitUntil: "networkidle0" });

	await page.pdf({
		path: outputPath,
		format: "A4",
		printBackground: true,
		margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" }
	});

	await browser.close();
}
