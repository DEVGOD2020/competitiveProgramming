let input = require('fs').readFileSync(0,'utf8').trim().split(/\r?\n/);

let data = input[1].split("");
const T = Number(input[0].split(" ")[1]);

for(let I = 0; I<T; I++){
  data = data.map( 
    (el,I,arr)=> {
      if(arr[I+1] !== undefined && arr[I] == "B" && arr[I+1] == "G"){ 
        return arr[I] == "G" ? "B" : "G";
      }
      if(arr[I-1] !== undefined && arr[I] == "G" && arr[I-1] == "B"){ 
        return arr[I] == "G" ? "B" : "G";
      }
      return el;
    }
  );
}

console.log(
  data.join("")
)
