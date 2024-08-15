/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function(nums, freq) {
    const myMap = new Map();
    const maxHeap = new MaxPriorityQueue();
    let ans = new Array(nums.length);

    for(let num = 0; num < nums.length; num++){
        if(!myMap.has(nums[num])){
            myMap.set(nums[num], freq[num]);
        }else{
            myMap.set(nums[num],myMap.get(nums[num])+freq[num]);
        }

        maxHeap.enqueue( nums[num], myMap.get(nums[num]) );

        while(maxHeap.front()["priority"] !== myMap.get(maxHeap.front()["element"])){
            maxHeap.dequeue();
        }
        ans[num] = maxHeap.front()['priority'];
    }
    
    return ans;
};