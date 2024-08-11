/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){return false;}
    
    let rev = 0;
    let temp = x;
    while(temp>0){
        let newDigit = temp%10;
        rev = rev*10 + newDigit;
        temp = Math.floor(temp/10);
    }

    return rev === x;
};