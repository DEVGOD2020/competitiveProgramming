/**\r
 * @param {number[][]} coordinates\r
 * @return {boolean}\r
 */\r
var checkStraightLine = function(coordinates) {\r
    if(coordinates.length <= 2){return true;}\r
    let arr = [];\r
    arr = coordinates[0]\r
    coordinates.shift();\r
    \r
    let oldSlope = (coordinates[0][1]-arr[1])/(coordinates[0][0]-arr[0]);\r
\r
    if( (coordinates[0][0]-arr[0]) == 0){\r
        oldSlope = 0;\r
    }\r
\r
    coordinates.shift();\r
\r
    for(let [A,B] of coordinates){\r
        let slope = (B-arr[1])/(A-arr[0]);\r
        if( (A-arr[0]) == 0){ slope = 0; }\r
        if(oldSlope !== slope){ return false; }\r
        arr = [A,B];\r
    }\r
\r
    return true;\r
};