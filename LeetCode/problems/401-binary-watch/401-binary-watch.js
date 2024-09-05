/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let hammingWeight = function(n) {
        let sum = 0;
        for(let I = 0; I < 32; I++){
            sum += (n>>I)&1;
        }
        return sum;
    };

    let ans = [];
    for(let hour = 0; hour<12; hour++){
        for(let minute = 0; minute<60; minute++){
            let key = hammingWeight(hour)+hammingWeight(minute);
            let str = hour+":"+minute;
            if(minute < 10){
                str = hour+":0"+minute;
            }
            if(key === turnedOn){
                ans.push(str);
            }
        }
    }

    return ans;
};