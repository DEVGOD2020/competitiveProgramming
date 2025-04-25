process.stdin.on('data', (data) => {
    let [A,B] = data.toString().trim().split(" ").map(el=>Number(el))
    console.log( (A+B)**2 );
});