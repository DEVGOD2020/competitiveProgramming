let input = require('fs').readFileSync(0,'utf8').trim().split("0");
if( /(.)\1{6,}/.test(input) ){
    console.log("YES");
}else{
    console.log("NO");
}
