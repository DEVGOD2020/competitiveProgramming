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
	const topLine = readline();
	const racerAmount = parseInt(topLine.split(" ")[0]);
	const kthPlace = parseInt(topLine.split(" ")[1]) - 1;

	const arr = readline().split(" ").map(
		(el) => parseInt(el)
	 );
	arr.sort(function(a,b){return b-a;});
	const goal = arr[kthPlace];

	let I = 0;
	let score = 0;
	while(I<arr.length){
		if( arr[I] >= goal && arr[I] > 0){
			score++;
		}
		I++;
	}

	console.log(score);
}
