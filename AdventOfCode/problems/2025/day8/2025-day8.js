let _ = require('lodash');

let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/)
.map( (el)=> el.split(",").map( (col)=>Number(col) ) );


//Union Find
class UnionFind{
  constructor(){
    this.parent = _.range(0,1000);
    this.size = new Array(1000).fill(1);
    this.max = 0;
  }
  find(A){
    if (this.parent[A] === A) { return A;}
    return this.find(this.parent[A]);
  }
  union(A,B){
    let a = this.find(A);
    let b = this.find(B);
    if(a === b){return}
    if(this.size[a] < this.size[b]){
      this.parent[a] = b;
      this.size[b] += this.size[a];
      if(this.size[b] > this.max){ this.max = this.size[b]; }
    }
    else{
      this.parent[b] = a;
      this.size[a] += this.size[b];
      if(this.size[a] > this.max){ this.max = this.size[a]; }
    }
  }
}


//calc and sort by dis
const blah = [];
for(let A = 0; A<input.length-1; A++){
  for(let B = A+1; B<input.length; B++){
    let dis = Math.abs( 
      Math.sqrt( 
        ( input[A][0] - input[B][0])**2 +
        ( input[A][1] - input[B][1])**2 + 
        ( input[A][2] - input[B][2])**2
      )
    );
    
    blah.push( [dis, [A,B] ] );
  }
}
blah.sort( (a,b)=> a[0]-b[0] );


let part1 = function(){
  let myUF = new UnionFind();
  
  //Union together by shortest distance
  for(let A = 0; A<input.length; A++){
    let [dis, pair] = blah[A]; 
    myUF.union(pair[0], pair[1] );
  }
  const sizes = myUF.size.sort( (a,b)=>b-a);
  
  console.log( sizes[0]*sizes[1]*sizes[2] );
}


let part2 = function(){
  let myUF = new UnionFind();
  
  //Union together by shortest distance
  //Return whichever pair gets our UF max to puzzle input size
  for(let A = 0; A<blah.length; A++){
    let [dis, pair] = blah[A]; 
    myUF.union(pair[0], pair[1] );
    if(myUF.max == input.length){
      console.log( input[pair[0]][0] * input[pair[1]][0] );
      break;
    }
  }
}


part1();
part2();


