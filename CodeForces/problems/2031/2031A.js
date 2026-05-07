const input = require('fs').readFileSync(0,'utf8').split("\n");
const N = Number(input[0]);

for(let T = 0; T<N; T++){
  let arr = input[T*2 + 2].split(" ").map( (el)=> Number(el) );
  let myMap = new Map();
  let max = 0;
  for(let el of arr){
    myMap.set(el, (myMap.get(el)??0)+1);
    max = Math.max(max, myMap.get(el));
  }
  console.log(arr.length-max);
}
