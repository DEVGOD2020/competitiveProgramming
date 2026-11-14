const input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

let A = 0;
let B = 0;
for(let str of input){
    let arr = {};
    for(let chr of str){
        arr[chr] = (arr[chr]??0)+1;
    }
    if( Object.values(arr).includes(2) ){ A++;}
    if( Object.values(arr).includes(3) ){ B++;}
}

console.log( A*B );
