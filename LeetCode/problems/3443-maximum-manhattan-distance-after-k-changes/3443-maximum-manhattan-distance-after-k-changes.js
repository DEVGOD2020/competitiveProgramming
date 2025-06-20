/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    let freq = _.countBy(s);
    let myMap = new Map();
    myMap.set('N',0); myMap.set('E',0); myMap.set('S',0); myMap.set('W',0);
    let score = 0;
    for(let I = 0; I<s.length; I++){
        let chr = s[I];
        myMap.set(chr, myMap.get(chr)+1);
        let upDown = Math.abs(myMap.get('N')-myMap.get('S'));
        let leftRight = Math.abs(myMap.get("E") - myMap.get("W") );
        let curDis = upDown+leftRight
        let dis = Math.min(I+1, curDis+2*k);
        score = Math.max(score, dis);

    }
    return score;
};
