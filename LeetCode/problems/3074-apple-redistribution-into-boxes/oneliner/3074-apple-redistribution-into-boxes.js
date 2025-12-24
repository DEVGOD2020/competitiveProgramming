/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = (apple, capacity) => capacity.sort((a,b)=>b-a).map( (el)=>{psum+=el; return +(psum<ASUM)},psum=0,ASUM = apple.reduce( (sum,el)=>sum+el)).reduce( (sum,el)=> sum+el)+1;
