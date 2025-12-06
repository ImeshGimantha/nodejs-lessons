const eventEmitter = require('events');

const emitter = new eventEmitter();

// register a event listener
emitter.on('test', () => {
    console.log('An event has occurred');
});

emitter.on('error', err => {
    console.log('Error event: ', err.message);
});

try {
    emitter.emit('test');
    emitter.removeListener('test');
    emitter.emit('test');
} catch (error) {
    emitter.emit('error', error);
}