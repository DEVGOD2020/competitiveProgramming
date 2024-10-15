/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let myMap = new Map();
    for(let I in nums){
        for(let n of nums[I]){
            if(!myMap.has(n)){
                myMap.set(n,new Set())
            }
            myMap.get(n).add(I);
        }
    }

    let newArr = _.sortBy(_.flatten(nums));

    let L = 0
    let R = 0;

    let min = Infinity;
    let minRange = [];

    let freqMap = new Map();
    let visitSet = new Set();

    while(R<newArr.length){
        
        for(let A of myMap.get(newArr[R])){
            freqMap.set(A, (freqMap.get(A)|0) + 1 );
            visitSet.add(A);
        }

        while(visitSet.size == nums.length && L <= R){
            if(newArr[R]-newArr[L] < min){
                min = newArr[R]-newArr[L];
                minRange = [newArr[L],newArr[R]];
            }

            if(newArr[R]-newArr[L] == min){
                if(minRange[0] > newArr[L]){
                    minRange = [newArr[L],newArr[R]];
                }
            }

            for(let A of myMap.get(newArr[L])){
                freqMap.set(A, (freqMap.get(A)|0) - 1 );
                if(freqMap.get(A) <= 0){
                    visitSet.delete(A);
                }
            }
            L++;
        }

        R++;
    }

    return minRange;
};