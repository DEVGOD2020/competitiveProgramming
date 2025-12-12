let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

let graph = {};

for(let line of input){
  let [from,to] = line.split(":");
  to = to.trim().split(" ");
  
  if(graph[from] === undefined){
    graph[from] = [];
  }
  graph[from].push(...to);
}

let part1 = function(){
  let stack = [...graph["you"]];
  let score = 0;
  while(stack.length){
    let node = stack.pop();
    if(node == "out"){score++; continue;}
    stack.push( ...graph[node] );
  }
  console.log(score);
}

let part2 = function(){
  let helper = function(node, target){
    let scoreMap = new Map();
    let dfs = function(node, flag1=false, flag2=false){
      if( node == target && flag1 && flag2 ){ return 1; }
      if( node=="out" ){return 0;}
      
      const KEY = `${node},${flag1},${flag2}`;
      if(scoreMap.has(KEY)){
        return scoreMap.get(KEY);
      }
      
      if(node == "fft"){flag1 = true;}
      if(node == "dac"){flag2 = true;}
      
      let blah = 0;
      for(let child of graph[node]){
        blah += dfs(""+child,flag1,flag2);
      }
      
      scoreMap.set(KEY, blah);
      
      return blah;
    }
    return dfs(node);
  }
    
  console.log( helper("svr","out") );
}

part1();
part2();

