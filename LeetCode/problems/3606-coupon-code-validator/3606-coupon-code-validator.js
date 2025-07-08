/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    let cat = new Set(["electronics", "grocery", "pharmacy", "restaurant"]);
    return (_.zip(code,businessLine, isActive)
        .filter( (el)=> el[0].match(/^[a-zA-Z0-9_]+$/g) )
        .filter( (el)=> cat.has(el[1]) ) 
        .filter( (el)=>el[2]))
        .sort( (a,b)=> {
            if(a[1][0] === b[1][0]){
                return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
            }
            return a[1][0] < b[1][0] ? -1 : a[1][0] > b[1][0] ? 1 : 0;
        })
        .map( (el)=>el[0]);
};
