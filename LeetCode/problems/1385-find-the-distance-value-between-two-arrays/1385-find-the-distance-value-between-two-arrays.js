/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.reduce( (sum,A)=>sum + +arr2.every( (el)=> Math.abs(A-el) > d),0);
};
