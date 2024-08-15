/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let max = s.length;
    let min = 0;

    let newArr = [];

    for(let chr of s){
        if(chr == "I"){
            newArr.push(min++);
        }else{
            newArr.push(max--);
        }
    }

    newArr.push(max);

    return newArr;
};