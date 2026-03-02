let data = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
 
let N = Number(data[0]);
let mySet = new Set( data[1].split(" ").slice(1).concat( data[2].split(" ").slice(1)) );
mySet.delete("0");
 
if(N == mySet.size){
  console.log("I become the guy.");
}else{
  console.log("Oh, my keyboard!");
}
