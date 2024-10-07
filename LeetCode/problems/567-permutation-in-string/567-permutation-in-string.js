/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length){return false;}
    
    let freq = _.countBy(s1);
    let currWindow = _.countBy(s2.slice(0,s1.length));

    let L = 0;
    let R = s1.length-1;
    while(R<s2.length-1){
        const charL = s2[L];
        const charR = s2[R+1];

        if( _.isEqual(freq, currWindow) ){ return true; }

        currWindow[charL] = (currWindow[charL]|0) - 1;
        if(currWindow[charL] == 0){ delete currWindow[charL]; }
        currWindow[charR] = (currWindow[charR]|0) + 1;

        L++;
        R++;
    }

    return _.isEqual(freq, currWindow);
};