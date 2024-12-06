import fs from "fs"

fs.readFile('./day4.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let mat = data.toString().split("\r\n").map( (el)=>el.split(""));
    const searchWord = "XMAS";
    let search = function(row,col,I=0,dir=0){
        if(I==searchWord.length){
            return 1;
        }

        if(mat[row]?.[col] !== searchWord[I]){
            return 0;
        }

        const dirs = [ undefined,
            [0,1], [1,0], [0,-1], [-1,0],
            [1,1], [-1,-1], [1,-1], [-1,1]
        ];

        let foundWords = 0;
        if(dir == 0){
            for(let D = 1; D<dirs.length; D++){
                foundWords += search(
                    row + dirs[D][0], 
                    col + dirs[D][1],
                    I+1,
                    D
                )
            }
        }else{
            foundWords += search(
                row + dirs[dir][0], 
                col + dirs[dir][1],
                I+1,
                dir
            )
        }

        return foundWords;
    }

    let score = 0;
    for(let row = 0; row<mat.length; row++){
        for(let col=0; col<mat[0].length; col++){
            score += search(row,col);
        }
    }

    return score;
}

let part2 = function(data){
    let mat = data.toString().split("\r\n").map( (el)=>el.split(""));

    let score = 0;
    for(let row = 0; row<mat.length; row++){
        for(let col=0; col<mat[0].length; col++){
            if(mat[row]?.[col] === "A"){
                let d1 = mat[row+1]?.[col+1]+"A"+mat[row-1]?.[col-1];
                let d2 = mat[row-1]?.[col+1]+"A"+mat[row+1]?.[col-1];
                if( (d1=="SAM" || d1=="MAS") && (d2=="SAM" || d2=="MAS") ){
                    score++;
                }
            }
        }
    }

    return score;
}