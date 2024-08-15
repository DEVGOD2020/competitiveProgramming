/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort(function(a,b){return a-b});
    let myMap = new Map()
    for(let num of nums){
        if(!myMap.has(num)){
            myMap.set(num,0);
        }
        myMap.set(num,myMap.get(num)+1);
    }

    let score = 0;
    let min = Math.min(...nums);
    let max = Math.max(...nums)+1;
    for(let num = min; num<=max; num++){
        if(num == max){
            let val = (myMap.get(num)|0)-1;
            if(val < 0){break;}
            score += Math.floor(val/2)*(val+1)
        }
        if( (myMap.get(num)|0) > 1){
            let duplicates = myMap.get(num)-1
            score += duplicates;
            myMap.set(num+1, duplicates+(myMap.get(num+1)|0) );
            myMap.set(num, 1);
        }
    }

    return score;
};