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
        let size = readline();
        let arr = readline().split(" ").map(Number);
    
        let evenSwap = 0;
        let oddSwap = 0;
        for(let I = 0; I<arr.length; I++){
            if(arr[I]%2 !== I%2){
                evenSwap += I%2 ? 1 : 0;
                oddSwap += I%2 ? 0 : 1;
            }
        }
        if(evenSwap == oddSwap){
            console.log(oddSwap);
        }else{
            console.log(-1);
        }
    }
}
