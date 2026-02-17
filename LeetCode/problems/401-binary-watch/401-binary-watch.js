/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let arr = [];
    for(let I = 0; I<1024; I++){
        let minute = I&63;
        let hour = I>>6;
        if(hour > 11 || minute > 59){continue;}
        let bitCount = I.toString(2).split("1").length-1;
        if(bitCount !== turnedOn){continue;}
        arr.push(hour + (minute < 10 ?":0":":") + minute);
    }
    return arr;
};
