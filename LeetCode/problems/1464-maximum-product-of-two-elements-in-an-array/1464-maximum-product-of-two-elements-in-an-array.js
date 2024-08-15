/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const numQ = new MaxPriorityQueue();
    
    for(a of nums){
        numQ.enqueue(a);
    }

    return (numQ.dequeue()['element']-1)*(numQ.front()['element']-1)
};