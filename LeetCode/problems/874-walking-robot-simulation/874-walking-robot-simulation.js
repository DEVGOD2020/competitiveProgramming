/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let mySet = new Set();
    for(let ob of obstacles){
        mySet.add(ob[0]+"_"+ob[1]);
    }

    let max = 0;
    let X = 0;
    let Y = 0;
    let dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let dir = 0;

    for(let command of commands){
        if(command == -1){
            dir++; if(dir>3){dir=0;}
        }
        if(command == -2){
            dir--; if(dir<0){dir=3;}
        }
        
        for(let C = 0; C<command; C++){
            X += dirs[dir][0];
            Y += dirs[dir][1];
            if(mySet.has(X+"_"+Y)){
                X -= dirs[dir][0];
                Y -= dirs[dir][1];
                break;
            }else{
                max = Math.max( (X**2) + (Y**2) , max);
            }
        }
    }

    return max;
};