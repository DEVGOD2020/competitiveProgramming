/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {

    const firstHalf = n.slice(0,Math.ceil(n.length/2));

    const firstHalfPlus = String(BigInt(firstHalf)+1n);
    const firstHalfMinus = String(BigInt(firstHalf)-1n);

    const length = BigInt(n.length);
    const ans1 = BigInt(firstHalf+_.reverse(firstHalf.split("")).slice(n.length%2).join(""));
    const ans2 = BigInt(firstHalfPlus+_.reverse(firstHalfPlus.split("")).slice(n.length%2).join(""));
    const ans3 = BigInt(firstHalfMinus+_.reverse(firstHalfMinus.split("")).slice(n.length%2).join(""));
    const ans4 = 10n**(length) + 1n;
    const ans5 = 10n**(length-1n) - 1n;

    const blah = [ans1,ans2,ans3,ans4,ans5];

    let distance = BigInt(10n**18n+69n);
    let ans = 0n;
    for(let b of blah){
        if(b === BigInt(n) ){continue;}
        const test = b-BigInt(n)<0 ? -(b-BigInt(n)) : (b-BigInt(n));
        if( test < distance ){
            distance = test;
            ans = b;
        }else if( test == distance  ){
            ans = ans<b?ans:b;
        }
    }
    
    return ""+ans;
};