import fs from "fs"

fs.readFile('./day1.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let arr = data.toString().split(", ");

    let dirs = [ [0,1], [1,0], [0,-1], [-1,0] ];
    let dir = 0;
    let cord = [0,0];
    for(let el of arr){
        let turn = el[0];
        let length = parseInt(el.substring(1,el.length));
        if(turn === "L"){dir--;}
        if(turn === "R"){dir++;}
        const MX = length*dirs[ (dir%4 + 4)%4 ][0];
        const MY = length*dirs[ (dir%4 + 4)%4 ][1];
        cord = [ 
            MX, 
            MY
        ];
    }

    return Math.abs(cord[0])+Math.abs(cord[1]);
}

let part2 = function(data){
    let arr = data.toString().split(", ");

    let dirs = [ [0,1], [1,0], [0,-1], [-1,0] ];
    let dir = 0;
    let cord = [0,0];

    let visit = new Set();

    for(let el of arr){
        let turn = el[0];
        let length = parseInt(el.substring(1,el.length));
        if(turn === "L"){dir--;}
        if(turn === "R"){dir++;}
        const MX = length*dirs[ (dir%4 + 4)%4 ][0];
        const MY = length*dirs[ (dir%4 + 4)%4 ][1];
        cord = [ MX, MY ];
        if(visit.has(`${cord}`)){
            console.log(cord);
            return Math.abs(cord[0])+Math.abs(cord[1]);
        }
        console.log(visit);
        visit.add(`${cord}`);
    }

    return -1;
}