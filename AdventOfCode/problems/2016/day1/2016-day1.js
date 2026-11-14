let lines = require('fs').readFileSync(0,"utf8").split(", ");
const dirs = [ [0,1], [1,0], [0,-1], [-1,0] ];

let part1 = function(arr){
    let dir = 0;
    let cord = [0,0];
    for(let el of arr){
        let turn = el[0];
        let length = parseInt(el.substring(1,el.length));
        if(turn === "L"){dir--;}
        if(turn === "R"){dir++;}
        const MX = cord[0] + length*dirs[ (dir%4 + 4)%4 ][0];
        const MY = cord[1] + length*dirs[ (dir%4 + 4)%4 ][1];
        cord = [ MX, MY ];
    }

    return Math.abs(cord[0])+Math.abs(cord[1]);
}

let part2 = function(arr){
    let dir = 0;
    let cord = [0,0];
    let visit = new Set();

    for(let el of arr){
        let turn = el[0];
        let length = parseInt(el.substring(1,el.length));
        if(turn === "L"){dir--;}
        if(turn === "R"){dir++;}
        for(let LEN = 0; LEN<length; LEN++){
            const MX = cord[0] + dirs[ (dir%4 + 4)%4 ][0];
            const MY = cord[1] + dirs[ (dir%4 + 4)%4 ][1];
            cord = [ MX, MY ];
            if(visit.has(`${cord}`)){
                return Math.abs(cord[0])+Math.abs(cord[1]);
            }
            visit.add(`${cord}`);
        }
    }

    return -1;
}

console.log( part1(lines) );
console.log( part2(lines) );
