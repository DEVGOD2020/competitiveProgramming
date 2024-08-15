/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let newArr = [];
    let monoStack = [];
    let max = 0;
    for(let I=height.length-1; I>=0; I--){
        if(height[I] > max){max = height[I];}
        while(monoStack.length && max > monoStack[0]){
            monoStack.shift();
        }
        newArr[I] = monoStack[0] ? monoStack[0] : -1;
        monoStack.unshift( max );
    }

    let waterLevel = 0;

    monoStack = [];
    max = 0;
    for(let I=0; I<height.length; I++){
        if(height[I] > max){max = height[I];}
        while(monoStack.length && max > monoStack[0]){
            monoStack.shift();
        }
        let val = monoStack[0] ? monoStack[0] : -1;
        if(newArr[I] > 0 && val > 0){
            waterLevel += Math.min(newArr[I],val)-height[I];
        }
        monoStack.unshift( max );
    }

    return waterLevel;
    
};