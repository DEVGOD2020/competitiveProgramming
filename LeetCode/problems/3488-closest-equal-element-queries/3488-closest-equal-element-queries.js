/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    let myMap = new Map();
    for(let I = 0; I<nums.length; I++){
        if(!myMap.has(nums[I])){
            myMap.set(nums[I],[]);
        }
        myMap.get(nums[I]).push(-nums.length+I);
    }
    for(let I = 0; I<nums.length; I++){
        myMap.get(nums[I]).push(I);
    }
    for(let I = 0; I<nums.length; I++){
        myMap.get(nums[I]).push(nums.length+I);
    }

    for(let I = 0; I<queries.length; I++){
        let q = queries[I];
        let arr = myMap.get(nums[q]);
        if(arr.length < 6){
            queries[I] = -1;
            continue;
        }

        let pos = _.sortedIndex(arr,q);

        queries[I] = Math.min(
                arr[pos]-arr[pos-1],
                arr[pos+1]-arr[pos]
            );
    }

    return queries;
};
