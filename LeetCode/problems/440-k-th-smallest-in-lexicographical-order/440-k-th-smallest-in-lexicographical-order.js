/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {

    let steps = function(prefix1,prefix2){
        let mySteps = 0;
        while(prefix1 <= n){
            mySteps += Math.min(n+1, prefix2)-prefix1;
            prefix1 *= 10;
            prefix2 *= 10;
        }
        return mySteps;
    }

    let curr=1;
    k += -1;
    while(k>0){
        let step = steps(curr,curr+1);
        if(step <= k){
            curr += 1;
            k -= step;
        }else{
            curr *= 10;
            k += -1;
        }
    }

    return curr;
};