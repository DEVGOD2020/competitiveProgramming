let mySet = new Set();

for(let I = 1; I<1000; I++){
    if(I%3 == 0 || I%5 == 0){
        mySet.add(I);
    }
}

let score = [...mySet].reduce( (sum,el)=>sum+el, 0);

console.log(score);
