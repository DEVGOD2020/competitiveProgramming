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
        let nodeAmount = parseInt(readline());
        let nodes = readline().split(" ").map( (el) => parseInt(el))
        if(nodeAmount > 2){
            console.log("NO");
            continue;
        }
        if(nodes[0] == nodes[1]+1 || nodes[0] == nodes[1]-1){
            console.log("NO");
            continue;
        }
        console.log("YES");
    }
}
