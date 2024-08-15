/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let arr = [];
    for(let I = 0; I<l.length; I++){
        let newArr = nums.slice(l[I],r[I]+1);
        newArr.sort(function(a,b){return a-b;});
        arr[I] = true;
        let diff = newArr[0]-newArr[1];
        for(let Z = 1; Z<newArr.length; Z++){
            if(diff != newArr[Z-1]-newArr[Z]){
                arr[I] = false;
            }
        }
    }

    return arr;
};