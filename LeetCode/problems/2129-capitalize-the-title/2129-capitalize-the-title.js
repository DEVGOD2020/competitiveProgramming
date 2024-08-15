/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let s = title.split(" ");
    for(let el in s){
        if(s[el].length > 2){
            s[el] = s[el][0].toUpperCase()+s[el].slice(1).toLowerCase();
        }else{
            s[el] = s[el].toLowerCase();
        }
    }
    return s.join(" ");
};