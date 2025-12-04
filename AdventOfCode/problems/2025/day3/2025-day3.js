let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

let part1 = function(){
  let score = 0;
  for(let line of input){
    let arr = line.split("").map( (el)=> Number(el) );
    const MAX = Math.max(...arr);
    const IDX = arr.indexOf(MAX);
    score += Math.max(
      MAX*10 + Math.max( ...arr.slice(IDX+1) ),
      Math.max( ...arr.slice(0,IDX) )*10 + MAX
    );
  }
  console.log(score);
}

let part2 = function(){
  let bro = function(line){
    let dp = Array.from( {length:100}, (el)=>new Array(12).fill(0) );
    let leftRight = function(I=0, A=12){
      if(I >= line.length && A == 0){ return 0; }
      if(I >= line.length || A<0){ return -Infinity; }
      
      if( dp[I][A] ){ return dp[I][A]; }
    
      dp[I][A] = Math.max(
        leftRight(I+1,A),
        leftRight(I+1,A-1) + (10 ** (A-1))*Number(line[I])
      );
      return dp[I][A];
    }
    return leftRight();
  }

  let score = 0;
  for(let line of input){
    const val = bro(line);
    score += val;
  }
  console.log(score);
}

part1();
part2();
