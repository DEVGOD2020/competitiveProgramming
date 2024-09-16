/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0;
    let ans = "";
    while(num1.length > 0 || num2.length > 0){
        let digit1 = (num1[num1.length-1] - '0') | 0;
        let digit2 = (num2[num2.length-1] - '0') | 0;

        ans = ( (digit1+digit2+carry)%10 )+""+ans;
        carry = Math.floor( (digit1+digit2+carry)/10 );
        num1 = num1.substring(0,num1.length-1);
        num2 = num2.substring(0,num2.length-1);
    }
    if(carry>0){ ans = carry + ans; }
    return ans;
};