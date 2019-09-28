const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
  command:'add',
  describe:'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOptions:true,
      type:'string'
    },
    body:{
      describe:'Body of the title',
      demandOptions:true,
      type:'string'
    }
  },
  handler:function(argv){
    notes.addNote(argv.title,argv.body)
  }
})

//create remove command
yargs.command({
  command:'remove',
  describe:'Remove a note',
  builder:{
    title:{
      describe:'Note Title',
      demandOptions:true,
      type:'string'
    }
  },
  handler:function(argv){
    notes.removeNote(argv.title)
  }
})

//create a list command
yargs.command({
  command:'list',
  describe:'lists all commands',
  handler:function(){
    notes.getNotes();
  }
})

//read a note
yargs.command({
  command:'read',
  describe:'reads one note',
  builder:{
    title:{
      demandOptions:true,
      type:'string',
      describe:'Note title'
    }
  },
  handler:function(argv){
    notes.readNote(argv.title);
  }
})

yargs.parse();
// console.log(yargs.argv);
