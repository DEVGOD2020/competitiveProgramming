/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceSum = _.sumBy(aliceSizes);
    let bobSum = _.sumBy(bobSizes);

    let diff = aliceSum-bobSum;

    let mySet = new Set();
    for(let a of aliceSizes){
        mySet.add(a);
    }
    
    for(let b of bobSizes){
        if(mySet.has( b+Math.floor(diff/2) )){
            return [b+Math.floor(diff/2), b];
        }
    }

};