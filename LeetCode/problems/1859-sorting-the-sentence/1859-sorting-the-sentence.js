/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" ");

    arr.sort(function(a,b){
        return a[a.length-1] - b[b.length-1];
    });

    arr = arr.map( (el)=>el.slice(0,el.length-1));
    return arr.join(" ");
};