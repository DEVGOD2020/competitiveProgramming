/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const REG = /[^a-zA-Z]/;
    let L = 0;
    let R = s.length-1;
    let ans = s.split("");
    while(L<R){
        while(REG.test(s[L]) && L<R ){
            L++;
        }
        while(REG.test(s[R]) && L<R ){
            R--;
        }
        [ans[L],ans[R]] = [ans[R],ans[L]];
        L++;
        R--;
    }

    return ans.join("");
};
