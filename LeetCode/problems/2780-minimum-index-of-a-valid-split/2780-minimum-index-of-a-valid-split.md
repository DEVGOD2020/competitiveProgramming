---
title: "Leetcode 2780: Minimum Index of a Valids Split"
description: Leetcode 2780 Solution
date: 2025-03-26
authors:
  name: DevGod
  title: Vtuber
  picture: https://assets.leetcode.com/users/DevGod2020/avatar_1710603076.png
  url: https://vtuber-devgod.com/
tags:
  - Array
  - Sorting
  - Hash_Table
---

I started today's daily LeetCode problem by using LeetCode’s provided Lodash _.countBy function to quickly create a frequency map of all elements in the array. Since the dominant element is the one that appears more than half the time, it must have the highest frequency among all elements. The dominant element is the one with the highest frequency in the array, while my suffix sum will represent the total count of the dominant element within the given array. The problem also guarantees that the input will always contain a dominant element before any array splits occur.

Once I identified the dominant element, I used its frequency to compute a suffix sum of the array. To determine the earliest possible valid split, I maintained both a suffix sum tracking the remaining occurrences of the dominant element and a prefix sum counting the ones I had already seen. Iterating from left to right, I subtracted elements from the suffix sum while adding them to the prefix sum. Using the index i and the array length, I determined the sizes of both the left and right partitions.

Essentially, I maintained a prefix sum (counting occurrences in the left partition), the left partition’s size, a suffix sum (tracking the remaining dominant elements in the right partition), and the right partition’s size. With these variables, I could efficiently check whether a valid split was possible at a given index. This approach is more optimal than a brute-force solution since I never actually split the array; instead, I keep it intact while using only four variables to determine whether a given index is a valid split point. For example, initially, the suffix sum contains all instances of the dominant element. If i moves to the first element and that element is the dominant one, I increase the prefix sum while simultaneously decreasing the suffix sum.

Finally, since it is possible for the array to have no valid split, we need to return -1 if no valid location is found. To handle this, I simply iterate through the array, returning early if I find a valid split point. Otherwise, if no valid index is found, I return -1 at the end.