/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    if(sentence1.length < sentence2.length){
        return areSentencesSimilar(sentence2, sentence1);
    }

    let arr1 = sentence1.split(" ");
    let arr2 = sentence2.split(" ");

    let L = 0;
    let R1 = arr1.length-1;
    let R2 = arr2.length-1;

    //Prefix Length left to right move
    while(L < arr1.length && arr1[L] === arr2[L]){
        L++;
    }

    //Suffix Length from Right to left move, 
    //different arr lengths, different R pointers
    //R2
    while(R1 >= 0 && arr1[R1] === arr2[R2]){
        R1--;
        R2--;
    }

    //Pointers pass, either prefix is larger then suffix
    //suffix is larger then prefix
    //Pointers pass = 
    console.log(L,R2);
    return R2 < L;

};