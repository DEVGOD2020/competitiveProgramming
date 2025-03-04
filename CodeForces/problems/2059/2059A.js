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
    let N = parseInt(readline());
    for(let I = 0; I<N; I++){
        let arrSize = Number(readline());
        let set1 = new Set(readline().split(" "));
        let set2 = new Set(readline().split(" "));
        
        if(set1.size + set2.size < 4){
            console.log("NO")
        }else{
            console.log("YES");
        }
    }
}
