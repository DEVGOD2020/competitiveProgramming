/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let A = -Infinity;
    let B = -Infinity;
    let C = -Infinity;

    let Y = Infinity;
    let Z = Infinity;
    for(let num of nums){
        if(num >= A){C=B;B=A;A=num;}
        else if(num >= B){C=B;B=num;}
        else if(num >= C){C=num;}

        if(num < Y){Z=Y; Y=num;}
        else if(num < Z){Z=num;}
    }
    return Math.max(A*B*C, Y*Z*A);
};