#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
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
  console.log('Copying files...')
  console.log('From: ', templateFolder)
  console.log('To: ', folderName)
  fs.cp(templateFolder, folderName, {recursive: true}, (err) => {
    console.log('Error: ', err)
  });
  console.log('Files copied')
}
