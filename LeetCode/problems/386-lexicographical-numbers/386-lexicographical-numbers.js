/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let arr = [];

    let helper = function(I=1){
        //No Inf Looping up in this butthole if arr len is n :)
        if(arr.length==n){return 0;}
        
        arr.push(I);

        //Jump 10 times
        if(I*10 <= n){helper(10*I);}

        //Garfield hates mondays
        //and numbers that end with 9, and that are larger then n
        while(I%10 == 9 || I>=n){
            I = Math.floor(I/10);
        }

        //Jump one ahead
        helper(I+1);
    }

    helper();
    return arr;
};