let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
let T = Number(input[0]);
for(let t = 1; t<=T; t++){
    let arr = input[2*(t)].split(" ").map( (el)=> Number(el) );
    let myMap = new Map();
    for(let el of arr){
        myMap.set( el, (myMap.get(el)|0)+1 );
    }
    console.log( myMap.get(0) + 2*(myMap.get(-1)%2==1?1:0) );
}
