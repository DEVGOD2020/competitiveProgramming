let blah = function(n){
    if(n <= 1n){
        return n
    }
    return (blah(n-1n)+n**n)%(10n**10n);
}

console.log( blah(1000n) );