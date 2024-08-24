/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if(s.length < 2){
        return "";
    }

    let mySet = new Set(s);

    for(let mid = 0; mid<s.length; mid++){
        if(!mySet.has(s[mid].toLowerCase()) || !mySet.has(s[mid].toUpperCase())){
            let leftSide = longestNiceSubstring(s.substring(0,mid));
            let rightSide = longestNiceSubstring(s.substring(mid+1));

            return leftSide.length >= rightSide.length ? leftSide : rightSide;
        }
    }
    
    return s;
};