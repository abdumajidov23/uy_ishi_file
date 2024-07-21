const fs = require("fs");

function deleteFile(){
  if (!fs.existsSync("./files/fileToRead.txt")) {
    throw new Error("FS operation failed");
  }
  fs.unlinkSync("./files/fileToRead.txt");
}
try {
  deleteFile();
  console.log("File ochirildi");
}catch(error){
  console.error(error.message);
}