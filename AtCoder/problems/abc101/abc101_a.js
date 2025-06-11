process.stdin.once('data', (data) => {
	let line = data.toString().trim();
	let score = 0;
	for(let chr of line){
		if(chr === "+"){
			score++;
		}else{
			score--;
		}
	}
	console.log(score);
});
