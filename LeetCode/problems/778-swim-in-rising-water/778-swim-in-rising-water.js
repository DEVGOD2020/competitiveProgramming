/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    const N = grid.length;
    if (N == 1) { return 0; }
    const checkBounds = (row, col) => {
        return row >= 0 && col >= 0 && row < N && col < N;
    };

    function bfs(t) {
        let visit = new Set();
        let q = [];

        if (grid[0][0] == grid[N - 1][N - 1]) { return true; }
        q.push([[0, 0], grid[0][0]]);

        while (q.length) {
            let [c, h] = q.pop();
            const dirs = [
                [c[0] - 1, c[1]],
                [c[0] + 1, c[1]],
                [c[0], c[1] - 1],
                [c[0], c[1] + 1]
            ];
            for (let [row, col] of dirs) {
                if (checkBounds(row, col)) {
                    if (visit.has((row * N) + col)) {
                        continue;
                    }
                    if (h <= t && grid[row][col] <= t) {
                        if (grid[row][col] == grid[N - 1][N - 1]) {
                            return true;
                        }
                        q.push([[row, col], grid[row][col]]);
                    }
                    visit.add((row * N) + col);
                }
            }
        }
        return false;
    }

    let L = 0;
    let R = (grid.length ** 2) - 1;
    let M = Math.floor((L + R) / 2);
    while (L <= R) {
        if (bfs(M)) { R = M - 1; }
        else { L = M + 1; }
        M = Math.floor((L + R) / 2);
    }

    return L;
};
