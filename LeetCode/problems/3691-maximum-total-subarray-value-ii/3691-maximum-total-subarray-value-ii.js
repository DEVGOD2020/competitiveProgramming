/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let minZ = Array.from({length: 25+1},()=>new Array(nums.length));
    let maxZ = Array.from({length: 25+1},()=>new Array(nums.length));
    minZ[0] = [...nums];
    maxZ[0] = [...nums];
    for(let I = 1; I<=25; I++){
        for(let Z = 0; Z+(1<<I)<=nums.length; Z++){
            minZ[I][Z] = Math.min(minZ[I-1][Z], minZ[I-1][ Z+(1<<(I-1)) ] );
            maxZ[I][Z] = Math.max(maxZ[I-1][Z], maxZ[I-1][ Z+(1<<(I-1)) ] );
        }
    }

    let maxPQ = new MaxPriorityQueue((el)=>el[0]);
    let R = nums.length-1;
    for(let L = 0; L<nums.length; L++){
        let LOG = Math.floor(Math.log2(R-L+1));
        let A = Math.min(minZ[LOG][L], minZ[LOG][R - (1<<LOG) +1 ]);
        let B = Math.max(maxZ[LOG][L], maxZ[LOG][R - (1<<LOG) +1 ]);
        maxPQ.push( [B-A,L,R]);
    }
    
    let score = 0;
    for(let T = 0; T<k; T++){
        let [S,L,R] = maxPQ.pop();
        score += S;
            if(R>L){
            R--;
            let LOG = Math.floor(Math.log2(R-L+1));
            let A = Math.min(minZ[LOG][L], minZ[LOG][R - (1<<LOG) +1 ]);
            let B = Math.max(maxZ[LOG][L], maxZ[LOG][R - (1<<LOG) +1 ]);
            maxPQ.push( [B-A,L,R] );
        }
    }
    return score;
};