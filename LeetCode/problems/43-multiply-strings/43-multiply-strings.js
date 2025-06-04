/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 == 0 || num2 == 0){return "0";}
    let ans = new Array(num1.length+num2.length).fill(0);

    let leastSigDigit = ans.length;
    for(let A = num1.length-1; A>=0; A--){
        for(let B = num2.length-1; B>=0; B--){
            let pos = A+B+1;
            ans[pos] += Number(num1[A])*Number(num2[B]);
            ans[pos-1] += Math.floor(ans[pos]/10);
            ans[pos] = ans[pos]%10;

            if(ans[pos] > 0){
                leastSigDigit = Math.min(leastSigDigit, pos);
            }
            if(ans[pos-1] > 0){
                leastSigDigit = Math.min(leastSigDigit, pos-1);
            }
        }
    }

    return ans.join('').slice(leastSigDigit,ans.length);
};
