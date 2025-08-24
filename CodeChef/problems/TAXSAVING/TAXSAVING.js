let input = require('fs').readFileSync(0,'utf8').split("\n");

const limit = Number(input[0]);
for(let T = 1; T<=limit; T++){
    const [a,b] = input[T].split(" ").map(Number);
    console.log(a-b);
}
