const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let S = input[0];
let T = input[1];

for(let I = 0; I<S.length; I++){
    S = S[S.length-1] + S.substring(0,S.length-1);
    if(S===T){
        console.log("Yes");
        return 0;
    }
}

console.log("No");
