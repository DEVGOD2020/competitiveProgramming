/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    const arr = boxTypes.sort(function(a, b){return b[1]-a[1]});

    let size = 0;
    let amount = 0;
    for(a of arr){
        if(a[0]+size<=truckSize){
            size += a[0];
            amount += a[0]*a[1];
        }else{
            while(size < truckSize){
                size++;
                amount += a[1];
            }
        }
    }
    return amount;
};