/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = Array(n).fill(0).map( (el,index)=> {return 2*(index)+start} );
    return arr.reduce( (a,b)=>{return a^b}, 0);
};