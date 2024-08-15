/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let mySet = new Set();
    let ans = new Set();
    for(let I = 0; I<=s.length-10; I++){
        let str = s.slice(I,I+10);
        if(mySet.has(str)){
            ans.add(str);
        }else{
            mySet.add(str);
        }
    }
    return [...ans];
};