/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    if (grid.length < 3 || grid[0].length < 3) {
        return 0;
    }

    function checkMagicSquare(row, col) {
        let nums = new Set();

        for (let I = 0; I < 3; I++) {
            for (let J = 0; J < 3; J++) {
                if (grid[row + I][col + J] < 1 || grid[row + I][col + J] > 9) {
                    return false;
                }
                nums.add(grid[row + I][col + J]);
            }
        }

        if (nums.size != 9) {
            return false;
        }

        let sums = new Set([
            _.sum([grid[row][col], grid[row][col + 1], grid[row][col + 2]]),
            _.sum([grid[row + 1][col], grid[row + 1][col + 1], grid[row + 1][col + 2]]),
            _.sum([grid[row + 2][col], grid[row + 2][col + 1], grid[row + 2][col + 2]]),

            _.sum([grid[row][col], grid[row + 1][col], grid[row + 2][col]]),
            _.sum([grid[row][col + 1], grid[row + 1][col + 1], grid[row + 2][col + 1]]),
            _.sum([grid[row][col + 2], grid[row + 1][col + 2], grid[row + 2][col + 2]]),

            _.sum([grid[row][col], grid[row + 1][col + 1], grid[row + 2][col + 2]]),
            _.sum([grid[row + 2][col], grid[row + 1][col + 1], grid[row][col + 2]])
        ]);

        if (sums.size !== 1) {
            return false;
        }

        return true;
    }

    let size = 3;
    let score = 0;
    for (let row = 0; row <= grid.length - size; row++) {
        for (let col = 0; col <= grid[0].length - size; col++) {
            if (checkMagicSquare(row, col)) {
                score++;
            }
        }
    }

    return score;
};