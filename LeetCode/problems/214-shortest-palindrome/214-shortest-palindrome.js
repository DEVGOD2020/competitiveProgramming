/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let length = s.length;
    let reverse = s.split("").reverse().join("");
    
    //worst case = rev + og str
    //CBA ABC
    //BA AB
    //A A

    //Delete middle point = prefix of rev instead of suffix
    for(let I = 0; I < s.length; I++){
        //Right to left prefix bruh?
        let prefixOG = s.substring(0,s.length-I);
        let suffixRev = reverse.substring(I,s.length);
        //console.log(suffixRev,prefixOG);

        //This is what is deleted
        if(suffixRev === prefixOG){
            return reverse.substring(0,I)+s;
        }
        
    }

    return "";
    
};

