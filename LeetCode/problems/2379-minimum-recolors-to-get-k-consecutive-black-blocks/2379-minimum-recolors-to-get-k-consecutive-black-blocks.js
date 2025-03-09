/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let L = 0;
    let R = k;
    let prefix = blocks.slice(0,R).split("").reduce( (sum,el)=>sum+=+(el=="W"),0);
    let ops = prefix;

    while(R<blocks.length){
        prefix -= +(blocks[L]=="W");
        prefix += +(blocks[R]=="W");
        
        ops = Math.min(ops,prefix);

        L++;
        R++;
    }

    return ops;
};