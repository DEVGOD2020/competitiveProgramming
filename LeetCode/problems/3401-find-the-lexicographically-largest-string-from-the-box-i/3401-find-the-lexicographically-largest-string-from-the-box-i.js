/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if(numFriends == 1){ return word;}
    let groupSize = (word.length-numFriends)+1;
    let ans = "";
    for(let I = 0; I<word.length; I++){
        let temp = word.substr(I,groupSize);
        if( temp >  ans){
            ans = temp;
        }
    }
    return ans;
};
