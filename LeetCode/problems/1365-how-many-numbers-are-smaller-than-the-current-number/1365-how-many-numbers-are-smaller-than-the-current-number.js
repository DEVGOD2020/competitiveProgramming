/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sorted = Array.from(nums).sort(function(a,b){return a-b;});
    let myMap = new Map();

    for(let el in sorted){
        if(!myMap.has(sorted[el])){
            myMap.set(sorted[el],el);
        }
    }

    return nums.map( function(el){return myMap.get(el)} );

};