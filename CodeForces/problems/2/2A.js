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
    
    let myMap = new Map();
    let rounds = [];
    
    for(let R = 0; R<N; R++){
        let [currName,score] = readline().split(" ");
        score = Number(score);
        if(myMap.get(currName) === undefined){
            myMap.set(currName, 0);
        }
        let newScore = myMap.get(currName)+score;
        myMap.set(currName,newScore);
        rounds.push([currName,newScore]);
    }
    
    let max = Math.max(...myMap.values());
    for(let [name, score] of rounds){
        if(score >= max && myMap.get(name) === max){
            console.log(name);
            return 0;
        }
    }
}
