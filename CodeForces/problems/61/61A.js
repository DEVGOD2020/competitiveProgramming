let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
const N = input[0].length;

let ans = new Uint8Array(N).fill(0);

for(let I = 0; I<N; I++){
  ans[I] = +(input[0][I] != input[1][I]);
}

console.log( ans.join("") );


