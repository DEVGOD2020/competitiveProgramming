import fs from "fs"

fs.readFile('./day1.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let score = 0;
    for(let chr of data.toString()){
        score += chr==="(" ? 1 : -1;
    }
    return score;
}

let part2 = function(data){
    let score = 0;
    let pos = 1;
    for(let chr of data.toString()){
        score += chr==="(" ? 1 : -1;
        if(score === -1){
            return pos;
        }
        pos++;
    }
    return -1;
}