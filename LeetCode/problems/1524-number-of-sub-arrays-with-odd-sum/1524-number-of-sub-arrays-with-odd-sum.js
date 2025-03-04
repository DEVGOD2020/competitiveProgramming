var numOfSubarrays = function(arr) {
    let score = 0;
    let sum = 0;
    let oddCount = 0;
    let evenCount = 1;

    for(let el of arr){
        sum += el;
        if(sum%2 == 1){
            score += evenCount;
            oddCount += 1;
        }
        if(sum%2 == 0){
            score += oddCount;
            evenCount += 1;
        }

        score %= 10**9 + 7;
    }

    return score;
};