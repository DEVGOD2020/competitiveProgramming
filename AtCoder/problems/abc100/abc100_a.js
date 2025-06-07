process.stdin.once('data', (data) => {
    let line = data.toString().trim();
    let [a,b] = line.split(" ").map((el)=>Number(el));
    if( a <= 8 && b <= 8){console.log("Yay!")}
    else{console.log(":(")}
});
