let start = 2n**1000n;
let score = 0n;
while(start > 0n){
    score += start%10n;
    start = start/10n;
}

console.log(score);