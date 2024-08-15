/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    let players = Array.from({ length: n }, () => []);

    for(let P of pick){
        if(players [ P[0] ] [ P[1] ] == undefined){
            players [ P[0] ] [ P[1] ] = 0;
        }
        players [ P[0] ] [ P[1] ] += 1;
    }

    let score = 0;
    for(let I = 0; I<n; I++){
        if(Math.max(...players[I].filter( (el) =>{return el !== undefined})) > I){
            score++;
        }
    }

    return score;
};