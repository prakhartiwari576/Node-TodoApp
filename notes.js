const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
try{
  const dataBuffer = fs.readFileSync('notes.json')
  return JSON.parse(dataBuffer)
}catch(e){
  return []
 }
}

const saveNotes = (notes)=>{
  fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const addNote = (title,body)=>{
   const notes = loadNotes()
   const duplicateNote = notes.find((note)=>note.title === title)

 if(!duplicateNote){
   notes.push({
    title:title,
    body:body
   })
   saveNotes(notes);
   console.log(chalk.green('New note added'))
 }else{
   console.log(chalk.red('Note title taken'))
 }
}

const removeNote = (title)=>{
  const notes = loadNotes()
  const notesToKeep = notes.filter((note)=> note.title!==title);

 if(notes.length > notesToKeep.length){
   console.log(chalk.green('Note removed successfully!'))
 }else{
   console.log(chalk.red('No note was removed'))
 }
  saveNotes(notesToKeep)
}

const getNotes = ()=>{
  const notes = loadNotes();
  notes.forEach((note)=>{
    console.log(note.title);
  })
}

const readNote = (title)=>{
  const notes = loadNotes();
  const note = notes.find((note)=>note.title === title)

  if(note){
    console.log(chalk.green('Note found'));
    console.log(note)
  }else{
    console.log(chalk.red('Note not found'));
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  readNote
}
