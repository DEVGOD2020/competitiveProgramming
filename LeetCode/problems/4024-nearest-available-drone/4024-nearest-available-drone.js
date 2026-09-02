/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function(drones, target) {
    let ans = [-1,Infinity];
    for(let I = 0; I<drones.length; I++){
        let [X,Y,D] = drones[I];
        let dis = Math.abs( X - target[0]) + Math.abs( Y - target[1])
        if( dis <= D ){
            if(dis < ans[1]){
                ans = [I,dis]
            }
        }
    }
    return ans[0];
};