/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    return sentence.split(" ").map((el,I)=>{
        return /^[aeiouAEIOU]/.test(el) ? el+""+"ma"+"a".repeat(I+1) 
        : el.slice(1)+""+el[0]+"ma"+"a".repeat(I+1);
    }).join(" ");
};