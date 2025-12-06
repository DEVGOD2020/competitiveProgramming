let inputs = require('fs').readFileSync(0,'utf8').split(/\r?\n\s/);

let input1 = inputs[0].split(/\r?\n/).map( (el)=> el.split("-").map( (el)=>Number(el) ) );
let input2 = inputs[1].split(/\r?\n/).map( (el)=> Number(el) );

let events = [];

for(let [start,end] of input1){
  events.push([start,1]);
  events.push([end+1,-1]);
}

events.sort( (a,b)=> a[0] - b[0]);

let part1 = function(){
  let fresh = 0;
  for(let ID of input2){
    let overlap = 0;
    for(let I = 0; I<events.length; I++){
      let [time,type] = events[I];
      if(time > ID){break;}
      overlap += type;
    }
    if(overlap > 0){fresh++;}
  }
  console.log(fresh);
}

let part2 = function(){
  let score = 0;
  let overlap = 0;
  let prev = events[0][0];
  for(let I = 0; I<events.length; I++){
    let [time,type] = events[I];
    overlap += type;
    if(overlap == 0){
      score += time-prev;
      prev = events[I+1]?.[0]||0;
    }
  }
  console.log(score);
}

part1();
part2();
