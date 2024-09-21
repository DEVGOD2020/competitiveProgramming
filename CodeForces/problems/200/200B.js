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
    let arrSize = parseInt(readline());
    let arr = readline().split(" ").map( (el) => parseInt(el) );
    let sum = 0;
    for(let a of arr){
        sum += a/100;
    }
    console.log( (sum / arrSize)*100 );
}
