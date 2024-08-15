/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if(matrix.length == 1 && matrix[0].length == 1){
        if(matrix[0][0] == "1"){
            return 1;
        }
    }

    let myArr = matrix[0].map((el) => parseInt(el));
    console.log(myArr);
    let max = findMax(myArr);
    console.log(max);

    for (let I = 1; I < matrix.length; I++) {
        for (let Z = 0; Z < matrix[I].length; Z++) {
            if (parseInt(matrix[I][Z]) == 0) {
                myArr[Z] = 0;
            } else {
                myArr[Z] += parseInt(matrix[I][Z]);
            }
        }
        console.log(myArr);
        max = Math.max(max,findMax(myArr));
        console.log(max);
    }

    function findMax(arr) {
        let newArr = [];

        let min = Infinity;
        for(let I = arr.length-1; I>=0; I--){
            if(min > arr[I]){
                min = arr[I];
            }
            newArr[I] = min;
        }

        console.log(newArr);

        return 1;
    }

    return max;
};