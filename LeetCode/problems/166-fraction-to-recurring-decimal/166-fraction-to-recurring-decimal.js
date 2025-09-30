/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0){return "0";}
    let seen = new Map();

    let ans = "";
    const start = Math.abs( Math.trunc(numerator/denominator) );
    if( (numerator<0) !== (denominator<0) ){ans += "-";}
    ans += start;

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    if( numerator%denominator ){ans += ".";}

    let N = numerator%denominator;
    seen.set(N, ans.length);
    while(N !== 0){
        N *= 10;
        ans += Math.floor(N/denominator);
        N = N%denominator;
        if(N == 0){
            return ans;
        }
        if(seen.has(N)){
            let I = seen.get(N);
            return ans.slice(0,I)+"("+ans.slice(I,ans.length)+")";
        }
        seen.set(N, ans.length);
    }
    return ans;
};
