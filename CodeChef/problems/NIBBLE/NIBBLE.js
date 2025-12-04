// your code goes here
let input = require('fs').readFileSync(0,'utf8')
.split(/\r?\n/)
.map( (el)=>Number(el));

let T = input[0]; // Read the number of test cases
for(let I = 1; I <= T; I++){
    let N = input[I];
    console.log(N % 4 === 0 ? "Good" : "Not Good");
}
