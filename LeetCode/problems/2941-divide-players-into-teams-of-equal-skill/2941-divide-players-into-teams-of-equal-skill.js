/**
 * @param {number[]} skill
 * @return {number}
 */

var dividePlayers = function(skill) {
    let freq = _.countBy(skill);
    let teamSize = (skill.length / 2);
    let targetSkill = _.sumBy(skill)/teamSize;

    let ans = 0;
    for(let s of skill){
        let target = targetSkill-s;
        if(!freq[target]){ return -1; }
        if(freq[target] <= 0){ return -1; }
        freq[target]--;
        ans += s*target;
    }

    return ans/2;
}