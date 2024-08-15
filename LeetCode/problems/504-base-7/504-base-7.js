/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    /*
    if(num == 0){return "0";}
    let str = "";
    let temp = Math.abs(num);
    while(temp > 0){
        let digit = temp%7;
        str = digit+str;
        temp = Math.floor(temp/7);
    }

    if(num < 0){str = "-"+str;}
    return str;*/
    return num.toString(7);
};