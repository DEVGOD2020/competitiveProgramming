/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let pen = 0;
    for(let I = 0; I<customers.length; I++){
        if(customers[I] == "N"){
            pen++;
        }
    }
    
    let ans = [pen,0];
    for(let I = 1; I<=customers.length; I++){
        if(customers[I-1] == "Y"){
            pen--;
        }else{
            pen++;
        }
        if(pen < ans[0]){
            ans = [pen,I];
        }
    }

    return ans[1];
};
