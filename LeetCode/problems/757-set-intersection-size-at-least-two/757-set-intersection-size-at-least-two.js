/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    intervals.sort( (a,b)=>{
        if(a[1]==b[1]){
            return b[0]-a[0];
        }
        return a[1]-b[1];
    });

    let first = -1;
    let second = -1;
    let score = 0;

    for(let [start,end] of intervals){
        let size = 0;
        if(start <= first && end >= first){size++;}
        if(start <= second && end >= second){size++;}
        
        if(size == 0){score+=2; first = end; second = end-1;}
        if(size == 1){score++; [first,second] = [end,first];}
    }
    
    return score;
};
