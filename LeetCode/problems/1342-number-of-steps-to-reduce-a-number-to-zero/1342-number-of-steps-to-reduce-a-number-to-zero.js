/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let step = 0;
    while(num > 0){
        if(num%2 === 1){
            num+=-1;
        }else{
            num = num/2;
        }
        step++;
    }
    return step;
};