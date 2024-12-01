/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let mySet = new Set();
    for(let el of arr){
        if(mySet.has(el*2) || mySet.has(el/2)){
            return true;
        }
        mySet.add(el);
    }
    return false;
};