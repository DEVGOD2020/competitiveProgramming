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
    const arr = readline().split(" ");
    const n = parseInt(arr[0]);
    const m = parseInt(arr[1]);
    const a = parseInt(arr[2]);

    console.log( Math.ceil(n/a)*Math.ceil(m/a) );
}