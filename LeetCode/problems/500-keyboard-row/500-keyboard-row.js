/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    let ans = [];
    for(let word of words){
        ans.push(word);
        let ID = 0;
        for(let chr of word){
            chr = chr.toLowerCase();
            if(ID == 0){
                if(row1.includes( chr )){ID = 1;}
                if(row2.includes( chr )){ID = 2;}
                if(row3.includes( chr )){ID = 3;}
            }else{
                if(row1.includes(chr) && ID != 1){ans.pop(); break;}
                if(row2.includes(chr) && ID != 2){ans.pop(); break;}
                if(row3.includes(chr) && ID != 3){ans.pop(); break;}
            }
        }
    }

    return ans;
};