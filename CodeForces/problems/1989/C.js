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
    const testcases = parseInt(readline());
    for(let t = 0; t<testcases; t++){
        let reviewersCount = parseInt(readline());
        let movies1 = readline().split(" ").map( el => parseInt(el)).slice(0,reviewersCount);
        let movies2 = readline().split(" ").map( el => parseInt(el)).slice(0,reviewersCount);

        let movie1Sum = 0;
        let movie2Sum = 0;
	let pos = 0;
	let neg = 0;
        for(let I = 0; I<reviewersCount; I++){
		//Cases where one persons movie review is worse then the other movie
		if(movies1[I] < movies2[I]){ movie2Sum += movies2[I]; }
		else if(movies1[I] > movies2[I]){ movie1Sum += movies1[I]; }
		else if(movies1[I] == -1 && movies2[I] == -1){ neg++;}
		else if(movies1[I] == 1 && movies2[I] == 1){ pos++; }
	}

	while(pos > 0){
		if(movie1Sum < movie2Sum){ movie1Sum++; }
		else{ movie2Sum++; }
		pos--;
	}

	while(neg > 0){
		if(movie1Sum < movie2Sum){ movie2Sum--; }
		else{ movie1Sum--; }
		neg--;
	}
    
        console.log( Math.min(movie1Sum, movie2Sum));
    }
}
