/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let smallEven = Infinity;
    let smallOdd = Infinity;
    for(let num of nums1){
        if(num%2 == 0){
            smallEven = Math.min(smallEven, num);
        } 
        if(num%2 == 1){
            smallOdd = Math.min(smallOdd, num);
        } 
    }

    if(smallEven == Infinity || smallOdd == Infinity){
        return true;
    }
    return smallOdd < smallEven;
};