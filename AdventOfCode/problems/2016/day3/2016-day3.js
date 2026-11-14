let lines = require('fs').readFileSync(0,'utf8').split("\n");

let score = 0;
for(let line of lines){
    let arr = line.trim().split(/\s+/).map((el)=>Number(el));
    let A = arr[0];
    let B = arr[1];
    let C = arr[2];
    if(A+B > C && B+C > A && C+A > B){score++;}
}

console.log(score);

score = 0;
for(let I = 0; I<lines.length; I+=3){

    let arr1 = [
        lines[I].trim().split(/\s+/).map((el)=>Number(el))[0],
        lines[I+1].trim().split(/\s+/).map((el)=>Number(el))[0],
        lines[I+2].trim().split(/\s+/).map((el)=>Number(el))[0]
    ];

    let arr2 = [
        lines[I].trim().split(/\s+/).map((el)=>Number(el))[1],
        lines[I+1].trim().split(/\s+/).map((el)=>Number(el))[1],
        lines[I+2].trim().split(/\s+/).map((el)=>Number(el))[1]
    ];

    let arr3 = [
        lines[I].trim().split(/\s+/).map((el)=>Number(el))[2],
        lines[I+1].trim().split(/\s+/).map((el)=>Number(el))[2],
        lines[I+2].trim().split(/\s+/).map((el)=>Number(el))[2]
    ];
    
    if(arr1[0]+arr1[1] > arr1[2] && arr1[1]+arr1[2] > arr1[0] && arr1[2]+arr1[0]>arr1[1]){score++;}
    if(arr2[0]+arr2[1] > arr2[2] && arr2[1]+arr2[2] > arr2[0] && arr2[2]+arr2[0]>arr2[1]){score++;}
    if(arr3[0]+arr3[1] > arr3[2] && arr3[1]+arr3[2] > arr3[0] && arr3[2]+arr3[0]>arr3[1]){score++;}
}

console.log(score);
