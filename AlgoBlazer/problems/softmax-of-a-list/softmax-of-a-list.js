function softmax(x) {
    let MAX = Math.max(...x);
    x = x.map((el)=>el-MAX);
    let sum = x.reduce((sum,el)=>sum+Math.exp(el),0);
    return x.map((el)=>Math.exp(el)/sum);
}