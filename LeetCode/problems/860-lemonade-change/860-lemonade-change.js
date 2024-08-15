/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let cashBox = new Map();
    cashBox.set(5,0);
    cashBox.set(10,0);
    cashBox.set(20,0);
    for(let bill of bills){
        cashBox.set( bill, cashBox.get(bill)+1 );
        let changeBack = bill-5;
        while(changeBack > 0){
            while(changeBack >= 10 && cashBox.get(10) > 0){
                changeBack += -10;
                cashBox.set( 10, cashBox.get(10)-1 )
            }
            while(changeBack >= 5 && cashBox.get(5) > 0){
                changeBack += -5;
                cashBox.set( 5, cashBox.get(5)-1 )
            }
            if(changeBack > 0){
                return false;
            }
        }
    }
    return true;
};