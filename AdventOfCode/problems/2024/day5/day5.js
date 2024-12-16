import fs from "fs"

fs.readFile('./day5.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

//10842 to high
let part1 = function(data){
    const rules = data.toString().split("\r\n\r\n")[0].split("\r\n");
    const pages = data.toString().split("\r\n\r\n")[1].split("\r\n");

    let score = 0;
    for(let page of pages){
        let arr = page.split(",");
        
        let sorted = [...arr].sort( function(a,b){
            return rules.includes(b+"|"+a)?1:-1;
        })

        if(sorted.join() == arr.join()){
            score += Number( arr[ Math.floor(arr.length/2) ]);
        }
    }

    return score;
}

let part2 = function(data){
    const rules = data.toString().split("\r\n\r\n")[0].split("\r\n");
    const pages = data.toString().split("\r\n\r\n")[1].split("\r\n");

    let nScore = 0;
    for(let page of pages){
        let arr = page.split(",");
        
        let sorted = [...arr].sort( function(a,b){
            return rules.includes(b+"|"+a)?1:-1;
        })

        if(sorted.join() !== arr.join()){
            nScore += Number( sorted[ Math.floor(sorted.length/2) ]);
        }
    }

    return nScore;
}