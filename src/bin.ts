#!/usr/bin/env node
import fs from 'node:fs'
console.log('hola mundo')
console.log(process.argv)
console.log(import.meta.dirname);

const folderName = import.meta.dirname+'/test';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

// copy template files from start folder to new folder
const templateFolder = import.meta.dirname+'/../start';
const files = fs.readdirSync(templateFolder);
files.forEach(file => {
  fs.copyFileSync(`${templateFolder}/${file}`, `${folderName}/${file}`);
});


// ask for name of project
console.log('What is the name of your project?')
// read input
process.stdin.on('data', (data) => {
  const name = data.toString().trim()
  console.log(name)
  process.exit()
})

