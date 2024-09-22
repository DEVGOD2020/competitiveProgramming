/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ans = [];

    let helper = function(I=0, curr=[]){
        if(curr.length == 4 && I==s.length){
            ans.push(curr.join("."));
            return;
        }

        for(let size=1; size<=3; size++){
            if(I+size>s.length){break;}
            const line = s.substring(I,I+size);

            if(line.length >= 2 && line[0]=='0'){
                continue;
            }
            if(parseInt(line) <= 255){
                curr.push(line);
                helper(I+size,curr);
                curr.pop();
            }
        }
    }

    helper();
    return ans;
};