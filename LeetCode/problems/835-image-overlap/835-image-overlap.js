/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let A = [];
    let B = [];
    for(let row = 0; row<img1.length; row++){
        for(let col = 0; col<img2.length; col++){
            if(img1[row][col] == 1){A.push([row,col]);}
            if(img2[row][col] == 1){B.push([row,col]);}
        }
    }
    let myMap = new Map();
    let ans = 0;
    for(let a of A){
        for(let b of B){
            let ID = ""+(a[0]-b[0])+","+(a[1]-b[1]);
            myMap.set( ID, (myMap.get(ID)??0)+1)
            ans = Math.max(ans,myMap.get(ID));
        }
    }
    return ans;
};