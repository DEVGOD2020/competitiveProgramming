let memo = new Map();
let blah = function(x,y){
	if(x==1 || y==1){return 1;}
	if(memo.has(x*21+y)){
		return memo.get(x*21+y);
	}
	memo.set( x*21+y, blah(x-1,y)+blah(x,y-1));
	return memo.get(x*21+y);
}

console.log( blah(21,21) );
