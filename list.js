const fs = require('fs');
const dirPath = './files';

function listFiles() {
    fs.access(dirPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('Error: FS operation failed - directory does not exist');
        } else {
            fs.readdir(dirPath, (err, files) => {
                if (err) {
                    console.log('Error: FS operation failed - cannot read directory');
                } else {
                    console.log('Fayllar royxati:', files);
                }
            });
        }
    });
}

listFiles();