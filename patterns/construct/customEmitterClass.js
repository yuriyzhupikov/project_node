const EventEmitter = require('events');

module.exports = class CustomEmitterClass extends EventEmitter {
    constructor(executer) {
        super();
        const emit = this.emit.bind(this);
        this.emit = undefined;
        executer(emit);
    }
}