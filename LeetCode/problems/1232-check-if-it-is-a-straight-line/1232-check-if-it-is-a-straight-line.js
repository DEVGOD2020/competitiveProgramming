/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length <= 2){return true;}
    let arr = [];
    arr = coordinates[0]
    coordinates.shift();
    
    let oldSlope = (coordinates[0][1]-arr[1])/(coordinates[0][0]-arr[0]);

    if( (coordinates[0][0]-arr[0]) == 0){
        oldSlope = 0;
    }

    coordinates.shift();

    for(let [A,B] of coordinates){
        let slope = (B-arr[1])/(A-arr[0]);
        if( (A-arr[0]) == 0){ slope = 0; }
        if(oldSlope !== slope){ return false; }
        arr = [A,B];
    }

    return true;
};
