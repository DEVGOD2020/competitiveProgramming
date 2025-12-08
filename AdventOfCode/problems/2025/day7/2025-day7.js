let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).map( (el)=> el.split("") );

let start = input[0].indexOf('S');

let part1 = function(){
  let mySet = new Set();
  let dfs = function(row, col){
    if(col < 0 || col >= input[0].length){return 0;}
    if(row >= input.length){return 0;}
    
    const ID = row*142 + col;
    
    if( mySet.has(ID) ){return 0;}
    
    if(input[row][col] == "."){
      dfs(row+1, col);
    }
    
    else{
      dfs(row, col-1);
      dfs(row, col+1);
      mySet.add( ID );
    }
    
    return 0;
    
  }
  
  dfs(1, start);
  console.log( mySet.size );
}

let part2 = function(){
  let myMap = new Map();
  let dfs = function(row, col){
    if(col < 0 || col >= input[0].length){return 1;}
    if(row >= input.length){return 1;}
    
    const ID = row*142 + col;
    
    if(myMap.has( ID ) ){
      return myMap.get( ID );
    }
    
    let val = 0;
    if(input[row][col] == "." ){
      val = dfs(row+1, col);
    }else{
      val = dfs(row, col-1) + dfs(row, col+1);
    }
    
    myMap.set(ID,val);
    return myMap.get( ID);
  }
  
  console.log( dfs(1, start) );
}

part1();
part2();



