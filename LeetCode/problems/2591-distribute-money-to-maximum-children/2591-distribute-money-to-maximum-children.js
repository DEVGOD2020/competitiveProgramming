/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */

var distMoney = function(money, children) {
    money += -children;
    if(money < 0){ return -1;}

    //Best case, every child can get 8 dollars, no remainder
    if( Math.floor(money/7) === children && (money % 7) == 0){
        return children;
    }

    //Case where one child has remainder of 4 money, but everyone else has 8
    //One kid gives money way, then the other kid takes it, so its total children - 2
    //The remainder $4 child, and the child that gets the reminder childs extra money
    //8,8,4  //8,9,3
    if( Math.floor(money/7) === children-1 && (money % 7) == 3){
        return children-2;
    }

    //Otherwise, its either going to be childern - 1 or how many children can get 8 dollars
    return Math.min(children-1, Math.floor(money/7) );
};