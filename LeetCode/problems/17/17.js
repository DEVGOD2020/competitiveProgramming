/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length == 0){return [];}

    let arr = [];

    let myMap = new Map();
    myMap.set(2, "abc");
    myMap.set(3, "def");
    myMap.set(4, "ghi");
    myMap.set(5, "jkl");
    myMap.set(6, "mno");
    myMap.set(7, "pqrs");
    myMap.set(8, "tuv");
    myMap.set(9, "wxyz");

    let helper = function (d, str="") {
        if(d >= digits.length){
            arr.push(str);
            return 0;
        }

        for (let chr of myMap.get(parseInt(digits[d]))) {
            helper(d+1,str+chr);
        }
    }

    helper(0);
    return arr;
};