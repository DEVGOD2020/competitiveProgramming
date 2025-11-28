let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/)[1].split(" ").map( (el)=>Number(el));

console.log( input.map( (el,I)=> input.indexOf(I+1)+1 ).join(" ") );
