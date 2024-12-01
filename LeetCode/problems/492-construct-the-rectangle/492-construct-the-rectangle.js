/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let L = area;
    let W = 1;
    
    for(let I = 1; I<=Math.ceil(Math.sqrt(area)); I++){
        if( area%I == 0){
            L = Math.floor(area/I);
            W = I;
        }
    }

    return _.orderBy([L,W], [], ['desc']);
};
