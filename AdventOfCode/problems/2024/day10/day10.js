import fs from "fs"

fs.readFile('./day10.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

//659 to low
let part1 = function(data){
    let mat = data.toString().split("\r\n").map( (el)=>el.split("").map( (el)=>Number(el)));
    
    let helper = function(row,col){
        let visit=new Set();
        let trailHeads = new Set();
        let search = function(row,col,pre=null){
            if(row<0 || col<0){ return 0; }
            if(row>=mat.length || col>=mat[0].length){
                return 0;
            }
            if(visit.has(`${row},${col}`)){
                return 0;
            }
            if(pre !== null && pre !== mat[row][col]-1){
                return 0;
            }
            if(mat[row][col] === 9){
                if(trailHeads.has(`${row},${col}`)){
                    return 0;
                }
                trailHeads.add(`${row},${col}`);
                return 1;
            }

            visit.add(`${row},${col}`);

            return search(row-1,col,mat[row][col])
            + search(row+1,col,mat[row][col])
            + search(row,col-1,mat[row][col])
            + search(row,col+1,mat[row][col])
        }
        return search(row,col);
    }

    let totalScore = 0;
    for(let row = 0; row<mat.length; row++){
        for(let col=0; col<mat[0].length; col++){
            if(mat[row][col] === 0){
                totalScore += helper(row,col);
            }
        }
    }

    return totalScore;
}

let part2 = function(data){
    let mat = data.toString().split("\r\n").map( (el)=>el.split("").map( (el)=>Number(el)));
    
    let helper = function(row,col){
        let search = function(row,col,score=0,pre=null,visit=new Set()){
            if(row<0 || col<0){ return 0; }
            if(row>=mat.length || col>=mat[0].length){
                return 0;
            }
            if(visit.has(`${row},${col}`)){
                return 0;
            }
            if(pre !== null && pre !== mat[row][col]-1){
                return 0;
            }
            if(mat[row][col] === 9){
                return score+1;
            }

            visit.add(`${row},${col}`);

            let blah1 = search(row-1,col,score,mat[row][col],visit);
            let blah2 = search(row+1,col,score,mat[row][col],visit);
            let blah3 = search(row,col-1,score,mat[row][col],visit);
            let blah4 = search(row,col+1,score,mat[row][col],visit);
            
            visit.delete(`${row},${col}`);

            return blah1+blah2+blah3+blah4;
        }
        return search(row,col);
    }

    let totalScore = 0;
    for(let row = 0; row<mat.length; row++){
        for(let col=0; col<mat[0].length; col++){
            if(mat[row][col] === 0){
                totalScore += helper(row,col);
            }
        }
    }

    return totalScore;
}