/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    let max = -Infinity;
    for(let I = energy.length-1; I>=0; I--){
        if(I+k < energy.length){
            energy[I] += energy[I+k];
        }
        max = Math.max(max, energy[I]);
    }
    return max;
};
