import fs from "fs";
import pdf from 'pdf-parse';
import { processData } from "./data_processer.js";

function reader (filePath) {

    let dataBuffer = fs.readFileSync(filePath);

    pdf(dataBuffer).then(function (data) {
        const content = data.text;
        return new Promise((resolve, reject) => {
            processData(content);
            resolve(content);
        }).then(() => {
            console.log('File readed');
        });
    });
}

export { reader };

