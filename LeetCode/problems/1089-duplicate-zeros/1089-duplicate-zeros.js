/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeros = arr.reduce( (sum,el)=>sum+= +(el==0), 0);
    let left = arr.length-1;
    let right = arr.length-1+zeros; 

    while(left >= 0){

        //Just set right to lefts value
        if(right < arr.length){arr[right] = arr[left];}
        right--;

        //If zero, do it again, shrinking the distance between LR
        if(arr[left] === 0){
            if(right < arr.length){arr[right] = 0;}
            right--;
        }

        left--;
    }
};