/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let sum = requests[0];
    for(let I = 0; I<requests.length-1; I++){
        sum += Math.abs(requests[I]-requests[I+1]);
    }
    return sum;
};