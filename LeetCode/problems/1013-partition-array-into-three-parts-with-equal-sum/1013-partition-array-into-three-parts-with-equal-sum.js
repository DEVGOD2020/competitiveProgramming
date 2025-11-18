/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce( (sum,el)=>sum+el);
    if(sum%3 > 0){return false;}
    const TARGET = sum/3;

    let score = 0;
    let part = 0;
    for(let num of arr){
        score+=num;
        if(score == TARGET){
            if(part == 2){return true;}
            score = 0;
            part++;
        }
    }

    return false;
};
