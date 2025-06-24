const input = require('fs').readFileSync(0, 'utf8').trim();
let nums = input.split("\n").map((el)=>Number(el));
let k = nums.pop();
nums[nums.length-1] - nums[0] > k ? console.log(":(") : console.log("Yay!");
