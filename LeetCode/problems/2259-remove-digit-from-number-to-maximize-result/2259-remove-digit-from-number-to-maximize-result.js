/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let arr = [];

    for(let I = 0; I < number.length; I++){
        if(number[I] == digit){
            let newStr = number.substring(0,I)+number.substring(I+1);
            arr.push(newStr);
        }
    }

    arr.sort();
    return arr[arr.length-1]
};