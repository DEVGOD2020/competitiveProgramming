const input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).map( (el)=> Number(el) );

const T = input[0];

for(let t = 1; t<=T; t++){
  console.log( input[t]-1 );
}
