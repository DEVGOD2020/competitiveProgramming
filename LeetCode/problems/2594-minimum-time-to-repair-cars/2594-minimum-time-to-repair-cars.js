/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let howManyCars = function(rank, time){
        return Math.floor( Math.sqrt( time / rank));
    }

    let canFixAllCars = function(time){
        let fixCars = 0;
        for(let rank of ranks){
            fixCars += howManyCars(rank, time)
        }
        return fixCars >= cars;
    }

    let L = 1;
    let R = 10**15;
    let M;
    while(L<R){
        M = Math.floor( (L+R)/2 );
        if( canFixAllCars(M) ){
            R = M;
        }else{
            L = M + 1;
        }
    }

    return L;
};