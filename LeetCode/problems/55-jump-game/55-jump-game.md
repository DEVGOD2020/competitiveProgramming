---
title: "Leetcode 55: Jump Game"
description: Leetcode 55 Solution
date: 2025-07-04
tags:
  - Array
  - Dynamic_Programming
  - Greedy
---
## Question
In this Leetcode question, we are given an array of numbers. We start at the first index of the array, and our goal is to reach the end of the array. Each value of the array represents the maximum jump distance to the right. For example, if the first index's value is 5, you could jump anywhere between 1 to 5 indexs ahead. If the index's value is 0, then we are NOT allowed to jump anywhere beyond that spot, effectively trapping us. It is important to note that we are never given negative values in the given array. This means that leftward jumps are never allowed, given this constraint of the array Numbers.

Our goal is to determine if we can reach the end using any series of jumps. We return true or false depending on the reachability of the array's end.

## Solving
To solve this Leetcode problem, I used a greedy approach. I used a for loop to iterate left to right through the array. Whilst I traverse the array, the variable named maxJump records the furthest reachable index. In-between iterations, I check whether my current position is 'impossible' to reach. If an impossible index is detected, we return false and terminate early. If we go throughout the entire array, from left to right, without hitting an impossible to reach spot, we return true.

## TLDR:
Used a Greedy approach to traverse the array, determining if the array's end is reachable using any series of jumps. I solved this problem by iterating throughout the array, searching for impossible to reach spots.


