/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    let memo = {};

    function UP(m,n){
       if(m==1){return 1;}
        if(n==1){return 1;}

        if( memo[""+m+"-"+n] === undefined ){
            memo[""+m+"-"+n] = uniquePaths(m-1,n)+uniquePaths(m,n-1);
        }
        return memo[""+m+"-"+n]; 
    }

    return UP(m,n);
};