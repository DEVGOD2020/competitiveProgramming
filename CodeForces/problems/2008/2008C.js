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
    let AS = function(n){
        return (n/2)*(n-1)+1;
    }
    
    
    let testCases = parseInt(readline());
    for(let T = 1; T<=testCases; T++){
        let data = readline().split(" ");
        let L = parseInt(data[0]);
        let R = parseInt(data[1]);
        let diff = (R-L)+1;
        let M = Math.floor((L+R)/2);
        
        L = 1;
        R = diff;
        while(L<=R){
            M = Math.floor((L+R)/2);
            if(AS(M) == diff){
                break;
            }
            else if (AS(M) > diff) {
                R = M - 1;
            } else {
                L = M + 1;
            }
        }
        
        if(AS(M) <= diff){
            console.log(M);
        }
        if(AS(M) > diff){
            console.log(M-1);
        }
    }
}