const input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).map( (el)=> Number(el) );

let part1 = input.reduce( (sum,el)=>sum+el, 0);

let part2 = function(){
  let freq = 0;
  let mySet = new Set();
  while(true){
    for(let num of input){
      freq += num;
      if(mySet.has(freq)){return freq;}
      mySet.add(freq);
    }
  }
}

console.log(part1);
console.log( part2() );
