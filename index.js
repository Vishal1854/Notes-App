const fs=require('fs')
const chalk=require('chalk')
const { argv } = require('process')

const addNotes= function(title,body){
     const notes=loadNotes()
     const duplicateNotes=notes.filter(function(note){
         return note.title === title
     })
     if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
         })
         saveNotes(notes)
         console.log(chalk.green.inverse('Note added Successfully'))
     }
     else{
           console.log(chalk.red.inverse('Note title already taken'))
     }
}
const saveNotes=function(notes){
      const writeData=JSON.stringify(notes)
      fs.writeFileSync('1-json.json',writeData) 
}

const loadNotes=function(){
    try{
        const readData=fs.readFileSync('1-json.json')
        const dataBuffer=readData.toString();
        return JSON.parse(dataBuffer)
    }
    catch (e){
        return []
    }
}

const removeNotes=function(title){
    const notes=loadNotes()
    const notesToKeep=notes.filter(function(note){
        return note.title!==title
    })
    if(notesToKeep.length<notes.length){
        console.log(chalk.red.inverse('Note Removed Successfully!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.green.inverse('Note you are trying to remove not present!'))
    }
}

const listNotes=function(){
    console.log('Your Notes')
    const notes=loadNotes();
   return (notes.forEach(note => {
        console.log(note.title+' : '+note.body)
    }))
}
module.exports={addNotes: addNotes,removeNotes:removeNotes,listNotes:listNotes} 
