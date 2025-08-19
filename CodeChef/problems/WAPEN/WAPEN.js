let [a,b] = require('fs').readFileSync(0,'utf8').split(" ").map((el)=>Number(el));
console.log( (b*10) + a);
