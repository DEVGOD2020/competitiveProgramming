/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let ans = 0;
    let myMap =
    {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let I = 0; I < s.length; I++){
        if(I < s.length-1 && myMap[s[I]] < myMap[s[I+1]]){
            ans += -myMap[s[I]];
        }else{
            ans += myMap[s[I]];
        }
    }

    return ans;
};