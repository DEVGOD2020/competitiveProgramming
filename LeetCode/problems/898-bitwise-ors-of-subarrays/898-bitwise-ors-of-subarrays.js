/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    let ans = new Set();
    let cur = new Set();
    cur.add(0);
    for(let num of arr){
        let temp = new Set();
        for(let el of cur){
            temp.add(el|num);
        }
        temp.add(num);
        for(let el of temp){
            ans.add(el);
        }
        cur = temp;
    }
    return ans.size;
};
