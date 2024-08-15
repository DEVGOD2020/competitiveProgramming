/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let score = 0;
    let temp = num;
    while(temp > 0){
        if(num % (temp%10) == 0){
            score++;
        }
        temp = Math.floor(temp / 10);
    }

    return score;
};