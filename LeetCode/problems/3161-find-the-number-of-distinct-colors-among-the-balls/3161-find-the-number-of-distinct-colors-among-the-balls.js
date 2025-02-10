/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let ball_Color_Map = new Map();
    let color_Ball_Sets_Map = new Map();

    let result = [];
    for(let [ball,color] of queries){

        const prevColorAtBall = ball_Color_Map.get(ball)
        const prevBallSet = color_Ball_Sets_Map.get( prevColorAtBall );

        if(prevColorAtBall !== undefined){
            prevBallSet.delete( ball );
            if( !prevSet.size ){
                myMap2.delete( prevColorAtBall );
            }
        }

        ball_Color_Map.set(ball,color);

        if(!color_Ball_Sets_Map.has(color)){
            color_Ball_Sets_Map.set(color, new Set());
        }
        color_Ball_Sets_Map.get(color).add(ball);

        result.push( color_Ball_Sets_Map.size )
    }

    return result;
};