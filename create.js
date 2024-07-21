const fs = require('fs');
const filePath = './files/fresh.txt';

function createFile() {
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(filePath, 'I am fresh and young', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Fayl muvaffaqiyatli yozildi');
                }
            });
        } else {
            console.log('Error: FS operation failed');
        }
    });
}

createFile();
