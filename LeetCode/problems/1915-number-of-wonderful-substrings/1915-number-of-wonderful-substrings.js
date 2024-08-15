/**\r
 * @param {string} word\r
 * @return {number}\r
 */\r
var wonderfulSubstrings = function(word) {\r
    let myMap = new Map();\r
    myMap.set(0,1);\r
\r
    let mask = 0;\r
    let res = 0;\r
    for(let c in word){\r
        let val = word[c].charCodeAt(0) - 97;\r
        mask ^= (1 << val);\r
\r
        res += myMap.get(mask) || 0;\r
        myMap.set(mask, (myMap.get(mask)||0)+1);\r
\r
        for(let I = 0; I<10; I++){\r
            res += myMap.get(mask ^ (1<<I)) || 0;\r
        }\r
    }\r
\r
    console.log(myMap);\r
    return res;\r
};