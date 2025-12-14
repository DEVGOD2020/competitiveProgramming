let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).map( (el)=>Number(el) );

let part1 = function(){
  let mySet = new Set();
  for(let num of input){
    if( mySet.has( 2020-num ) ){
      return num * (2020-num);
    }
    mySet.add(num);
  }
  return -1;
}

let part2 = function(){
  for(let A = 0; A<input.length-1; A++){
    let mySet = new Set();
    let target = 2020 - input[A];
    for(let B = A+1; B<input.length; B++){
      let target2 = target - input[B];
      if( mySet.has(target2) ){
        return input[A]*input[B]*target2;
      }
      mySet.add(input[B]);
    }
  }
  return -1;
}

console.log( part1() );
console.log( part2() );
