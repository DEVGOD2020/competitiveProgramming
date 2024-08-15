/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    
    function pillowPos(x){
        if(x+1 <= n){
            return x+1;
        }else{
            return n-(x%(n-1));
        }
    }

    return pillowPos(time%(n + (n-2)));
};


//1
//2
//3
//4
//3
//2

//1