/**\r
 * @param {number[]} arr\r
 * @param {number} k\r
 * @return {number}\r
 */\r
var findLeastNumOfUniqueInts = function(arr, k) {\r
    let myMap = new Map();\r
\r
    for(let el of arr){\r
        if(myMap.get(el) === undefined){\r
            myMap.set(el, 0);\r
        }\r
        myMap.set(el, myMap.get(el)+1)\r
    }\r
\r
    arr.sort(function(a,b){\r
        if(myMap.get(a) !== myMap.get(b)){\r
            return myMap.get(a) - myMap.get(b);\r
        }else{\r
            return a - b;\r
        }\r
    });\r
\r
    arr = arr.slice(k,arr.length);\r
\r
    return new Set(arr).size;\r
\r
};