/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    for(let I = 0; I<operations.length; I++){
        if(operations[I][1] === '+'){ X++;}
        else{ X--; }
    }

    return X;
};