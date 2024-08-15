/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;

    const secretMap = {};
    const guessMap = {};
    for(let I = 0; I<guess.length; I++){
        const s = parseInt(secret[I]);
        const g = parseInt(guess[I]);
        if(s === g){ bulls++; }
        else{
            if(secretMap[s] == undefined){secretMap[s] = 0;}
            if(guessMap[g] == undefined){guessMap[g] = 0;}
            secretMap[ s ]++;
            guessMap[ g ]++;
        }
    }

    for(let I=0; I < 10; I++){
        let val = Math.min( secretMap[I], guessMap[I]);
        cows += val ? val : 0;
    }
    

    return `${bulls}A${cows}B`;
};