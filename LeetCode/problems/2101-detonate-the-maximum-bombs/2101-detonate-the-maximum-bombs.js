/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    //Simulate bomb explosions
    let hash = {};

    for(let A in bombs){
        for(let B in bombs){
            if(A !== B && checkRange(bombs[A],bombs[B])){
                if(hash[A] === undefined){ hash[A] = []; }
                hash[A].push(B);
            }
        }
    }

    let temp = 0;
    for(let A of Object.keys(hash)){
        let val = depthFirstSearch( hash, A );
        if( val > temp ){
            temp = val;
        }
    }
    
    return temp+1;
};

function checkRange(a,b){
    //Get Distance
    let dis = (a[0]-b[0])*(a[0]-b[0])+(a[1]-b[1])*(a[1]-b[1])

    //Check Distance
    if(dis > a[2]*a[2]){
        return false;
    }

    return true;
}

function depthFirstSearch(map, n){
    let stack = [n];
    let visited = {};
    visited[n] = true;
    let amount = 0;

    while(stack.length>0){
        let value = stack.pop();
        //visited[value] = true;
        if(map[value] != undefined && map[value].length > 0){
            for(let A of map[value]){
                if(visited[A] !== true){
                    visited[A] = true;
                    stack.push(A);
                    amount++;
                }
            }
        }
    }

    return amount;
}


