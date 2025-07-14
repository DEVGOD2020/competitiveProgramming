/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players = players.sort( (a,b)=> a-b );
    trainers = trainers.sort( (a,b)=> a-b );
    let L = 0;
    let R = 0;
    while(L < players.length && R < trainers.length){
        L += players[L] <= trainers[R];
        R++;
    }
    return L;
};
