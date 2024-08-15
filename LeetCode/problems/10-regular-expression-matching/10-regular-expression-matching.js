/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
    let newP = '';
    let starAmount = 0;
    for(let chr of p){
        if(starAmount > 0 && chr=="*"){ continue; }
        else if(chr === '*'){ newP += chr; starAmount++; }
        else{newP += chr; starAmount = 0;}
    }

    const re = new RegExp(newP);
    let query = re.exec(s);
    if(query === null){
        return false;
    }
    
    return query && query[0] === s;
};