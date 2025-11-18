let input = require('fs').readFileSync(0,'utf8').split(" ").map((el)=>Number(el));
 
console.log( 
  Math.floor( 
    Math.log(input[1]/input[0]) / Math.log(3/2) 
    )+1 
);
