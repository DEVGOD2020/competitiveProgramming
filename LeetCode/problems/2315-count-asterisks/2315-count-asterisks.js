/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    return s.split("").reduce(
        (state,el)=>{
            if(el=="|"){state[0]=!state[0]}
            if(el=="*" && state[0]){state[1]++}
            return [state[0],state[1]];
        },[true,0])[1];
};