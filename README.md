# Art and Gift Mart PDF Generator

The purpose of this program is to generate PDFs from a template and with given
CSV inputs for the AUMC Art and Gift Mart. With minimal work, it could certainly
be generalized to generate PDFs from different templates, but it isn't in the
exact shape to achieve that as-is.

## How to Use

1. Clone the project.
2. `npm i`
3. Create two directories at the top level: `inputs` and `output`
4. The `inputs` directory expects 2 CSV files:
   -  `config.csv`
      -  Headers:
         "year,nthAnnual,hasNotDonatedText,hasDonatedText,responseDeadline,firstBidsDate,marketDate,closingText,footerContact"
   -  `recipients.csv`
      -  Headers: "businessName,address,dearName,donatedLastYear"
   -  For both, additional headers are benign.
5. There is also a gitignored directory `assets` which holds an image
   `header-left.jpg`. This could be replaced with any image, but this file name
   is hard coded in `generatePdf.js`.
6. Run the program with `node index.js`

## Potential Improvements

-  Sanitize fields for leading or trailing whitespace or line returns.
-  Generalize to produce a template based on some config, so other templates
   could be easily swapped in (wouldnt be a ton of work).
