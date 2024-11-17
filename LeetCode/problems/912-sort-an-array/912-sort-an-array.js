/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let PQ = new MinPriorityQueue();
    for(let num of nums){
        PQ.enqueue(num, num);
    }

    let I = 0
    while(!PQ.isEmpty()){
        nums[I] = PQ.dequeue()['element'];
        I++;
    }

    return nums;
};