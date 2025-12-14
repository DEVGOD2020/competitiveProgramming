function isPalNum(n){
    let rev = 0;
    let temp = n;
    while(temp > 0){
        rev = rev*10;
        rev += temp %10;
        temp  = Math.floor(temp /10);
    }

    return n == rev;
}

function largestPalNum(){
    let max = 0;
    for(let X = 999; X>100; X--){
        for(let Y = 999; Y>100; Y--){
            if( isPalNum(X*Y)){
                max = Math.max(max, X*Y);
            }
        }
    }
    return max;
}

console.log( largestPalNum() );