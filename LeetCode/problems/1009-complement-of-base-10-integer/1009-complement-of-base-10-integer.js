/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(num) {
    if(num == 0){return 1;}

    let part1 = function(n){
        return (~n)>>>0;
    }

    let part2 = function(){
        return 2 ** Math.floor(Math.log(num) / Math.log(2)) -1;
    }

    return part1(num) & part2();
};