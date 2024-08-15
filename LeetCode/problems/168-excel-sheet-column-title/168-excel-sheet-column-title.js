/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = "";
    let digits = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    while(columnNumber > 0){
        columnNumber--;
        ans += digits[columnNumber%26];
        columnNumber = Math.floor(columnNumber / 26);
    }
    return [...ans].reverse().join("");
};