---
title: "Leetcode 26: Remove Duplicates from Sorted Array "
description: Leetcode 26 Solution
date: 2025-06-15
tags:
  - Array
  - Two_Pointers
---

## Question
In this Leetcode problem, we are given a pre-sorted, strictly increasing array of numbers and must remove adjacent duplicate values in-place. However, Leetcode includes a custom judge for this problem that verifies whether the array is modified in-place. For example, we do NOT want to initialize a new array to solve this problem, we want to solve this problem in-place using the original array. Another requirement of the custom judge for this question is to return K. The value K represents the amount of unique values we have after removing adjacent duplicates from the given array.

## Solving
To solve this problem, I used a two pointer approach to modify the array in-place and keep track of unique values, K. I implement a for-loop that moves my right pointer R across the array. Every time nums[R] and nums[R+1] don't equal each other, I have found a new unique value. Anytime my left pointer array element updates, I move the L one space. The right pointer, R and R+1 continue to move forwards until they reach the end of the given array.

In other words, my right pointer R is used in a sliding window style traversal to check all adjacent duplicate values in the array. Meanwhile, my left pointer L is strictly used to update positions in the left of the array, as I find unique values. Additionally, my left pointer L also keeps track of the amount of unique values that I have encountered in the given array. This is because every time I modify the position of left pointer L, it increments by one, which effectively keeps a running score of every time I updated the left section of the array.

Lastly, although the two-pointer solution does not remove the remaining "junk" values in the right section of the array, the custom judge only checks the first K elements for correctness.

## TLDR
I used a two pointer approach to modify the given array in-place to hold the unique values in the left section of the array, satisfying the custom Leetcode judge requirements.

