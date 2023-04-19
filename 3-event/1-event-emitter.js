const EventEmitter = require('events');
// creation of instance of EventEmitter is must (The "emitter" argument must be an instance of EventEmitter.)
const customEmitter = new EventEmitter()
// on - listen for an event 
// emit - emite an event

customEmitter.on('response',(name , age)=>{
    console.log(`data received name : ${name} , age : ${age}`)
})
customEmitter.on('response',()=>{
    console.log(`data was received`)
})

customEmitter.emit('response',"harshit",'21')

