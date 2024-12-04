import fs from "fs"

fs.readFile('./day1.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let arr = data.toString().split("\r\n").map( (el)=> el.split(/\s\s\s/g).map( (el)=> parseInt(el) ) );

    let leftArr = arr.map( (el)=> el[0]).sort(function(a,b){return a-b;});
    let rightArr = arr.map( (el)=> el[1]).sort(function(a,b){return a-b;});

    let distance = leftArr.reduce( (sum,el,I) => sum+Math.abs(leftArr[I] - rightArr[I]), 0);

    return distance;
}

let part2 = function(data){
    let arr = data.toString().split("\r\n").map( (el)=> el.split(/\s\s\s/g).map( (el)=> parseInt(el) ) );
    
    let leftArr = arr.map(el=>el[0]);
    let freqMap = new Map();
    for(let [L,R] of arr){
        freqMap.set( R, (freqMap.get(R)||0) + 1);
    }

    return leftArr.reduce( (sum, el)=>sum+(freqMap.get(el)||0) * el, 0);
}