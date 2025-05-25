/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let myMap = new Map();
    let score = 0;
    for(let word of words){
        let swapWord = word[1] + word[0];
        if(myMap.get(word) > 0){
            score += 4;
            myMap.set(word, myMap.get(word) - 1);
        }else{
            myMap.set( swapWord, (myMap.get(swapWord)|0) + 1 );
        }
        
    }

    
    return score + Array.from(myMap.entries()).some( 
        (el)=> el[0][0] === el[0][1] && el[1] % 2 == 1
    ) * 2;
};
