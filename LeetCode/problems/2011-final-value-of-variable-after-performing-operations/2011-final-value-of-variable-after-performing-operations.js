/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce( 
        (sum,el) => sum + (el=="X++"||el=="++X"?1:-1),0
    );
};
