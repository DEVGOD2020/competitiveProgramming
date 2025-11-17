let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);

console.log( input[0].toLowerCase().localeCompare(input[1].toLowerCase() ) );
