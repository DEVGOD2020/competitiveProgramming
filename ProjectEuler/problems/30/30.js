let check = function(n){
    return n == n.toString().split("").map( (el)=>Number(el)).reduce( (sum,el)=>sum+(el**5),0);
}

//6*(9**5) = 354294, the maximal a 6 digit number with digit ** 5 sumed could be
let score = 0;
for(let I = 2; I<6*(9**5); I++){
    if(check(I)){
        console.log(I);
        score += I;
    }
}

console.log("score: "+score);