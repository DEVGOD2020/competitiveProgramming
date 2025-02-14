/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    
    let countDigits = function(num){
        let score = 0;
        while(num > 0){
            score += num%10;
            num = Math.floor(num/10);
        }
        return score;
    }

    let myMap = new Map();

    let max = -1;
    for(let num of nums){
        const key = countDigits(num);
        if( !myMap.has( key ) ){
            myMap.set( key, []);
        }

        if(myMap.get(key).length == 2){
            if( myMap.get(key)[0] < myMap.get(key)[1]){
                myMap.get(key).shift();
                myMap.get(key).unshift(num);
            }else{
                myMap.get(key).pop();
                myMap.get(key).push(num);
            }
            max = Math.max(max, myMap.get(key)[0]+myMap.get(key)[1])
        }else{
            myMap.get(key).push(num);
            if(myMap.get(key).length == 2){
                max = Math.max(max, myMap.get(key)[0]+myMap.get(key)[1])
            }
        }
    }

    return max;
};