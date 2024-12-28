#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
console.log('hola mundo')
console.log('Procces Arguments: ', process.argv)

// ask for name of project
console.log('What is the name of your project?')
// read input
process.stdin.on('data', (data) => {
  const name = data.toString().trim()
  copyFiles(name)
  console.log('Project created successfully')
  process.exit()
})

const copyFiles = (projectName:string) => {
  const folderName = path.resolve('.')+'/'+projectName;

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
}