/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while(s.length > k){
        let temp = "";
        for(let I = 0; I<s.length; I+=k){
            let sum = 0;
            for(let A = I; A<Math.min(I+k,s.length); A++){
                sum += Number(s[A]);
            }
            temp += ""+sum;
        }
        s=temp;
    }
    return s;
};