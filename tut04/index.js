// Event Emitter code for making log of all events emit.

const logEvents = require("./logEvents");

const eventEmitter = require('events');

class MyEmitter extends eventEmitter {};

// Initialize Object
const myEmitter = new MyEmitter();

// Add a listener for log event.

myEmitter.on('log', (msg) => {
    logEvents(msg);
});

setTimeout(() => {
    myEmitter.emit('log', 'Log Event Emitted');
}, 2000);