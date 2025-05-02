/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let DP = Array.from(
        {length:2}, 
        ()=>new Array(dominoes.length).fill(0)
    );

    let L = 0;
    let R = dominoes.length-1;
    let left = 0;
    let right = 0;
    while(R>=0){
        if(dominoes[L] == "L" || right < 0){right=0}
        if(dominoes[L] == "R"){right=100000}
        right--;
        DP[0][L] = right;

        if(dominoes[R] == "L"){left=100000}
        if(dominoes[R] == "R" || left < 0){left=0}
        left--;
        DP[1][R] = left;
        
        L++;
        R--;
    }

    let arr = dominoes.split("");
    for(let I = 0; I<dominoes.length; I++){
        if(dominoes[I] === "."){
            if( DP[0][I] < DP[1][I] ){arr[I] = "L";}
            if( DP[0][I] > DP[1][I] ){arr[I] = "R";}
            if( DP[0][I] === DP[1][I] ){arr[I] = ".";}
        }
    }

    return arr.join("");
};