const EventEmitter = require("events");

const event = new EventEmitter();

event.on('myName',(port,name)=>{
    console.log(`running on ${port} port,my name is ${name}`);
})

event.emit('myName',200,"saksham");