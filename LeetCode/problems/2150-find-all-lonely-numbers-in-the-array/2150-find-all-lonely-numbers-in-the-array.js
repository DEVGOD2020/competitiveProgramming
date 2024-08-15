/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let myMap = new Map();

    for(let num of nums){
        if(!myMap.has(num)){
            myMap.set(num, 0);
        }
        myMap.set(num, myMap.get(num)+1);
    }

    let ans = [];
    for(let key of myMap.keys()){
        if(myMap.get(key) == 1){
            if(!myMap.has(key-1) && !myMap.has(key+1)){
                ans.push(key);
            }
        }
    }
    return ans;
};