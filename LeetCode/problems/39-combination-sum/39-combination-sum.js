/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    let result = [];
    let helper = function(index=0){
        let resSum = _.sumBy(result);
        if(resSum > target){
            return 0;
        }else if(resSum === target){
            ans.push([...result]);
            return 1;
        }
        
        for(let I = index; I<candidates.length; I++){
            result.push(candidates[I]);
            helper(I);
            result.pop(candidates[I]);
        }
    }

    helper();
    return ans;
};