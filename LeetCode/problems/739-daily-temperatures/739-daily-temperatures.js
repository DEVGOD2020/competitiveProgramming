/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let monoStack = [];
    let ans = new Array(temperatures.length).fill(0);

    for(let I = temperatures.length-1; I >= 0; I--){
        while(monoStack.length && temperatures[I] >= temperatures[monoStack[0]]){
            monoStack.shift();
        }

        if(monoStack.length === 0){ ans[I] = 0;}
        else{ans[I] = monoStack[0]-I;}

        monoStack.unshift(I);
    }

    return ans;
};

//ans
//0,1,1,0

//mono
//