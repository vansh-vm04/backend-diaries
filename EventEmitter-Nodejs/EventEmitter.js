//Import event emitter class from events module
const EventEmitter = require('events');

//Create emitter object
const emitter = new EventEmitter();

//Listen event with the emitted args
emitter.on("greet",(args)=>{
    console.log(`Hello ${args.name}, your role is ${args.role}`);
})

//Sample data
const data = {name:"Vansh",role:"SDE"};

//Emit event with args that can be used by listener
emitter.emit("greet",data)

