import fs from "fs"

fs.readFile('./day7.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let arr = data.toString().split("\r\n");
    arr = arr.map( 
        (row)=>row.split(": ")
    );
    arr = arr.map( (el)=>
        [Number(el[0]), el[1].split(" ").map( (el)=>Number(el))]
    )

    let blah = function(target, nums, val=0){
        if(val === target && nums.length === 0){ return true; }

        if(val > target){ return false; }

        if(nums.length === 0){ return false; }

        let removed = nums.shift();
        
        if(val == 0){return blah(target,[...nums],removed);}

        return blah(target,[...nums],val+removed) 
        || blah(target,[...nums],val*removed);
    }

    let score = 0;
    for(let el of arr){
        score += blah(el[0], [...el[1]]) ? el[0] : 0;
    }

    return score;
}

let part2 = function(data){
    
}