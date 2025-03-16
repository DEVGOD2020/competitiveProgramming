/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let cord = [0,0];
    for(let move of moves){
        switch(move){
            case 'L':
                cord[0]++;
                break;
            case 'R':
                cord[0]--;
                break;
            case 'U':
                cord[1]++;
                break;
            case 'D':
                cord[1]--;
                break;
        }
    }
    return cord[0] == 0 && cord[1] == 0;
};