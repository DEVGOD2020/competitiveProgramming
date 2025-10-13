/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const N = heights.length;
    const M = heights[0].length;
    if (N == 1 && M == 1) { return [[0, 0]]; }
    
    const checkBounds = (row, col) => {
        return row >= 0 && col >= 0 && row < N && col < M
    };
    const checkBoth = (row, col) => {
        const val = heights[row][col];
        return (val & (1 << 18)) > 0 &&
            (val & (1 << 19)) > 0 &&
            (val & (1 << 20)) === 0;
    }
    const getTemp = (row, col) => {
        return heights[row][col] & ((1 << 18) - 1);
    }

    let ans = [];
    let ocean = [];

    for (let Z = 0; Z < N; Z++) {
        ocean.push([[Z, 0], heights[Z][0], 18]);
        ocean.push([[Z, M - 1], heights[Z][M - 1], 19]);
        heights[Z][0] |= (1 << 18);
        heights[Z][M - 1] |= (1 << 19);
    }

    for (let Z = 0; Z < M; Z++) {
        ocean.push([[0, Z], getTemp(0, Z), 18]);
        ocean.push([[N - 1, Z], getTemp(N - 1, Z), 19]);
        heights[0][Z] |= (1 << 18);
        heights[N - 1][Z] |= (1 << 19);
    }

    while (ocean.length) {
        let [c, h, o] = ocean.pop();
        const dirs = [
            [c[0] - 1, c[1]], [c[0], c[1] - 1],
            [c[0] + 1, c[1]], [c[0], c[1] + 1]
        ];
        for (let [row, col] of dirs) {
            if (checkBounds(row, col)) {
                let temp = getTemp(row, col);
                if ((heights[row][col] & (1 << o)) === 0) {
                    if (temp >= h) {
                        ocean.push([[row, col], temp, o]);
                        heights[row][col] |= (1 << o);
                    }
                }
                if (checkBoth(row, col)) {
                    ans.push([row, col]);
                    heights[row][col] |= (1 << 20);
                }
            }
        }
    }

    return ans;
};
