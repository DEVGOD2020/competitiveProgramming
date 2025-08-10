const input = Number(require('fs').readFileSync(0, 'utf8').trim());

if(input%2 === 0){
    console.log( input/2);
}else{
    console.log( (-input-1)/2 );
}
