/**
 * @param {number} l
 * @param {number} r
 * @param {string} directions
 * @return {number}
 */
var countGoodIntegersOnPath = function(l, r, dirs) {
    let search = function(digits){
        let memo = new Map();
        let blah = function(pos=0,tight=1,goal=0,dir=0,prev=-1){
            if(pos == digits.length){ return 1; }

            let key = `${pos},${tight},${goal},${dir},${prev}`;
            if( memo.has(key)){ return memo.get(key); }

            let res = 0;
            let K = tight ? digits[pos] : 9;
            for(let D = 0; D<=K; D++){
                let newTight = digits[pos] == D ? tight : 0;
                if(pos == goal){
                    if(prev <= D){
                        res += blah(
                            pos+1, newTight,
                            goal+(dirs[dir]=="D"?4:1),
                            dir+1, D
                        );
                    }
                }else{
                    res += blah( 
                        pos+1, newTight,
                        goal, dir, prev
                    );
                }
            }

            memo.set(key,res);
            return res;
        }
        return blah();
    }

    let L = ((l-1).toString().padStart(16,"0")).split("").map((el)=>Number(el));
    let R = ((r).toString().padStart(16,"0")).split("").map((el)=>Number(el));
    return search(R) - search(L);
};
