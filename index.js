import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from "franc";
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
const code = franc(input);
try{
    if (code === "und") {
        console.log("This sample is too short. Please try again with a larger sample.".red)
    } else {
        const language = langs.where("3", code);
        console.log(`Our best guess is: ${language.name}`.green)
    }
    
}catch {
    console.log("Language not found. Try another sample".red)
}

