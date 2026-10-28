/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let count = new Array(10).fill(0);
    for(let d of digits){count[d]++;}
    let score = 0;
    for(let I = 100; I<1000; I+=2){
        let first = I%10;
        let second = Math.floor(I/10)%10;
        let third = Math.floor(I/100)%10;
        count[first]--; count[second]--; count[third]--;
        if(count[first] >= 0 && count[second]>=0 && count[third]>=0){
            score++;
        }
        count[first]++; count[second]++; count[third]++;
    }
    return score;
};