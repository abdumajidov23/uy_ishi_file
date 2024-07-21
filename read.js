const fs = require("fs");

function readFile() {
  if (!fs.existsSync("./files/fileToRead.txt")) {
    throw new Error("FS operation failed");
  }
  const data = fs.readFileSync("./files/fileToRead.txt", "UTF-8");
  console.log(data);
}
try {
  readFile();
} catch (error) {
  console.error(error.message);
}