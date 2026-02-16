/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    let ans = new Set();
    let cur = new Set();
    for(let num of arr){
        let next = new Set([num]);
        for(let el of cur){
            next.add(el|num);
            ans.add(el|num);
        }
        ans.add(num);
        cur = next;
    }
    return ans.size;
};
