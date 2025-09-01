let input = require('fs').readFileSync(0,'utf8').split("\n");

let T = Number(input[0]);
for(let I = 1; I<=T; I++){
    let [X,Y] = input[I].split(" ").map((el)=>Number(el));
    console.log(X*Y);
}
