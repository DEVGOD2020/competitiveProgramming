let tri = function(n){
	return (n/2)*(n+1)
}

let div = function(n){
	let sum = 0;
	for(let I = 1; I*I<n; I++){
		if(n%I == 0){
			sum += 2;
		}
	}
	return sum;
}

let Z = 0;
while(div(tri(Z))<500){
	Z++;
}

console.log( tri(Z) );
