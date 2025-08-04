/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let myMap = new Map();
    let L = 0;
    let R = 0;
    let ans = 0;
    while(R<fruits.length){
        myMap.set(fruits[R], (myMap.get(fruits[R])|0) + 1);
        while(L<R && myMap.size > 2){
            myMap.set(fruits[L], myMap.get(fruits[L])-1 );
            if(myMap.get(fruits[L]) == 0){
                myMap.delete(fruits[L] );
            }
            L++;
        }
        ans = Math.max(ans, R-L+1);
        R++;
    }

    return ans;
};
