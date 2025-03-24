/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const freqPlate = _.countBy(
        licensePlate.toLowerCase().replaceAll(/[\d\s]/g,'')
    );

    words.sort( (a,b)=>a.length-b.length);

    for(let word of words){
        let temp = {...freqPlate};
        for(let chr of word){
            if(temp[chr] !== undefined){
                temp[chr]--;
            }
        }

        if( Object.values(temp).every(v => v <= 0) ){
            return word;
        }
    }
};