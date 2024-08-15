/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    //Check if strings length dont match, cant be a buddy string
    if(s.length !== goal.length){return false;}
    
    //if s is same as goal, check if it was duplicate chars
    if(s === goal){
        const mySet = new Set(s);
        return mySet.size < s.length;
    }

    //Check if more than one needs to change char
    const hash = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){hash.push(i);}
        if(hash.length > 2){return false;}
    }

    return hash.length === 2 && 
    s[hash[0]] === goal[hash[1]] && 
    s[hash[1]] === goal[hash[0]]
    ;
};