/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arr = num.toString().split("").sort();

    let num1 = arr[0]+arr[3];
    let num2 = arr[1]+arr[2];

    return Number(num1)+Number(num2);
};