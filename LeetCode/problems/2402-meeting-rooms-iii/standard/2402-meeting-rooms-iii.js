/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    const roomPQ = new PriorityQueue( (a,b)=> {
        if(a[0] == b[0]){
            return a[1]-b[1];
        }
        return a[0]-b[0];
    });
    for(let I = 0; I<n; I++){
        roomPQ.push([-1, I]);
    }

    meetings.sort( (a,b)=>a[0]-b[0]);

    const roomScores = new Uint16Array(n);

    let max = 0;
    let ans = 100;
    for(let I = 0; I<meetings.length; I++){
        const start = meetings[I][0];
        const dur = meetings[I][1]-meetings[I][0];
        
        for(let T = 0; T<n && roomPQ.front()[0] < start; T++){
            let [prevEnd, roomNum] = roomPQ.pop();
            roomPQ.push([start,roomNum]);
        }

        let [prevEnd, roomNum] = roomPQ.pop();
        roomPQ.push( [ Math.max(prevEnd, start)+dur,roomNum] );

        roomScores[roomNum]++;
        if(roomScores[roomNum] > max){
            max = roomScores[roomNum];
            ans = roomNum;
        }
        if(roomScores[roomNum] == max && roomNum < ans){
            ans = roomNum;
        }
    }

    return ans;
};
