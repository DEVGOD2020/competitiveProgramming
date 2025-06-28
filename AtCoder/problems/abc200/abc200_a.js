const N = Number( require('fs').readFileSync(0,'utf8').trim() );
console.log( Math.floor( (N-1)/100)+1 );
