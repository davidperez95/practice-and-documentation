import { Router } from "express";
import { uploadFile } from '../get_file/get_file_controller.js';
import { reader } from "../read_file/reader.js";

export const consultorRouter = Router();

let jsObj = [];

consultorRouter.get('/', function(request, response) {
    if (response.statusCode === 200) {
        response.send(jsObj);
        console.log('OK');
    } else {
        response.send('BAD REQUEST');
        console.log('BAD REQUEST');
    }
});

consultorRouter.post('/', function(request, response) {
    jsObj.push(request.body);
});


consultorRouter.post('/upload', uploadFile.single('myFile'), async function(request, response) {
    //console.log(request.file);
    reader(`./uploads/${request.file.originalname}`);
    console.log('File uploaded');
});



