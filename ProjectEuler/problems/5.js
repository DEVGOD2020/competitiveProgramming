function gcd(a,b){
    return b==0 ? a : gcd(b,a%b);
}

function lcm(a,b){
    return (a*b) / gcd(a,b);
}

let score = 1;
for(let I = 2; I<=20; I++){
    score = lcm(score, I);
}

console.log(score);