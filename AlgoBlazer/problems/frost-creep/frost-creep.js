const dirs = [[1,0],[0,1],[-1,0],[0,-1]];

function frostCoverTime(windowPanes) {
    let Q = [];
    let target = 0;
    for(let R = 0; R<windowPanes.length; R++){
        for(let C = 0; C<windowPanes[0].length; C++){
            if(windowPanes[R][C] == 2){
                Q.push([R,C]);
            }
            if(windowPanes[R][C] == 1){
                target++;
            }
        }
    }

    if(target == 0){return 0;}

    let score = 0;
    while(Q.length){
        let temp = Q.length;
        for(let Z = 0; Z<temp; Z++){
            let [R,C] = Q.shift();
            for(let [A,B] of dirs){
                if(windowPanes[A+R]?.[B+C] == 1){
                    windowPanes[A+R][B+C] = 2;
                    target--;
                    Q.push([A+R,B+C]);
                }
            }
        }
        score++;
    }

    if(target !== 0){return -1;}
    return score-1;
}