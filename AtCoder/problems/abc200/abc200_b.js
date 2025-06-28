const data = require('fs').readFileSync(0,'utf8').trim();

let [N,K] = data.split(" ");

for(let I = 0; I<K; I++){
	let numN = Number(N);
	if(numN%200 == 0){
		N = numN/200;
	}else{
		N = N + "200";
	}
}

console.log(N);

