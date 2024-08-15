/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
    let meme = new Map();
    let helper = function (query_row, query_glass) {
        //Center Cup
        if (query_row === 0 && query_glass === 0) {
            meme.set("0a0",poured);
            return poured;
        }
        //Out of Bounds
        if (query_row < 0 || query_glass < 0) {
            return 0;
        }

        if(meme.has(`${query_row}a${query_glass}`)){
            return meme.get(`${query_row}a${query_glass}`);
        }

        //Overfilled added of each upper left and right cup
        let leftCup = helper(query_row - 1, query_glass);
        let rightCup = helper(query_row - 1, query_glass - 1);
        leftCup = Math.max((leftCup-1)/2,0); 
        rightCup = Math.max((rightCup-1)/2,0);

        let myCup = leftCup + rightCup;
        meme.set(`${query_row}a${query_glass}`, myCup);

        return meme.get(`${query_row}a${query_glass}`);
    }

    let ans = helper(query_row, query_glass);
    return ans > 1 ? 1 : ans;

};