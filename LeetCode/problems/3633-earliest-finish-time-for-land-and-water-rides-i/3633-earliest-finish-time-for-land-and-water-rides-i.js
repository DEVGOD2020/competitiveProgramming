/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let minLandFinish = landStartTime.reduce((sum,el,I)=>sum=Math.min(sum,el+landDuration[I]),Infinity);
    let minWaterFinish = waterStartTime.reduce((sum,el,I)=>sum=Math.min(sum,el+waterDuration[I]),Infinity);
    
    return Math.min(
        landDuration.reduce((sum,el,I)=>sum=Math.min(sum, el+Math.max(minWaterFinish,landStartTime[I]) ),Infinity),
        waterDuration.reduce((sum,el,I)=>sum=Math.min(sum, el+Math.max(minLandFinish,waterStartTime[I]) ),Infinity)
    );
};