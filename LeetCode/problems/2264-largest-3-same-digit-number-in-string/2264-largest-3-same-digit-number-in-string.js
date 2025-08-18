/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let arr = ["999","888","777","666","555","444","333","222","111","000"];
    for(let el of arr){
        if(num.includes(el)){return el;}
    }
    return "";
};
