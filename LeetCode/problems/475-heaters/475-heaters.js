/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort( (a,b)=>a-b);
    heaters.sort( (a,b)=>a-b);

    let canWarmAllHouses = function(Rad){
        let house = 0;
        let heat = 0;

        while(heat < heaters.length){
            while(
                houses[house] > 0 && 
                houses[house] >= heaters[heat]-Rad &&  
                houses[house] <= heaters[heat]+Rad
            ){
                house++;
            }
            heat++;
        }
        return house == houses.length;
    }

    let L = 0;
    let R = 10**9;
    let M;
    while(L<R){
        let M = Math.floor( (L+R)/2 );
        if(canWarmAllHouses(M)){
            R = M;
        }else{
            L = M+1;
        }
    }

    return L;
};