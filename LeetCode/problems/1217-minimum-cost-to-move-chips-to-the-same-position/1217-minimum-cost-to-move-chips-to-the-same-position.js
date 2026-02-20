/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0;
    let even = 0;
    for(let coin of position){
        if(coin%2){odd++}else{even++;}
    }
    return Math.min(odd,even);
};
