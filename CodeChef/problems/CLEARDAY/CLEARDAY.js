let [x,y] = require('fs').readFileSync(0,'utf8').split(" ").map((el)=>Number(el));
console.log(7-(x+y));
