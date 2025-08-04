/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    let freq = new Map();
    let min = Infinity;

    for(const b of basket1){
        freq.set(b, (freq.get(b) || 0) + 1);
        min = Math.min(min,b);
    }

    for(const b of basket2){
        freq.set(b, (freq.get(b) || 0) - 1);
        min = Math.min(min,b);
    }

    let merge = [];
    for(const [key,val] of freq.entries()){
        if(val % 2 !== 0){return -1;}
        for(let I = 0; I<Math.abs(val)/2; I++){
            merge.push(key);
        }        
    }

    merge.sort((a,b)=>a-b);
    
    let res = 0;
    for(let I = 0; I<merge.length/2; I++){
        res += Math.min(2*min, merge[I]);
    }

    return res;
};
