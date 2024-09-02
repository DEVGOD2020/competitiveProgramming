/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const sum = _.sum(chalk);
    k += -sum*Math.floor(k/sum);
    let I = 0;
    while(k>0){
        if(I>=chalk.length){I = 0;}
        k += -chalk[I];
        if(k<0){return I;}
        I++;
    }
    return I;
};