/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let myMap = new Map();
    for(let L = 0; L<list1.length; L++){
        myMap.set( list1[L], L);
    }

    let score = Infinity;
    let ans = [];
    for(let R = 0; R<list2.length; R++){
        if(myMap.has(list2[R])){
            const indexSum = R + myMap.get(list2[R]);
            if(score == indexSum){
                ans.push(list2[R]);
            }else if(score > indexSum ){
                ans = [list2[R]];
                score = indexSum;
            }
        }
    }

    return ans;
};