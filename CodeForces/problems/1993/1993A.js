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
    let testcases = Number(readline());
    
    for(let T = 0; T<testcases; T++){
        let questions = Number(readline())
        let myMap = new Map([
            ["A",questions],
            ["B",questions],
            ["C",questions],
            ["D",questions]
        ]);
        
        let answers = readline();
        score = 0;
        for(let ans of answers){
            if(myMap.get(ans) > 0){
                score++;
                myMap.set(ans, myMap.get(ans)-1);
            }
        }
        console.log(score);
    }
    
}
