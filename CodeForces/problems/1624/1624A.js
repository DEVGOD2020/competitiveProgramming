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
    let testCases = parseInt(readline());
    for(let T = 1; T<=testCases; T++){
        let arrLen = parseInt(readline());
        let arr = readline().split(" ").map( (el) => parseInt(el) ).slice(0,arrLen);
        console.log(Math.max(...arr)-Math.min(...arr));
    }
}