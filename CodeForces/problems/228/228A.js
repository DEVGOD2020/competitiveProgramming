console.log(
  4 - (new Set(require('fs').readFileSync(0,'utf8').trim().split(" ")).size)
);
