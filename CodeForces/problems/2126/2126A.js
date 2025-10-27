let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

let T = Number(input[0]);
for(let t = 1; t<=T; t++){
    console.log( Math.min( ...input[t].split("").map( (el)=> Number(el) ) ) );
}
