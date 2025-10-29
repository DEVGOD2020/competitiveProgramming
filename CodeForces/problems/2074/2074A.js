let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
let T = Number(input[0]);
for(let t = 1; t<=T; t++){
    let mySet = new Set(input[t].split(" "));
    if( mySet.size === 1 ){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
