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
    let testcases = parseInt(readline());
    
    for(let T = 1; T<=testcases; T++){
        let str = readline();
        if( new Set(str).size == 1 ){
            console.log("NO");
        }else{
            console.log("YES");
            console.log( str.substring(1,str.length) + str[0]);
        }
    }
}
