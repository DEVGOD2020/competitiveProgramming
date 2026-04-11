/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let A = new Map();
    let B = new Map();
    let C = new Map();

    let ans = 1e6;
    for(let I = 0; I<nums.length; I++){
        const num = nums[I];
        if(!A.has(num)){
            A.set(num,I);
            continue;
        }
        if(!B.has(num)){
            B.set(num,I);
            continue;
        }
        if(!C.has(num)){
            C.set(num,I);
            ans = Math.min(ans, 2*(I-A.get(num)));
            continue;
        }
        A.set(num,B.get(num));
        B.set(num,C.get(num));
        C.set(num,I);
        ans = Math.min(ans, 2*(I-A.get(num)));
    }
    return ans==1e6?-1:ans;
};
