import fs from "fs"

fs.readFile('./day6.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

//10842 to high
let part1 = function(data){
    let mat = data.toString().split("\r\n").map( (el)=>el.split(""));

    let row = 0;
    let col = 0;
    let dir = 0;

    const dirs = [
        [-1,0],
        [0,1],
        [1,0],
        [0,-1]
    ];

    for(let A of mat){
        if(A.includes("^")){
            col = A.indexOf("^");
            break;
        }
        row++;
    }

    let checkBounds = (row,col)=>{
        return row >= 0 && col >= 0 && row < mat.length && col < mat[0].length;
    }

    let visit = new Set();
    while( checkBounds(row,col) ){
        while( mat[ row+dirs[dir][0] ]?.[ col+dirs[dir][1] ] !== "#"  ){
            if( !checkBounds(row,col)){ break; }
            visit.add(`${row}"_"${col}`);
            row += dirs[dir][0];
            col += dirs[dir][1];
        }
        dir = (dir+1)%4;
    }

    return visit.size;
}

let part2 = function(data){
    
}