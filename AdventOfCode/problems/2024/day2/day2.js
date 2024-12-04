import fs from "fs"

fs.readFile('./day2.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let matrix = data.toString()
    .split("\r\n")
    .map( 
        (el)=>el.split(" ")
        .map( 
            (el)=>Number(el)
        )
    );

    const isSafe = function(row){
        let sign = row[1] - row[0] > 0;
        for(let I = 1; I<row.length; I++){
            let dis = row[I] - row[I-1];
            if(dis === 0){return 0;}
            if(dis > 0 !== sign){return 0;}
            if(Math.abs(dis) >= 4 || Math.abs(dis) <= 0){
                return 0;
            }
        }
        return 1;
    }

    let score = 0;
    for(let row of matrix){
        score += isSafe(row);
    }

    return score;
}

let part2 = function(data){
    let matrix = data.toString()
    .split("\r\n")
    .map( 
        (el)=>el.split(" ")
        .map( 
            (el)=>Number(el)
        )
    );

    const isSafe = function(row){
        let sign = row[1] - row[0] > 0;
        for(let I = 1; I<row.length; I++){
            let dis = row[I] - row[I-1];
            if(dis === 0){return I;}
            if(dis > 0 !== sign){return I;}
            if(Math.abs(dis) >= 4 || Math.abs(dis) <= 0){
                return I;
            }
        }
        return -1;
    }

    let score = 0;
    for(let row of matrix){
        let blah = isSafe(row);
        if(blah === -1){
            score++;
        }else if( 
            isSafe(row.toSpliced(blah,1)) === -1 
            || isSafe(row.toSpliced(blah-1,1)) === -1 
            || isSafe(row.toSpliced(blah-2,1)) === -1
        ){
            score++;
        }
    }
    return score;
}

//1,3,2
//2,1,3
//2,3,1