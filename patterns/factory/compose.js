const stampit = require('stampit');

const character = stampit()
    .props({
        name: 'anonymos',
        lifePoints: 100,
        x: 0,
        y: 0
});

const mover = stampit()
    .methods({
        move(xInc, yInc) {
            this.x += xInc;
            this.y += yInc;
            console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
        }
    });

const slasher = stampit()
    .methods({
        slash(direction) {
            console.log(`${this.name} slashed to the ${direction}`);
        }
    });

const shooter = stampit()
    .props({
        bullet: 6
    })
    .methods({
        shoot(direction) {
            if (this.bullet > 0) {
                --this.bullet;
                console.log(`${this.name} shoot to the ${direction}`);
            }
        }
    });

const runner = stampit.compose(character, mover);
const samurai = stampit.compose(character, mover, slasher);
const sniper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(character, mover, shooter);
const westernSamurai = stampit.compose(gunslinger, samurai);

const gojiro = westernSamurai();
gojiro.name = 'Gojiro';
gojiro.move(1, 0);
gojiro.slash('left');
gojiro.shoot('right');