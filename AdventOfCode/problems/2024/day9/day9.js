import fs from "fs"

fs.readFile('./day9.txt', (err, data) => {
    if (err) throw err;
    console.log( part1(data) );
    console.log( part2(data) );
});

let part1 = function(data){
    let arr = data.toString().split("").map( (el)=>Number(el) );

    let diskMap = arr.flatMap( (el,I)=>
        new Array(el).fill(
            I%2?"*":Math.floor(I/2)
        )
    );

    let compDisk = [];
    let L = 0;
    let R = diskMap.length-1;
    while(L<=R){
        if(diskMap[L] !== "*"){
            compDisk.push(diskMap[L]);
            L++;
        }else{
            while(diskMap[R] === "*"){
                R--;
            }
            compDisk.push(diskMap[R]);
            R--;
            L++;
        }
    }

    return compDisk.reduce( (sum,el,I)=>sum+(el*I),0);
}

let part2 = function(data){
    //Parse
    let arr = data.toString().split("").map( (el)=>Number(el) );

    //Convert input to the example disk system
    let diskMap = arr.map( (el,I)=>
        new Array(el).fill(
            I%2?"*":Math.floor(I/2)
        )
    ).filter((el)=>el.length != 0);

    let R = diskMap.length-1;
    while(R>=0){
        //Skip not valid cases, we want R to always be a file to swap with leftmost * space
        if(diskMap[R][0] === "*"){
            R--;
            continue;
        }

        let L = 0;
        while(L<R){
            //Skip not valid cases
            if(diskMap[L][0] !== "*" || (diskMap[L][0] === "*" && diskMap[L].length < diskMap[R].length)){
                L++;
                continue;
            }
            
            //Same, just swappy
            if(diskMap[L].length === diskMap[R].length){
                let temp = [...diskMap[L]];
                diskMap[L] = diskMap[R];
                diskMap[R] = temp;
            }

            //Valid, but leftmost has more then right pointer elements
            //Move right to left, set right to blanks
            //Append empty leftover spaces to left+1
            else if(diskMap[L].length > diskMap[R].length){
                let dis = diskMap[L].length - diskMap[R].length;

                diskMap[L] = diskMap[R];
                diskMap[R] = new Array(diskMap[R].length).fill("*");

                diskMap.splice(L+1,0, new Array(dis).fill("*"));
                R++;
            }

            //Fix by combinding adjancent * sub arrays
            let mergeStuff = function(X,Y){
                if(diskMap[X]?.[0] === "*" && diskMap[Y][0] === "*"){
                    diskMap[X] = diskMap[Y].concat(diskMap[X]);
                    diskMap.splice(Y,1);
                }
            }
            mergeStuff(L-1,L);
            mergeStuff(L+1,L);
            mergeStuff(R-1,R);
            mergeStuff(R+1,R);

            break;
        }
        R--;
    }

    //flatten to sub array of elements, replace * with 0, and sum it out while multi its index
    return diskMap.flat().map( (el)=>el=="*"?0:el).reduce( (sum,el,I)=>sum+(el*I),0);
}