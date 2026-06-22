/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    return batteryPercentages.reduce( 
        (sum,el)=> el-sum>0?sum+1:sum,0
    );
};