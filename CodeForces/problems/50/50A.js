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
	let input = readline().split(" ");
	let row = parseInt(Math.min(...input));
	let col = parseInt(Math.max(...input));
	
	let dominos = Math.floor( (row*col)/2 );
	console.log(dominos);
}
