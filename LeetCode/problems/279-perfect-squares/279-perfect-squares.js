/**
 * @param {number} n
 * @return {number}
 */


var numSquares = function(n) {
    let memo = {1:1,2:2,3:3};
    function helper(n){
        if(n < 0){return Infinity;}
        if(n === 0){return 0;}
        if(memo[n] !== undefined){return memo[n];}
        let min = Infinity;
        for(let I=1; I*I<= n; I++){
            let val = helper(n-(I**2));
            min = Math.min(min,val+1);
        }

        memo[n] = min;

        return memo[n];
    }

    return helper(n);
};