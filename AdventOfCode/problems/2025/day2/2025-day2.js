let input = require('fs').readFileSync(0,'utf8').split(',');
input = input.map( (el)=> el.split("-").map( (el)=> Number(el) ) );

let part1 = function(){
  let score = 0;
  for(let [x,y] of input){
    for(let Z = x; Z<=y; Z++){
      let s = (""+Z);
      let firstHalf = s.slice( 0,Math.floor(s.length/2) );
      let secondHalf = s.slice( Math.floor(s.length/2) );
      if( firstHalf == secondHalf ){
        score += Z;
      }
    }
  }
  console.log(score);
}

let part2 = function(){
  //Leetcode 459
  let repeatedSubstringPattern = function(Z) {
    let s = ""+Z;
    return ((s + s).slice(1, -1)).includes(s);
  };

  let score = 0;
  for(let [x,y] of input){
    for(let Z = x; Z<=y; Z++){
      if( repeatedSubstringPattern(Z) ){
        score += Z;
      }
    }
  }
  console.log(score);
}

part1();
part2();
