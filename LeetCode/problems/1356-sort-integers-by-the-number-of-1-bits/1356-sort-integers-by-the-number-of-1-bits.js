/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort( 
        (a,b)=> {
            const aBits = a.toString(2).split("1").length-1;
            const bBits = b.toString(2).split("1").length-1;
            if(aBits == bBits){
                return a-b;
            }
            return (aBits - bBits);
        } );
};
