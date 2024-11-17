---
title: 'Leetcode 921: Minimum Add To Make Parentheses Valid'
description: 'Leetcode 921 Solution'
pubDate: 'October 8 2024'
heroImage: ''
---

## About
This problem is very similar to yesterday’s problem. The main difference is instead of swapping characters that are already present in the string, we are appending either a ”(” or a ”)” anywhere we want in the string. However, we still have the same goal of finding the minimal number of operations needed to achieve a balanced string of () such that each opening symbol ( has a corresponding symbol ).

For example
1. ((), needs 1 ) symbol at the end to become balanced
2. ()()() is already balanced, so return 0
3. ))) needs 3 opening symbols to become balanced

## Thoughts
My thoughts immediately jumped to yesterday. The only difference is I ended up having two variables, one for the remainder of unmatched opening symbols, and one for the unmatched closing symbols. Once I was able to find these two values, at first I mistakenly thought it was some sort of find the max value between them. But in practice, it is the addition of both values together to get the minimal number of additions needed to balance the string.


## Implementation
Here in JS, I use a for loop to iterate through the test case string, while also finding the leftmost character & the rightmost character. After I have these varibles, I am then able to move left to right to calculate the remainder of opening ( symbols, while also moving right to left to find the remainder of closing ) symbols. After my for loop is completed, I then return the amount of unmatched opening ( symbols plus the amount of matched closing symbols ) together.

