/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

const alpha = "abcdefghijklmnopqrstuvwxyz";
var nextGreatestLetter = function(letters, target) {
    for(const A of alpha){
        if(A>target && letters.includes(A)){
            return A;
        }
    }
    return letters[0];
};