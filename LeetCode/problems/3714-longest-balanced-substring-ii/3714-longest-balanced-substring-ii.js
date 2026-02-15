/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    if(s.length == 1){return 1;}

    let a = 0;
    let b = 0;
    let c = 0;

    let myMap = new Map();
    let score = 0;
    let states = []
    for(let L = 0; L<=s.length; L++){
        states = [
            1e10 + (a-b)*10**5 + (a-c),

            2e10 + (a-b)*10**5 + (c),
            3e10 + (b-c)*10**5 + (a),
            4e10 + (c-a)*10**5 + (b),

            5e10 + (a)*10**5 + (b),
            6e10 + (b)*10**5 + (c),
            7e10 + (c)*10**5 + (a)
        ];

        for(let state of states){
            if(myMap.has(state)){
                score = Math.max(score, L-myMap.get(state) );
            }else{
                myMap.set(state,L);
            }
        }

        if(s[L] == 'a'){a++;}
        if(s[L] == 'b'){b++;}
        if(s[L] == 'c'){c++;}
    }

    return score;
};
