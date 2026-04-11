/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    return (
        salary.reduce((sum,el)=>sum+el,0)-
        Math.max(...salary)-
        Math.min(...salary)
    )/(salary.length-2);
};
