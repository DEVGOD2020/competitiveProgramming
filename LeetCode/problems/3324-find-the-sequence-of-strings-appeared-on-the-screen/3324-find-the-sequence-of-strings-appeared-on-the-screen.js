/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    
    let ans = [];
    let helper = function(I,str=[]){
        if(I == target.length){
            return 0;
        }

        let val = 97;
        while(str[I] !== target[I]){
            str[I] = String.fromCharCode(val);
            ans.push(str.join(""));
            val++;
        }

        return helper(I+1, str);
    }

    helper(0);

    return ans;
};