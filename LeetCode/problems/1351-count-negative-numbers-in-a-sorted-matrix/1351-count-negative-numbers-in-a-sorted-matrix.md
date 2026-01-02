---
title: "Leetcode 1351: Count Negative Numbers in a Sorted Matrix"
description: Leetcode 1351 Solution
date: 2025-12-27
tags:
 - Array
 - Binary_Search
 - Matrix
---
# About
For a given sorted matrix / grid with a mix of positive & negative integers, we have to return the amount of negative numbers present. Each column and row of the matrix is sorted in non increasing order. Being an easy problem with a small matrix grid size, we could go for a bruteforce nested forloop $$O(NM)$$ approuch. However, the solution can be more efficent using the power of binary searching each row, for a $$O(NlogM)$$ solution.

# Solution
Given the small testcase constraints, we could use a bruteforce nested for loop to iterate through and count the total number of negatives. However, by preforming binary search on each row we can solve this problem more optimially tiem complexity wise.

I iterate throughout each row of the matrix, preforming a binary search to find the index of the first negative number in the row. Depending on where this first negative number index is, I subtract the total row length with it to grab the total number of negative numbers present in the row. 

Due rows and columns of the matrix are sorted in non increasing order, I do another preformance boost by not setting $$R$$ varible back to $$R=grid[0].length-1$$. After completing the binary search on the current row, we can say that due to its sorted nature, the next row is guaranteed to have either the same or smaller $$R$$ index.

Lastly I keep a score varible as a running total of my negative numbers in the matrix grid. Once I am done iterating and binary searching each row, I return the score varible to solve the problem.

## TLDR
Used binary search for each row to achieve a $$O(NLogM)$$ JavaScript solution.

# Complexity
- Time complexity:
$$O(NLogM)$$

- Space complexity:
$$O(1)$$
