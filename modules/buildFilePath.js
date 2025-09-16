import path from "node:path";

export default function buildFilePath(recipientData, config) {
	const safeRecipient = recipientData.recipient
		.replace(/[\\/:*?"<>|]/g, "-")
		.replace(/\s+/g, "-");

	const fileName = `${config.year}_${safeRecipient}_zoe-gift-cards.pdf`;

	return path.join("./output", fileName);
}
