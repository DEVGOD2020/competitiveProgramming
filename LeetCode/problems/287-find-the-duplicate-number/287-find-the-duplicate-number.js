/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let myMap = new Map();
    for(let num of nums){
        if(!myMap.has(num)){
            myMap.set(num,0);
        }
        myMap.set(num, myMap.get(num)+1);
        if(myMap.get(num) >= 2){
            return num;
        }
    }
    return -1;
};