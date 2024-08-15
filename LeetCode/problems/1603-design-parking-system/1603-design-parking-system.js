/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigCars = big;
    this.mediumCars = medium;
    this.smallCars = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType == 1){
        if(this.bigCars == 0){
            return false;
        }
        this.bigCars += -1;
    }
    else if(carType == 2){
        if(this.mediumCars == 0){
            return false;
        }
        this.mediumCars += -1;
    }
    else if(carType == 3){
        if(this.smallCars == 0){
            return false;
        }
        this.smallCars += -1;
    }
    return true;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */