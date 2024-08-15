/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let mySet = new Set();

    let max = 0;
    for(let num of nums){
        if(num > 0){
            if(max < num){ max = num; }
            mySet.add(num);
        }
    }

    if(mySet.size == 0){return 1;}

    for(let A = 1; A<max+2; A++){
        if(!mySet.has(A)){
            return A;
        }
    }

    return 0;
};