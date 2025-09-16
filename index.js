import parseCsv from "./modules/parseCsv.js";

const config = await parseCsv("./inputs/config.csv");
// console.log(config);
const recipients = await parseCsv("./inputs/recipients.csv");
// console.log(recipients);
