import fs from 'fs';
import { getName, getEmail, getPhone } from "./get_personal_data.js";
import { getAcademic } from "./get_academic.js";
import { getWork } from "./get_work.js";
import { getSkills } from "./get_skills.js";

function processData(content) {

    const lowerCaseContent = content.toLowerCase();
    const normalizeContent = lowerCaseContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const finalContent = normalizeContent.replace(/:/g, ' ');
    const tokens = finalContent.split(/[\s\r\n]/).filter(token => token.trim() !== '');

    let consultorObj = {};

    consultorObj = getName(consultorObj, tokens);
    consultorObj = getEmail(consultorObj, tokens);
    consultorObj = getPhone(consultorObj, tokens);
    consultorObj = getAcademic(consultorObj, tokens);
    consultorObj = getWork(consultorObj, tokens);
    consultorObj = getSkills(consultorObj, tokens);

    console.log(consultorObj);

    const pathToJson = '../project/json_files/demo.json';
    let consultorData = JSON.stringify(consultorObj, null, 2);
    fs.writeFile(pathToJson, consultorData, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Json created');
        }
    });
};

export { processData };