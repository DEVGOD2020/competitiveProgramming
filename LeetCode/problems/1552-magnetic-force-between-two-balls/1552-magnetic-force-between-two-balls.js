/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    function space_between(bruh){
        let myPos, prevPos = position[0];
        balls = 1;

        for(I = 1; I<position.length; I++){
            myPos = position[I];
            if(myPos - prevPos >= bruh){
                balls++;
                prevPos = myPos;
            }
            if(balls === m){
                return true;
            }
        }
        return false;
    }

    function binarySearch(){
        let L = 1;
        let R = position[position.length-1]-position[0];
        let ans = 0;
        while(L <= R){
            let mid = Math.floor((L+R)/2);
            if(space_between(mid)){
                ans = mid;
                L = mid+1;
            }else{
                R = mid-1;
            }
        }

        return ans;
    }

    position.sort(function(a,b){return a-b;})

    return binarySearch();
};