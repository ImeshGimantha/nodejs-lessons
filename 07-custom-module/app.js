const sayHello = require('./greetings');
const math = require('./math');

const message = sayHello('Developers');
console.log(message);

console.log(math.add(5, 2));
console.log(math.subtract(5, 2));