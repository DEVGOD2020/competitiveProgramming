class RideSharingSystem{
    constructor(){
        this.mySet = new Set();
        this.drivers = [];
        this.riders = [];
    }

    addRider(riderId){
        this.riders.push(riderId);
        this.mySet.add(riderId);
    }

    addDriver(driverId){
        this.drivers.push(driverId);
    }

    matchDriverWithRider(){
        if(this.riders.length > 0 && this.drivers.length > 0){
            while( 
                this.riders.length > 0 && 
                !this.mySet.has( this.riders[0]) 
            ){ this.riders.shift(); }
            if(this.riders.length == 0){return [-1,-1]; }
            return [this.drivers.shift(), this.riders.shift()];
        }
        return [-1,-1];
    }

    cancelRider(riderId){
        this.mySet.delete(riderId);
    }
}

/** 
 * Your RideSharingSystem object will be instantiated and called as such:
 * var obj = new RideSharingSystem()
 * obj.addRider(riderId)
 * obj.addDriver(driverId)
 * var param_3 = obj.matchDriverWithRider()
 * obj.cancelRider(riderId)
 */
