/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let myMap = new Map();

    for(let el of arr){
        myMap.set(el, (myMap.get(el)|0)+1)
    }

    arr.sort((a,b)=>{
        if(myMap.get(a) !== myMap.get(b)){
            return myMap.get(a) - myMap.get(b);
        }
        return a - b;
    });

    arr = arr.slice(k);
    return new Set(arr).size;
};
