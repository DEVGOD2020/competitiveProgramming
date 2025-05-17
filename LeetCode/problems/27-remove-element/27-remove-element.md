---
title: "Leetcode 27: Remove Element"
description: Leetcode 27 Solution
tags:
  - Array
  - Two_Pointers
date: 2025-05-16
---
## Question
In this Leetcode problem, we are given an array named nums and a number named val. The number val represents the value we want to remove from the given nums array. For example, if we have an array nums = [1,2,3,4,5], and a val = 2, then we want nums to be [1,3,4,5] with the element 2 removed. Only the first K elements of the nums array is checked to ensure all elements equal to val have been removed.

K is used to represent the amount of elements from the beginning of the array that are checked by the Custom Leetcode Judge for this problem. This means values in nums beyond index k are ignored by the Leetcode Judge. Only the section of nums, 0 to K, need to be edited in-place by our algorithm solution.

The first K elements of nums are checked to ensure you removed the val from the starting prefix of the array. Secondly, the Leetcode Judge checks that your solution returned the amount of elements not equal to val. This means that we want to edit the nums array in-place, as well as return the amount of elements not equal to val.

Lastly, it is important to note that technically, you do not need to worry about the order of your nums array, just that the first K elements don't include the value of val. This is because the custom judge actually sorts your nums array behind the scenes when evaluating your solution.
## Solving
To solve this problem, I implemented a two pointer solution to edit elements of nums in-place, as well as keep track of the amount of elements not equal to val. I use an index variable named J to check indexs of nums, alongside the count of elements that aren't equal to val. For each number of nums that is not equal to val, I edit the element at index J to that value, while also incrementing J to move to the next slot. Index J is used for editing specific elements of the nums array, as well as keeping track of how many elements I have found that are not equal to val. By the end, the nums array is successfully modified in-place. My solution finishes executing by returning the value of J, which represents the number of elements in nums not equal to val.
## TLDR
I used a two pointer solution to edit in-place the values of nums to avoid including the value of val. At the end, I return the index J to represent the amount of elements I found from the array nums that don't equal val. This solution satisfies the custom leetcode judge conditions of editing the nums array in-place and returning the amount of elements from nums not equal to val.