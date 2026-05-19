/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let myMap = new Map();
    let ans = new Set();
    for(let num of nums1){
        myMap.set(num, (myMap.get(num)??0)|1);
    }
    for(let num of nums2){
        let blah = (myMap.get(num)??0)|2;
        myMap.set(num, blah);
        if(blah == 3){ans.add(num);}
    }
    for(let num of nums3){
        let blah = (myMap.get(num)??0)|4;
        myMap.set(num, blah);
        if(blah == 5 || blah == 6 || blah == 7){ans.add(num);}
    }
    return [...ans];
};
