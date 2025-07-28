/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let myMap = new Map();
    for(let I = 0; I<order.length; I++){
        myMap.set( order[I], I);
    }

    for(let w = 0; w<words.length-1; w++){
        for(let I = 0; I<words[w].length; I++){
            if(words[w][I] == words[w+1][I]){
                continue;
            }
            if(I >= words[w+1].length){
                return false;
            }
            if(myMap.get(words[w][I]) > myMap.get(words[w+1][I]) ){
                return false;
            }
            break;
        }
    }

    return true;
};
