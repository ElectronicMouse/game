import * as fs from "fs";
import * as path from "path";
const itemsPath = path.join(__dirname, 'items');
const itemsFiles = fs.readdirSync(itemsPath).filter(file => file.endsWith('.js'));

const materialsPath = path.join(__dirname, 'items');
const materialsFiles = fs.readdirSync(materialsPath).filter(file => file.endsWith('.js'));

console.log(materialsFiles + itemsFiles);