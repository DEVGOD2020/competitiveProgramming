/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let myMap = new Map();
    let Z = 0;
    let mySet = new Set();
    let mySet2 = new Set();
    for(let [row,seat] of reservedSeats){
        if(myMap.get(row) == undefined){
            myMap.set(row, 0);
        }

        if(seat >= 2 && seat <= 5){
            myMap.set(row, myMap.get(row)|1);
        }
        if(seat >= 4 && seat <= 7){
            myMap.set(row, myMap.get(row)|2);
        }
        if(seat >= 6 && seat <= 9){
            myMap.set(row, myMap.get(row)|4);
        }
        if( !mySet.has(row)){
            if(myMap.get(row) >= 1 && myMap.get(row) <= 6){
                mySet.add(row);
                Z += 1;
            }
        }
        if( !mySet2.has(row)){
            if(myMap.get(row) == 7){
                mySet2.add(row);
                Z += 1;
            }
        }
    }
    return 2*n-Z;
};