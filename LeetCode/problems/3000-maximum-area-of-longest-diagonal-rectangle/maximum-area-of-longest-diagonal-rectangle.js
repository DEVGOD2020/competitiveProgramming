/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let diag = 0;
    let area = 0;
    for(let [X,Y] of dimensions){
        let tempD = Math.sqrt(X**2 + Y**2)
        let tempArea = X*Y;
        if(tempD > diag){
            diag = tempD;
            area = tempArea;
        }else if(tempD == diag){
            area = Math.max(area,tempArea);
        }
    }
    return area;
};
