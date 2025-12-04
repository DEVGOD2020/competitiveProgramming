let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).map( (el)=>el.split(""));

let paperCount = function(row,col){
  let blah = 0;
  blah += +(input[row-1]?.[col-1] == "@");
  blah += +(input[row+1]?.[col+1] == "@");
  blah += +(input[row+1]?.[col-1] == "@");
  blah += +(input[row-1]?.[col+1] == "@");
  blah += +(input[row-1]?.[col] == "@");
  blah += +(input[row]?.[col-1] == "@");
  blah += +(input[row+1]?.[col] == "@");
  blah += +(input[row]?.[col+1] == "@");
  return blah;
}

let part1 = function(){
  let score = 0;
  for(let row = 0; row<input.length; row++){
    for(let col = 0; col<input.length; col++){
      if(input[row][col] == "@"){
        if( paperCount(row,col) < 4){score++;}
      }
    }
  }
  console.log(score);
}

let part2 = function(){
  let score = 0;
  let prevScore = -1;
  while(prevScore != score){
    prevScore = score;
    for(let row = 0; row<input.length; row++){
      for(let col = 0; col<input.length; col++){
        if(input[row][col] == "@"){
          if( paperCount(row,col) < 4){score++; input[row][col] = "X";}
        }
      }
    }
  }
  console.log(score);
}

part1();
part2();

