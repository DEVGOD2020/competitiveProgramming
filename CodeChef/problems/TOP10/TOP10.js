// your code goes here
let input = require('fs').readFileSync(0,'utf8').split("\n");

let T = Number(input[0]);

for(let I = 1; I<=T; I++){
    if( Number(input[I]) <= 10){
        console.log("YES");
    }else{
        console.log("NO");
    }
}
