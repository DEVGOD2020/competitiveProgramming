/**
 * @param {number[]} nums
 * @return {number[]}
 */

var frequencySort = function(nums) {
    let myMap = new Map();
    for(let num of nums){
        if(!myMap.has(num)){
            myMap.set(num,0);
        }
        myMap.set(num,myMap.get(num)+1);
    }

    nums.sort(
        function(a,b){
            if(myMap.get(a) !== myMap.get(b)){
                return myMap.get(a) - myMap.get(b); 
            }else{
                return b - a;
            } 
        }
    );

    return nums;
};