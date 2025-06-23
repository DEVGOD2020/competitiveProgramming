process.stdin.once('data', (data) => {
	let line = data.toString().trim();
	let arr = line.split(" ").map((el)=>Number(el));
	console.log( Math.max(...arr) - Math.min(...arr) );
});
