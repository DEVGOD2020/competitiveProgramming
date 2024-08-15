/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {

    let PQ = new MinPriorityQueue();
    for(let A = 0; A<nums.length; A++){
        if( nums[A] === 0){
            PQ.enqueue( A );
        }
    }

    let moves = 0;
    while(!PQ.isEmpty()){
        if( nums[PQ.front()['element']] === 1){
            PQ.dequeue();
            continue;
        }
        let index = PQ.front()['element'];
        if(index+k > nums.length){return -1;}
        for(let A = index; A < index+k; A++){
            if(nums[A] === 0){
                nums[A] = 1;
            }else if(nums[A] === 1){
                nums[A] = 0;
                PQ.enqueue( A );
            }
        }
        moves++;
    }

    return moves;
};