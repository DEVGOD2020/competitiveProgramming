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
    let stepsNeeded = parseInt(readline());
    let score = 0;

    for(let I = 5; I > 0; I--){
        score += Math.floor(stepsNeeded/I);
        stepsNeeded += -I*Math.floor(stepsNeeded/I);
    }

    console.log(score);
}