let input = require('fs').readFileSync(0,'utf8').trim().split(/\r?\n/).map( (row)=>row.split(" "));

for(let row = 0; row<5; row++){
  for(let col = 0; col<5; col++){
    if(input[row][col] == '1'){
      console.log( Math.abs( Math.abs(2-row)+Math.abs(2-col)  ) );
      break;
    }
  }
}
