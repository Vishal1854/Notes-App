const yargs=require('yargs')
const notes=require('./index.js')

yargs.command({
  command:'add',
  describe:'add note',
  builder:{
    title:{
      describe:'note title',
      demandOption:true,
      type:'String'
    },
    body:{
      describe:'note body',
      demandOption:true,
      type:'String'
    }
  },
  handler:function(argv){
    notes.addNotes(argv.title, argv.body)
  }
})

yargs.command({
  command:'remove',
  describe:'remove notes',
  builder:{
    title:{
           describe:'node title',
           demandOption:true,
           type:'String'
    }
    },
    handler:function(argv){
      notes.removeNotes(argv.title)
}
})

yargs.command({
  command:'list',
  describe:'list notes',
    handler:function(){
      notes.listNotes()
}
})


yargs.parse()