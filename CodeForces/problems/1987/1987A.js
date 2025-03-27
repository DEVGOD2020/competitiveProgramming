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
    let N = Number(readline());
    for(let n = 0; n<N; n++){
        let [GB,limit] = readline().split(" ").map(Number);
        let ans = 1 + (GB-1) * limit;
        console.log(ans);
    }
}
