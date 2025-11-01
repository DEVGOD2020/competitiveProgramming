const input = require('fs').readFileSync(0,'utf8');
console.log(
  input.trim().toLowerCase().match(/[^aeiouy]/g).map( (el)=>'.'+el).join("")
);
