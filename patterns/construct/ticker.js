const CustomEmitter = require('./customEmitter');
//const CustomEmitterClass = require('./customEmitterClass');

const ticker = new CustomEmitter(emit => {
    let tickCount = 0;
    setInterval(() => emit('tick', tickCount++), 1000);
});

module.exports = ticker;