let [a,b,c] = require("fs").readFileSync(0,'utf8').split(" ").map((el)=>Number(el) );
console.log(a-(b+c));
