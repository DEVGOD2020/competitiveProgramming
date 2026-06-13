/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let myMap = new Map();

    let helper = function(pos=0,tight=true,prev=-1,prevprev=-1,start=false,peak=0){
        if(pos == num1.length){ return peak; }
        let key = `${100000*pos+1000*prev+prevprev},${tight},${peak}`;
        if(myMap.has(key)){
            return myMap.get(key);
        }
        let ans = 0;
        for(let I = 0; I<=9; I++) {
            if(tight && I>Number(num1[pos])){break;}
            let newTight = true;
            if(tight == false || I<Number(num1[pos])){
                newTight = false;
            }

            let newStart = false;
            if(I>0 || start){newStart=true;}

            let newPeak = peak;
            let newPrevPrev = prevprev;
            let newPrev = prev;
            if(newStart){
                if(prev >= 0 && prevprev >= 0){
                    if(prev>prevprev && prev>I){
                        newPeak++;
                    }
                    if(prev<prevprev && prev<I){
                        newPeak++;
                    }
                }
                newPrevPrev = prev;
                newPrev = I;
            }

            ans += helper(
                pos+1,
                newTight,
                newPrev,
                newPrevPrev,
                newStart,
                newPeak
            );
        }

        myMap.set(key, ans);
        return ans;
    }
    num1 = ""+(num1-1);
    let A = helper();
    num1 = ""+(num2);
    myMap = new Map();
    let B = helper();
    return B-A;
};