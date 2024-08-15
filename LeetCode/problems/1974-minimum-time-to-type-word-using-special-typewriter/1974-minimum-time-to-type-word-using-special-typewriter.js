/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let pointer = 97;
    let time = 0;

    for(let letter of word){
        let target = Math.abs( (letter.charCodeAt(0)-pointer) );
        let inverseTarget = Math.abs( (26-(letter.charCodeAt(0)-pointer)) )%25;

        console.log(letter+" "+target+" "+inverseTarget);

        time += Math.min(target,inverseTarget);

        pointer = 97+(letter.charCodeAt(0)-97);
        time++;
    }

    return time;
    
};