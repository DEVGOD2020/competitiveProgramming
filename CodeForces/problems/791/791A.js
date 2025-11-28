const input = require('fs').readFileSync(0,'utf8').split(" ");

const L = Number(input[0]);
const B = Number(input[1]);

console.log( 
  Math.floor( 
    Math.log(B/L) / Math.log(3/2) 
    )+1 
);
