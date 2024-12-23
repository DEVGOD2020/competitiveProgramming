const N = 2000000;
const sieves = new Array(N).fill(true);
sieves[0] = false;
sieves[1] = false;

for(let I = 2; I*I<=N; I++){
    if(sieves[I]){
        for(let A = I*I; A<=N; A+=I){
            sieves[A] = false;
        }
    }
}

const score = sieves.reduce( (sum,el,I)=>el?sum+I:sum, 0);

console.log(score);