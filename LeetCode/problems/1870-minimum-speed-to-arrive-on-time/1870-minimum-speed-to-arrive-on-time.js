/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
let minSpeedOnTime = function(dist, hour) {

    let L = 1;
    let R = 10**7;
    let M = Math.floor((L+R)/2);
    
    while(L<=R){
        const train1 = canArriveOnTime(dist,hour,M-1);
        const train2 = canArriveOnTime(dist,hour,M);
        if( train1==false && train2==true){
            return M;
        }

        if( !train2 ){
            L = M+1;
            M = Math.floor((L+R)/2);
        }else{
            R = M-1;
            M = Math.floor((L+R)/2);
        }
    }

    return -1;
};

let canArriveOnTime = function(dist,hour,speed){
    if(speed == 0){return false;}
    const myDist = [...dist];
    let myHour = 0;
    let lastTrain = myDist.pop();
    
    let I = 0;
    let size = myDist.length;
    while(I<size){
        myHour += Math.ceil(myDist[I]/speed);
        I++;
    }

    myHour += lastTrain/speed;
    return (myHour<=hour);
}