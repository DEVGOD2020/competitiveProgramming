/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let count = _.countBy(s);
    
    let maxOdd = Math.max(
        ...Object.values(count).filter( 
            (el)=> el%2 == 1
        )
    );

    let minEven = Math.min(
        ...Object.values(count).filter( 
            (el)=> el%2 == 0 
        )
    );
    
    return maxOdd - minEven;
};
