/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num == 0){return "0";}
    let str = "";
    const arr = "0123456789abcdef";

    if(num < 0){num = num >>> 0;}
    while(num > 0){
        str = arr[num%16]+str;
        num = num >>> 4;
    }

    return str;
};