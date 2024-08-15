/**\r
 * @param {number[]} nums\r
 * @param {number} goal\r
 * @return {number}\r
 */\r
var numSubarraysWithSum = function(nums, goal) {\r
    //1,1,0,1,1\r
    //1,2,2,3,4\r
\r
    //{0:1,1:1,2:2,3:1,4:1}\r
\r
    let myMap = new Map();\r
    let prefixSum = 0;\r
    myMap.set(0,1);\r
    let score = 0;\r
    for(let I in nums){\r
        prefixSum += nums[I];\r
\r
        if(myMap.has(prefixSum-goal)){\r
            score += myMap.get(prefixSum-goal);\r
        }\r
        if(!myMap.has(prefixSum)){\r
            myMap.set(prefixSum,0);\r
        }\r
        myMap.set(prefixSum, myMap.get(prefixSum)+1);\r
    }\r
    \r
    return score;\r
};