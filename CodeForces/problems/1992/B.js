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
    const testcases = parseInt(readline());
    for(let T = 1; T <= testcases; T++){
        let problemData = readline();
        let wantedLength = parseInt( problemData[0] );
        let cutPieces = parseInt( problemData[1] );
        let pieces = readline().split(" ").map( (el) => parseInt(el)).sort(function(a,b){return a-b;});
        pieces.pop();

        let operations = 0;
        for(let piece of pieces){
            operations += piece + (piece-1);
        }
        console.log(operations);
    }
}
