/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    let startPQ = new PriorityQueue( 
        (a,b)=>{
            if(a[0] == b[0]){
                return a[1]-b[1];
            }
            return a[0] - b[0];
        }
    );

    let endPQ = new PriorityQueue( 
        (a,b)=>{
            if(a[1] == b[1]){
                return a[0]-b[0];
            }
            return a[1] - b[1];
        }
    );

    for(let event of events){
        startPQ.push(event);
        endPQ.push(event);
    }
    
    let ans = 0;
    let prevMax = 0;
    while(!startPQ.isEmpty()){
        let [A,B,C] = startPQ.pop();
        while( !endPQ.isEmpty() && endPQ.front()[1] < A ){
            let prev = endPQ.pop();
            prevMax = Math.max(prevMax,prev[2]);
        }
        ans = Math.max(ans,C+prevMax);
    }

    return ans;
};
