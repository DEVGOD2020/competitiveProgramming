/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const FLAT_GRID = grid.flat();
    const SIZE = FLAT_GRID.length;
    const BLAH = grid[0].length;
    return _.chunk(
        FLAT_GRID.slice(SIZE-(k%SIZE),SIZE).concat(
            FLAT_GRID.slice(0,SIZE-(k%SIZE) )
        ), BLAH
    );
};
