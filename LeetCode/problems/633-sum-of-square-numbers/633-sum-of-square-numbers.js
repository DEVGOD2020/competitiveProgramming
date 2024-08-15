/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
    let binarySearch = function(target){
        let left = 0
        let right = 2**31-1;
        while(left < right){
            let mid = Math.floor( (left+right)/2 );
            if( mid*mid == target){
                return true;
            }else if(mid*mid < target){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        return false;
    }

    for(let A = 0; A*A<=c; A++){
        if( binarySearch(c-A*A)){
            return true;
        }
    }

    return false;
};