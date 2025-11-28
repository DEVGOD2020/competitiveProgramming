let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

console.log( input[0].split('').reverse().join('') == input[1] ? "YES" : "NO" );
