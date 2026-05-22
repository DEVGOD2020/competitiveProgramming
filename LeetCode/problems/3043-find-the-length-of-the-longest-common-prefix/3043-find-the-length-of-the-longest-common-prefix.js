/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let mySet = new Set();
    for(let num of arr1){
        while(num>0){
            mySet.add(num);
            num = Math.floor(num/10);
        }
    }
    
    let max = 0;
    for(let num of arr2){
        while(num>0){
            if(mySet.has(num)){
                max = Math.max(max, Math.floor(Math.log10(num))+1);
            }
            num = Math.floor(num/10);
        }
    }

    return max;
};
