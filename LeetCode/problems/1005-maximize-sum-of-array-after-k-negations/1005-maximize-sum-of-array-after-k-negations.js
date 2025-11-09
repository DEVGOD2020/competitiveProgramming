/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    let minPQ = new MinPriorityQueue();
    for(let num of nums){minPQ.push(num);}
    let score = nums.reduce( (sum,el)=>sum+el);
    for(let I = 0; I<k; I++){
        let blah = minPQ.pop();
        score += -2*blah;
        minPQ.push(-blah);
    }
    return score;
};
