//Генератор событий, доступный только для чтения

const ticker = require('./ticker');

ticker.on('tick', tickCount => console.log(tickCount, 'TICK'));