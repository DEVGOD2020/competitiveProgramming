---
title: "Leetcode 70: Climbing Stairs"
description: Leetcode 70 Solution
date: 2025-05-13
tags:
  - Math
  - Dynamic_Programming
  - Memoization
---
## About
This leetcode problem is about a fictional set of stairs, and finding the total amount of ways you could climb to the Nth step. Whilst climbing the stairs, you can choose to climb at most 1 or 2 steps at a time. Additionally, the problems lets us know that stairs 1,2,3 are equal to 1,2,3 ways respectively. I ended up using Top Down Dynamic Programming alongside Recursion plus Memoization for time optimization.

One way to think about this problem, is to imagine what leads up to your target Nth stair. For example, if you wanted to reach the 100th stair, you have to either climb one step from the 99th stair, or climb two steps from the 98th stair. Since the Nth stair is reachable from the previous two stairs, we can calculate the number of ways to reach the Nth stair by adding together the previous two stairs amount of climbing combinations. This forms a pattern similar to a Fibonacci number problems, where we want to find the answer based on the sum of previous answers we've found for the problem.

The sub problem of "Climbing Stairs" is that for each Nth stair, we must find the number of ways the previous two stairs had before adding them together. The base cases of this problem is that for any Nth stair less than or equal to three, the number of ways will be the same value as Nth. It is when stair's N is greater than three that we must use our DP solution to find the total number of ways to climb up to that stair.

Additionally, since N can get large, I use a hash map named MEMO to store past results to reduce unnecessary recursive function calls, optimizing my solution by relying on cached past results for better speed. If my MEMO has a result for a given step I am looking for, then I just use that. However, if MEMO doesn't contain the number of ways for the Nth stair I am looking for, then I proceed forward with running my recursive solution.
## TLDR
Used Dynamic Programming, Recursion and Memoization to find the each Stairs number of ways to climb. Each Nth stair number of total ways relies on the previous two stairs total ways added together. Stairs 1,2,3 have one way, two ways, and three ways to climb to them respectively.