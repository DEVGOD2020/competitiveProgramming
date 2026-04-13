/**
 * @param {number[]} sides
 * @return {number[]}
 */
var internalAngles = function(sides) {
    sides.sort( (a,b)=>a-b);
    if(sides[0] + sides[1] <= sides[2]){
        return [];
    }
    let arr = [
        Math.acos( 
            (sides[0]**2 + sides[1]**2 - sides[2]**2) / (2*sides[0]*sides[1])
        ) * (180/Math.PI),
        Math.acos( 
            (sides[0]**2 + sides[2]**2 - sides[1]**2) / (2*sides[0]*sides[2])
        ) * (180/Math.PI),
         Math.acos( 
            (sides[1]**2 + sides[2]**2 - sides[0]**2) / (2*sides[1]*sides[2])
        ) * (180/Math.PI),
    ];
    return arr.sort((a,b)=>a-b);
}
