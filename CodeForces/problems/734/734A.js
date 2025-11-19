const input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

let data = {A:0,D:0};

for(let chr of input[1]){
  data[chr]++;
}

if(data.A > data.D){
  console.log("Anton");
}

if(data.A < data.D){
  console.log("Danik");
}

if(data.A == data.D){
  console.log("Friendship");
}
