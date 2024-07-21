const fs = require("fs");

function writeNumbers() {
  let numbers = "";
  for (let i = 0; i < 100; i++) {
    numbers += Math.floor(Math.random(10) * 100) + "\n";
  }
  fs.writeFileSync("./files/sonlar.txt", numbers);
}

function readNumbers() {
  const data = fs.readFileSync("./files/sonlar.txt", "UTF-8");
  const numberArray = data.split("\n");
  return numberArray;
}

writeNumbers();
const numbers = readNumbers();
console.log(numbers);