/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let myMap = new Map();
    const W = words[0].length;
    for(let word of words){
        myMap.set(word, (myMap.get(word)|0)+1);
    }
    let ans = [];
    for(let A = 0; A<W; A++){
        let tempMap = new Map();
        let L = A;
        let count = 0;
        for(let B = A; B+W<=s.length; B+=W){
            let word = s.slice(B,B+W);
            if(myMap.has( word )){
                tempMap.set(word,(tempMap.get(word)|0)+1);
                count++;
                while(tempMap.get(word)>myMap.get(word)){
                    let pastWord = s.slice(L,L+W);
                    tempMap.set(pastWord,(tempMap.get(pastWord)|0)-1);
                    L += W;
                    count--;
                }
                if(count==words.length){ans.push(L)}
            }else{
                count = 0;
                L = B+W;
                tempMap = new Map();
            }
        }
    }
    return ans;
};