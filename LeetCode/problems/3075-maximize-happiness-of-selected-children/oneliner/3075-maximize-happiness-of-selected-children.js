/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = (happiness, k) => happiness.sort( (a,b)=>b-a).slice(0,k).reduce( (sum,el)=> {Z++; return sum+Math.max(el-Z,0) }, 0, Z=-1);
