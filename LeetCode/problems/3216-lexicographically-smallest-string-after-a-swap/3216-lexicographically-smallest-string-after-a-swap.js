/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    let arr = s.split("");
    let L = 0;
    let R = 1;

    while(R<s.length){
        if(arr[L]%2 === arr[R]%2 && parseInt(arr[L]) > parseInt(arr[R])){
            let temp = arr[L];
            arr[L] = arr[R];
            arr[R] = temp;
            return arr.join("");
        }
        L++;
        R++;
    }

    return s;
};