const path = require('path');

console.log(path.resolve(__dirname, 'templates', '/index.html'));

console.log(path.join(__dirname, 'templates', 'index.html'));

console.log(path.parse(__filename).ext);

console.log(path.pathname(__dirname));
console.log(path.dirname(__dirname));
console.log(path.extname(__dirname));

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
