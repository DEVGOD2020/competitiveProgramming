let N = require('fs').readFileSync(0,'utf8');

let ans = "";
let blah = ["I hate", "I love"];

for(let I = 0; I<N; I++){
  ans += blah[I%2];
  if(I!=N-1){ans += " that ";}
}
ans += " it";

console.log(ans);
