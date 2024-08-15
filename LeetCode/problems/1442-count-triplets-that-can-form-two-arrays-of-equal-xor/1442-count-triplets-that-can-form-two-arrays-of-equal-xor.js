/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let prefix = [0,...arr];
    for(let I = 1; I<arr.length; I++){
        prefix[I] ^= prefix[I-1];
    }
    console.log(prefix);

};

//2,3,1,6,7
//2,1,0,6,1

//A=2
//B=3^1
//A==B
//A^B==0