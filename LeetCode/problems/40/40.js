/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = _.sortBy(candidates).filter( (el) => el<=target);
    let ans = [];
    let helper = function(target, A=0, arr=[]){
        if(target < 0){
            return 0;
        }
        if(target === 0){
            ans.push(arr);
            return 1;
        }

        for(let I = A; I < candidates.length; I++){
            if( I > A && candidates[I] == candidates[I-1]){
                continue;
            }
            let val = helper(target-candidates[I],I+1,[...arr, candidates[I]]);
        }

        return 0;
    }

    helper(target);
    return ans;
};