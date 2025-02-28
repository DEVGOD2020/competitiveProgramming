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
    let numCases = parseInt(readline());
    for(let N = 0; N<numCases; N++){
        let riders = parseInt(readline());
        let arr = readline().split(" ").map(Number);
        
        let MIN = arr[0];
        let MAX = arr[0];
        let ans = true;
        for(let A = 1; A<riders; A++){
            if(arr[A] == MIN-1){
                MIN = arr[A];
                continue;
            }
            if(arr[A] == MAX+1){
                MAX = arr[A];
                continue;
            }
            ans = false;
            break;
        }
        console.log(ans ? "YES" : "NO");
    }

}

