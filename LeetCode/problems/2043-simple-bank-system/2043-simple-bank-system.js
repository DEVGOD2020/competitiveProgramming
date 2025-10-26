class Bank{
    constructor(bal){
        this.bal = bal;
    }
    valid(a1,a2=this.bal.length){
        return ( a1 <= this.bal.length && a2 <= this.bal.length );
    }
    transfer(a1,a2,amount){
        if( this.valid(a1,a2) ){
            if( this.bal[a1-1] >= amount){
                this.bal[a1-1] += -amount;
                this.bal[a2-1] += amount;
                return true;
            }
        }
        return false;
    }
    deposit(a1, amount){
        if( this.valid(a1) ){
                this.bal[a1-1] += amount;
                return true;
        }
        return false;
    }
    withdraw(a1,amount){
        if( this.valid(a1) ){
            if( this.bal[a1-1] >= amount){
                this.bal[a1-1] += -amount;
                return true;
            }
        }
        return false;
    }
}
