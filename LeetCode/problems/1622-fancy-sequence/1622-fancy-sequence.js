const MOD = 1000000007;
const N = 1e5;

function mulMod(a, b, m) {
    let res = 0;
    a = a % m;
    while (b > 0) {
        if (b % 2 === 1) {
            res = (res + a) % m;
        }
        a = (a * 2) % m;
        b = (b>>1);
    }
    return res;
}

class Fancy{
    constructor(){
        this.val = Array(N+1).fill(0);
        this.add = Array(N+1).fill(0);
        this.mult = Array(N+1).fill(1);
        this.pointer = 0;
    }
    append(val){
        this.pointer++;
        this.val[this.pointer] = val;
    }
    addAll(inc){
        for (let idx=this.pointer; idx > 0; idx-=idx&(-idx)){
            this.add[idx] = (this.add[idx] + inc ) % MOD;
        }
    }
    multAll(m){
        for (let idx=this.pointer; idx > 0; idx-=idx&(-idx)){
            this.mult[idx] = mulMod(this.mult[idx],m,MOD);
            this.add[idx] = mulMod(this.add[idx],m,MOD);
        }
    }
    getIndex(idx){
        if(idx>=this.pointer){return -1;}
        let s= this.val[idx+1];
        for(idx++; idx<=this.pointer; idx+=idx&-idx){
            s = mulMod(s,this.mult[idx],MOD);
            s = (s + this.add[idx]) % MOD;
        }
        return s;
    }
}
