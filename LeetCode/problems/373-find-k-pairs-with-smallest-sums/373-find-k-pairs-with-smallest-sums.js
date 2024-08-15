/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let ans = [];

    const numbersQueue1 = new MinPriorityQueue();
    const numbersQueue2 = new MinPriorityQueue();
    for(a of nums1){
        numbersQueue1.enqueue(a);
    }
    for(a of nums2){
        numbersQueue2.enqueue(a);
    }

    let I = 0;
    let val = 0;
    while(I<k){
        if(numbersQueue1.front()['element'] <= numbersQueue2.front()['element']){
            ans.push( [ numbersQueue1.front()['element'], numbersQueue2.dequeue()['element'] ] );
        }else{
            ans.push( [ numbersQueue2.dequeue()['element'] , numbersQueue1.front()['element'] ] );
        }

        I++;
    }

    console.log(ans);

    return [[1,2],[3,4]];
};