const input = Number( require('fs').readFileSync(0, 'utf8').trim() );
console.log( input%2 === 0 ? input : input*2 );

