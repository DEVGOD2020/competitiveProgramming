/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    let sums = [];
    for(let I = 0; I<weights.length-1; I++){
        sums.push( weights[I]+weights[I+1] );
    }

    sums.sort( (a,b)=>a-b);

    let min = 0;
    let max = 0;

    for(let I = 0; I<k-1; I++){
        min += sums[I];
        max += sums[weights.length-2-I];
    }

    return max - min;

};

//1,2,3,4,5,6,7,8,9
//k = 2

//Scores
//MAX: [1+8] + [9+9] = 9 + 18 = 27
//MIN: [1+1] + [2+9] = 2 + 11 = 13

//[8]+[9] = 17
//[1]+[2] = 3

