/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    function slideUwu(nums,k){
        let myMap = new Map();
        let mySet = new Set();

        let score = 0;
        let L = 0;
        let R = 0;
        while(R<nums.length){
            if(!myMap.has(nums[R])){
                myMap.set(nums[R], 0);
            }

            myMap.set(nums[R], myMap.get(nums[R])+1);
            if(myMap.get(nums[R]) >= 1){
                mySet.add(nums[R]);
            }

            while(mySet.size > k && L <= R){
                myMap.set(nums[L], myMap.get(nums[L])-1);
                if(myMap.get(nums[L]) <= 0){
                    mySet.delete(nums[L]);
                }
                L++;
            }

            score += (R-L)+1;
            //console.log(nums.slice(L,R),score);
            
            R++;
        }

        return score;
    }

    return slideUwu(nums,k)-slideUwu(nums,k-1);
};
