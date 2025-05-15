/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let myMap = new Map(
        [
            [1, new Set()],
            [2, new Set()],
            [3, new Set()],
            [4, new Set()],
            [5, new Set()],
            [6, new Set()],
        ]
    );

    let canSolve = false;
    let target = 0;
    for(let I = 0; I<tops.length; I++){
        myMap.get(tops[I]).add(I);
        myMap.get(bottoms[I]).add(I);
        if(myMap.get(tops[I]).size == tops.length){
            target = tops[I];
            canSolve = true;
        }
        if(myMap.get(bottoms[I]).size == bottoms.length){
            target = bottoms[I];
            canSolve = true;
        }
    }

    if(!canSolve){
        return -1;
    }

    return Math.min( 
        tops.length-tops.reduce((sum,el)=>sum+(el===target),0),
        tops.length-bottoms.reduce((sum,el)=>sum+(el===target),0)
    )

};