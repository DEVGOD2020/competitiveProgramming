let input = Number(require('fs').readFileSync(0,'utf8').trim());


let arr = [4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777];
let mySet = new Set();

for(let el of arr){
  el = Number(el);
  let I = el;
  while(I<=1000){
    mySet.add(I);
    I += el;
  }
}

if(mySet.has(input) ){
  console.log("YES");
}else{
  console.log("NO");
}


