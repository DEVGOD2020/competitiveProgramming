let input = require('fs').readFileSync(0,'utf8').split(" ");

const n = Number(input[0]);
const m = Number(input[1]);
const a = Number(input[2]);

console.log( Math.ceil(n/a)*Math.ceil(m/a) );

