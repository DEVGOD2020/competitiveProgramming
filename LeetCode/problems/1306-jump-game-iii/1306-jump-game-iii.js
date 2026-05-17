/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    return start >= 0 && start < arr.length && 
    arr[start] >= 0 && 
    (arr[start] = -arr[start])<=0 &&
    (arr[start] == 0 || 
    canReach(arr,start-arr[start]) || 
    canReach(arr,start+arr[start]) ); 
};
