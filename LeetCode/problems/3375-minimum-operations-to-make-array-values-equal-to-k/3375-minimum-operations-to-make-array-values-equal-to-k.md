---
title: 'Leetcode 3375: Minimum Operations to Make Array Values Equal to K'
description: 'Leetcode 3375 Solution'
date: 2025-04-08
authors:
  name: DevGod
  title: Vtuber
  picture: "https://assets.leetcode.com/users/DevGod2020/avatar_1710603076.png"
  url: "https://vtuber-devgod.com/"
tags:
  - Array
  - Hash Table
---

For today’s LeetCode problem, I honestly had to reread the prompt several times to really grasp what it was asking. It’s an easy problem conceptually, but the wording makes it a bit tricky to follow at first.

The main idea is this: we're given an array and we're allowed to perform a specific operation multiple times. We can choose a number from the array — but only if there's exactly one unique number in the array that's greater than it. For example, in the array [1, 2, 2, 2, 2, 2], the number 1 is valid because the only number greater than it is 2. But in [1, 2, 3], the number 1 is not valid because both 2 and 3 are greater than it — meaning there’s more than one unique number greater than 1.

Once we've identified valid numbers, we can use them to perform the operation: turning all instances of a greater number into that number itself. So in [1, 2, 2, 2, 2], we can transform all the 2s into 1s in a single operation — because we’re allowed to perform this operation any number of times, but it can only decrease values, never increase them.

A key detail is that we can only convert numbers downward. So if we're given a target value K, we must ensure it's possible to reduce all the values in the array to K using this method. If K is greater than any number in the array, it’s impossible — since we can’t increase values. For example, if K = 3 and the array is [1, 2, 2, 2, 2], we can't reach 3 because we can’t increase any of the values.

Our goal is to return the minimum number of operations required to make every value in the array equal to K. To solve this, I used a Set in JavaScript to track all the unique values greater than K — since each unique value greater than K will need its own operation to be reduced to K. If at any point we encounter a value less than K, we know the task is impossible and should return -1.

# TLDR
Count how many unique values in the array are greater than K — that's the minimum number of operations needed. If the array contains any value less than K, it's impossible to solve, so return -1.