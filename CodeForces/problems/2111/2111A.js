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
    let testcases = Number(readline() );
    for(let T = 0; T<testcases; T++){
        let goal = Number(readline());
        if(goal == 1){console.log(3); continue;}
        let power = [1,1,3];
        let ans = 3;
        while(Math.min(...power) < goal ){
            let min = power.shift();
            power.push( Math.floor(power[0]*2)+1 );
            power.sort((a,b)=>a-b);
            ans++;
        }
        console.log(ans);
    }
}
