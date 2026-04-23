---
title: "Leetcode 3906: Count Good Integers on a Grid Path"
description: Leetcode 3906 Solution
date: 2026-04-23
difficulty: Hard
tags:
 - Dynamic_Programming
---
## Intuition
A "Good Integer" is simply an 16 digit integer whom has a non decreasing subsequence of integers at seven certain postions. The good integer itself doesnt have to be sorted, only the digits at those positions. Also the problem asks to find the total number of good integers within a given range.

The problem specifies that the 16 digit integer can be arranged into an imaginary four by four matrix, and that the given directions array controls how this matrix is traversed. This imaginary matrix traversal is what gives the directional path defined subsequence of visitied digits we want to check.

Digit DP, but with some extra logic to check previous digits at certain goal points. The problem boils down to finding out if certain positions depending on the given directions array can form a non decreasing subsequence of 7 digits. Starting from top left / most significant digit, and traversing as needed.

Biggest idea is dont actually try and create a 4 by 4 matrix for each integer possible in between the range, but rather use Digit DP to explore each possibility. Instead of moving down and right in a matrix, instead just jump forward in an array of digits either 1 or 4 depending on the given direction.
## Approach
Create an array of digits with the given l and r numbers, whilst including enough leading zeros to to create an digit array of length 16. Then use digit DP to traverse possibiltiies between the given range, whom's digits at certain positions follow the non decreasing pattern. For state, I use a seperate pos variable for tracking the current digit position, a dir variable for tracking which direction im evaluating, and a goal variable to check wether or not I reached the next position to check the previous digit of the path defined sequence.

Similar to other range summation problems, return both the amount of "Good Integers" possible from 0 to r, then subtract that by the possible count of 0 to l-1. Just like always, to avoid time limit errors, we use the power a memoization hashmap to protect our time.
## TLDR
Digit DP to explore valid options recursively for a given range whilst simulating matrix traversal without actually creating a four by four matrix. Subtract the amounts found for left and right to get the total number of good integers.

