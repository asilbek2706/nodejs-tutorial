const userData = require('./user', __dirname);
const carData = require('./car', __filename);

console.log(userData.user);
userData.userLogger();

console.log(carData.car);
carData.carLogger();

// console.log('Hello, World!', __dirname);
// console.log('Hello, World!', __filename);
