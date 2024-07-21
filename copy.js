const fs = require("fs");
const path = require("path");

function copyDir(files, files_copy) {
  if (!fs.existsSync(files) || fs.existsSync(files_copy)) {
    throw new Error("FS operation failed");
  }
  fs.mkdirSync(files_copy);
  fs.readdirSync(files).forEach((item) => {
    const filesPath = path.join(files, item);
    const files_copyPath = path.join(files_copy, item);
    if (fs.statSync(filesPath).isDirectory()) {
      copyDir(filesPath, files_copyPath);
    } else {
      fs.copyFileSync(filesPath, files_copyPath);
    }
  });
}
try {
  copyDir("files", "files_copy");
  console.log("Files copied successfully");
} catch (err) {
  console.error(err.message);
}