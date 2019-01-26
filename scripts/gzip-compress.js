const fs = require("fs");
const zlib = require("zlib");

const filePath = process.argv[2];

if (!fs.existsSync(filePath)) {
  console.log("Path: " + filePath + " does not exist");
  process.exit(-1);
}

let input;
try {
  input = fs.readFileSync(filePath);
} catch (err) {
  console.error("Cannot open file: " + filePath);
  process.exit(-1);
}

const gzip = zlib.gzipSync(input);

const compressionRation = (
  ((input.length - gzip.length) / input.length) *
  100
).toFixed(2);

try {
  fs.writeFileSync(filePath, gzip);
} catch (err) {
  console.error("Cannot write file: " + filePath);
  process.exit(-1);
}

const finalSizeInKb = (gzip.length / 1024).toFixed(2);
console.log(
  filePath + " - " + finalSizeInKb + "kB (" + compressionRation + "% reduction)"
);
