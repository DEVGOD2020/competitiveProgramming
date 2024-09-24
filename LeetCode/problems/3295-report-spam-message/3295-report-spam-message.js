/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    let mySet = new Set(bannedWords);
    let score = 0;
    for(let word of message){
        if(mySet.has(word)){
            score++;
            if(score > 1){
                return true;
            }
        }
    }
    return false; 
};