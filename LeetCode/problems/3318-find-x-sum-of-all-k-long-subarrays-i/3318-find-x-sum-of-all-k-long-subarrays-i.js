/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    let freqMap = new Map();
    let maxPQ = new MaxPriorityQueue( 
        (el)=> el[1]*10000 + el[0] 
    );
    for(let A = 0; A<k; A++){
        freqMap.set( nums[A], (freqMap.get(nums[A])|0)+1 );
        maxPQ.enqueue( [ nums[A], freqMap.get(nums[A]) ] );
    }

    let ans = [];
    let L = 0;
    let R = k;
    while(R<=nums.length){
        let score = 0;
        let temp = [];
        for(let I = 0; I<x; I+=0){
            if(maxPQ.isEmpty() ){break;}
            let [A,B] = maxPQ.pop();
            if( freqMap.get(A) === B){
                score += A*B;
                temp.push(A);
                freqMap.set( A, -freqMap.get(A));
                I++;
            }
        }
        ans.push(score);
        for(let T of temp){
            freqMap.set( T, -freqMap.get(T));
            maxPQ.push( [T,freqMap.get(T)] );
        }

        freqMap.set( nums[L], (freqMap.get(nums[L])|0)-1 );
        freqMap.set( nums[R], (freqMap.get(nums[R])|0)+1 );
        maxPQ.push( [nums[L], freqMap.get(nums[L])] );
        maxPQ.push( [nums[R], freqMap.get(nums[R])] );

        L++;
        R++;
    }

    return ans;
};
