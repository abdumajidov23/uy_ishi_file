const fs = require("fs");

function renameFile() {
  if (
    !fs.existsSync("./files/wrongFilename.txt") ||
    fs.existsSync("./files/properFilename.md")
  ) {
    throw new Error("FS operation failed");
  }
  fs.renameSync("./files/wrongFilename.txt", "./files/properFilename.md");
}

try {
    renameFile();
  console.log("File renamed successfully!");
} catch (error) {
  console.error(error.message);
}