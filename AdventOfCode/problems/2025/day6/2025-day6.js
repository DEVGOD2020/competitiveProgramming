let _ = require('lodash');

const data = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

let input1 = data.map( (el)=> el.trim().split(/\s+/) );
let input2 = data.map( (el)=> el.split(/\s?/) )

let part1 = _.zip(...input1)
  .map( (el)=> el.join(el.pop()) )
  .reduce( (sum,el)=>sum+eval(el), 0);

let part2 = function(){
  let input2Full = _.zip(...input2)
  .map( (el)=> [ Number(el.slice(0,el.length-1).join("")), el.at(-1) ] );

  let score = 0;
  let temp = 0;
  let currType = '+';
  for(let [val, type] of input2Full){
    if(type !== ''){score += temp; temp = val; currType = type;}
    else if(currType === "+"){temp += val;}
    else{temp *= val;}
  }
  score += temp;
  console.log(score);
}

console.log(part1);
part2();

