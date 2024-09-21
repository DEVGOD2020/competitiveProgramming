process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main();
});

function readline() {
    return inputString[currentLine++];
}

function main(){
    let problemCount = parseInt(readline());
    let score = 0;
    for(let I = 1; I <= problemCount; I++){
        let isSolve = readline().split(" ").map(el=>parseInt(el)).reduce(function(a,b){return a+b;},0)>1;
        if(isSolve){score++};
    }
    console.log(score);
}