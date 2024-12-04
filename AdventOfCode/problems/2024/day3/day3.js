import fs from "fs"

fs.readFile('./day3.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let myStr = data.toString();
    let arr = myStr.match(/mul[(]\d{1,},\d{1,}[)]/g);
    arr = arr.map( (el) => 
        el.substring(4,el.length-1)
    )
    arr = arr.map( (el)=>
        el.split(",")[0]*el.split(",")[1]
    )

    return arr.reduce( (sum,el)=>sum+el, 0);
}

let part2 = function(data){
    let myStr = data.toString();
    let arr = myStr.match( /(mul[(]\d{1,},\d{1,}[)])|(don't[(][)]|do[(][)])/g);

    let score = 0;
    let run = true;

    for(let command of arr){
        if(command.includes("mul(") && run){
            score += command.substring(4,command.length-1).split(",")[0]
            * command.substring(4,command.length-1).split(",")[1]
        }
        if(command === "don't()"){
            run = false;
        }
        if(command === "do()"){
            run = true;
        }
    }

    return score;
}