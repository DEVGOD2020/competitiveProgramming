/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */

var maximumBeauty = function(items, queries) {
    items =  _.sortBy(items, [0,1]).map( ( (maxB = 0) => ([p, b]) => [p, maxB = Math.max(maxB, b)] )() );
    return queries.map( (el)=>items[_.sortedLastIndexBy(items, [el], item=>item[0])-1]?.[1]||0 );  
}