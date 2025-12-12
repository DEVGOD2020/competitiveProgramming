let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).slice(30)

let part1 = function(){
  let score = 0;
  for(let line of input){
    let data = line.split(": ");
    let area = eval(data[0].replace("x","*"));
    let shapes = data[1].split(" ").map( (el)=>Number(el)).reduce( (sum,el)=> sum+el);
    if(area >= 9*shapes){score++;}
  }
  
  console.log(score);
}

part1();
