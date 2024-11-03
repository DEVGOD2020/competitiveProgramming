/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let arr = s.toUpperCase().replaceAll('-','').split('');
    let len = arr.length;
    let rem = arr.length%k;
    
    for(let I = 0; I<len; I++){
        if( ( I+(k-rem) )%k == 0 && I+rem!==0){
            arr[I] = "-"+arr[I];
        }
    }

    return arr.join("");
};