/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    return Number(
        BigInt("0b"+
            _.range(1,n+1)
            .reduce( (str,el)=>str+el.toString(2),"")
            ,2
        )%1000000007n
    )
};
