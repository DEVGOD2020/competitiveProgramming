class Spreadsheet {
    constructor(rows) {
        this.map = new Map();
    }
    setCell(cell, value){
        this.map.set(cell,value);
    }
    resetCell(cell){
        this.map.set(cell,0);
    }
    getValue(formula){
        let [A,B] = formula.slice(1,formula.length).split("+"); 
        let newA = Number(A)||-1; 
        let newB = Number(B)||-1;
        if(newA === -1){newA = this.map.get(A)||0;}
        if(newB === -1){newB = this.map.get(B)||0;}
        return newA + newB;
    }
}
