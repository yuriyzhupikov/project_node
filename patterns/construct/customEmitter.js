//Генератор событий, доступный только для чтения

const EventEmitter = require('events');

function CustomEmitter (executor) {
    const emit = this.emit.bind(this);
    this.emit = undefined;
    executor(emit);
}
CustomEmitter.prototype = EventEmitter.prototype;

module.exports = CustomEmitter;