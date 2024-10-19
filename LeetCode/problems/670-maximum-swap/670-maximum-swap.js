/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let arr = String(num).split("");
    
    let max = -1;
    let maxIndex = 0;
    let swapMin = 0;
    let swapMax = 0;

    let I = String(num).length-1;
    while(num > 0){
        let digit = num%10;
        if(digit > max){
            max = digit;
            maxIndex = I;
        }else if(digit < max){
            swapMin = I;
            swapMax = maxIndex;
        }
        
        num = Math.floor(num/10);
        I--;
    }

    let temp = arr[swapMin];
    arr[swapMin] = arr[swapMax];
    arr[swapMax] = temp;

    return Number(arr.join(""));
    
};