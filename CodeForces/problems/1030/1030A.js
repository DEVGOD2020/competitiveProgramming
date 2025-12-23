console.log(
  require('fs').readFileSync(0,'utf8').trim().split(/\r?\n/)[1].split(" ").some( (el)=> el=="1") ? "Hard" : "Easy"
);
