/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

const { AvlTree } = require("datastructures-js");
var findXSum = function(nums, k, x) {
    let blah = function(a,b){
        if(a[1] === b[1]){
            return a[0]-b[0];
        }
        return a[1]-b[1];
    }

    let largeTree = new AvlTree(blah);
    let smallTree = new AvlTree(blah);
    let freqMap = new Map();
    let ans = [];
    let score = 0;

    function bothInsert(A){
        if(largeTree.count() < x){
            largeTree.insert(A);
            score += A[0]*A[1];
        }else {
            smallTree.insert(A);
            update();
        }
    }

    function bothRemove(A){
        if( largeTree.has(A) ){
            largeTree.remove(A);
            score -= A[0]*A[1];
            update();
        }else {
            smallTree.remove(A);
        }
    }

    function update(){
        if(largeTree.count() < x && smallTree.count() > 0 ){
            let temp = smallTree.max()?.getValue();
            smallTree.remove(temp);
            largeTree.insert(temp);
            score += temp[0]*temp[1];
        }
        else if(smallTree.count() && largeTree.count()){
            if( blah(
                    smallTree.max()?.getValue(), 
                    largeTree.min()?.getValue()
                ) > 0 ){
                let temp = smallTree.max()?.getValue();
                let temp2 = largeTree.min()?.getValue();

                smallTree.remove( temp );
                largeTree.remove( temp2 );
                score -= temp2[0]*temp2[1];

                smallTree.insert( temp2 );
                largeTree.insert( temp );
                score += temp[0]*temp[1];
            }
        }
    }

    for(let I = 0; I<nums.length; I++){

        if(I >= k){
            bothRemove( [nums[I-k], (freqMap.get(nums[I-k])|0)] );
            freqMap.set( nums[I-k], (freqMap.get(nums[I-k])|0)-1 );
            if( freqMap.get(nums[I-k]) > 0 ){
                bothInsert( [nums[I-k], freqMap.get(nums[I-k])] );
            }
        }

        bothRemove( [nums[I], freqMap.get(nums[I])|0] );
        freqMap.set( nums[I], (freqMap.get(nums[I])|0)+1 );
        bothInsert( [nums[I], freqMap.get(nums[I])] );

        if(I >= k-1){ ans.push(score); }
    }

    return ans;
};
