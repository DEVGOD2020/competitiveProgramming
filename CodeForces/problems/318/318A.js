let input = require('fs').readFileSync(0,'utf8').split(" ").map( (el)=> Number(el) );

const Z = Math.ceil(input[0]/2);
const A = input[1];

if( A <= Z){
  console.log ( 2*( A-1) + 1);
}else{
  console.log ( 2* (A-Z) );
}

