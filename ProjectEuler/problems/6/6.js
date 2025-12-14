const N = 100;
//A000330
let part1 = N*(N+1)*(2*N+1)/6
let part2 = ( (N+1)*Math.floor(N/2) ) ** 2
let score = part2-part1;

console.log(score);