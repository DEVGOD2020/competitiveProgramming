/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    //1,1,1,1,0,1,1,1
    //1,2,3,4,3,4,5,6

    //0,1,0,1
    //-1,0,-1,0

    let prefixSum = 0;
    let score = 0;
    let myMap = new Map();
    myMap.set(0,-1);
    for(let a=0; a<nums.length; a++){
        if(nums[a] ==0){
            prefixSum += -1;
        }else{
            prefixSum += 1;
        }
        if(!myMap.has(prefixSum)){
            myMap.set(prefixSum,a);
        }
        if(score < a-myMap.get(prefixSum)){
            score = a-myMap.get(prefixSum);
        }
    }
    
    return score;
};