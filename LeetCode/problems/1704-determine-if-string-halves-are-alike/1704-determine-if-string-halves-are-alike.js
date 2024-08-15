/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowelCount = function(a){
        let arr = a.match(/[aeiouAEIOU]/g);
        if(arr == null){return 0;}
        return arr.length;
    }
    return vowelCount(s.slice(0,s.length/2)) == vowelCount(s.slice(s.length/2,s.length));
};