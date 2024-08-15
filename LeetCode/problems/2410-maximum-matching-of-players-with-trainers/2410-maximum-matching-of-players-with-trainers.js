/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players = players.sort( function(a,b){return b-a;} );
    trainers = trainers.sort( function(a,b){return b-a;} );

    let L = 0;
    let R = 0;
    let score = 0;
    while(L < players.length && R < trainers.length){
        if( players[L] <= trainers[R]){
            L++; R++; score++;
        }
        else if(players[L] > trainers[R]){
            L++;
        }
    }

    //console.log(players,trainers)
    //console.log(L,R);

    return score;
};