/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */

var distMoney = function(money, children) {
    if(money < children){
        return -1;
    }
    //24
    //8,8,8

    //Inf
    //8,8,Inf-8
    if(money <= 8){
        return 0;
    }

    if(money > children*8){ return children-1; } 
    if(money == children*8){ return children; }

    if(money < children*8){
        let rem = money%8;
        let child = Math.floor(money/8);
        
        console.log(rem,child,money,children)

        let ans = child-(children-child);
        console.log(ans);
        if(ans < 0){ans = 0;}
        return ans;
    }

    return -1;
};