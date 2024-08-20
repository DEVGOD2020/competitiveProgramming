/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let X = 0;
    for(let command of commands){
        if(command.toLowerCase() === "left"){
            X--;
        }
        if(command.toLowerCase() === "right"){
            X++;
        }
        if(command.toLowerCase() === "up"){
            X += -n;
        }
        if(command.toLowerCase() === "down"){
            X += n;
        }
    }
    return X;
};