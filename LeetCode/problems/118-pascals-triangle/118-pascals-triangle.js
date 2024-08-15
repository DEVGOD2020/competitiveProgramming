/**
 * @param {number} numRows
 * @return {number[][]}
 */

var memo = {
    1: [1],
    2: [1,1],
    3: [1,2,1],
    4: [1,3,3,1],
    5: [1,4,6,4,1]
}
var generate = function(numRows) {
    let arr = [];
    let I = 1;
    while(I<=numRows){
        arr.push(row(I));
        I++;
    }
    return arr;
};

function row(X) {
    if(memo[X] !== undefined){
        return memo[X];
    }
    let arr = new Array(X).fill(0);

    for(let a in arr){
        if(a==0 || a==arr.length-1){
            arr[a] = 1;
        }else{
            arr[a] = row(X-1)[a-1] + row(X-1)[a];
        }
    }

    memo[X] = arr;
    return memo[X];
};

