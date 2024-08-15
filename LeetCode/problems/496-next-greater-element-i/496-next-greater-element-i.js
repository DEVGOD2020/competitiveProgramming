/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let newArr = [];
    let monoStack = [];
    for(let I = nums2.length-1; I>=0; I--){
        while(monoStack.length > 0 && monoStack[0] < nums2[I]){
            monoStack.shift();
        }
        if(monoStack.length == 0){
            newArr[I] = -1;
            monoStack.unshift(nums2[I]);
        }else{
            newArr[I] = monoStack[0];
            monoStack.unshift(nums2[I]);
        }
    }

    let ans = [];
    for(let num of nums1){
        ans.push( newArr[ nums2.indexOf(num) ] );
    }

    return ans;

};