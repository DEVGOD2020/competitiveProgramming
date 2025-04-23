/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let digitSum = function(n){
        let sum = 0;
        while(n>0){
            sum += n%10;
            n = Math.floor(n/10);
        }
        return sum;
    }

    let myMap = new Map();
    let ans = 0;
    let maxFreq = 1;
    for(let I = 1; I<=n; I++){
        let dSum = digitSum(I);
        myMap.set( dSum, (myMap.get(dSum)||0)+1 );
        if(myMap.get(dSum) > maxFreq){
            maxFreq = myMap.get(dSum);
            ans = 0;
        }
        if(myMap.get(dSum) == maxFreq){
            ans++;
        }
    }

    return ans;
};