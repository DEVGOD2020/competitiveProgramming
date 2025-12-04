const input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).map( (el)=> Number(el) );

let part1 = input.reduce( (sum,el)=>sum+Math.floor(el/3)-2, 0);

let blah = function(fuel){
  if(fuel <= 5){return 0;}
  return (Math.floor( fuel/3)-2) + blah(Math.floor(fuel/3)-2)
}

let part2 = input.reduce( (sum,el)=>sum+blah(el), 0);

console.log(part1);
console.log(part2);
