/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    return arr1.sort(
        function(a,b){
            const A = arr2.indexOf(a) < 0 ? Infinity : arr2.indexOf(a);
            const B = arr2.indexOf(b) < 0 ? Infinity : arr2.indexOf(b);
            if(A !== B){
                return A - B;
            }else{
                return a-b;
            }
        }
    );
};