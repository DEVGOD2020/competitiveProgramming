---
title: "Leetcode 121: Best Time to Buy and Sell Stock"
description: Leetcode 121 Solution
date: 2025-07-03
tags:
  - Array
  - Dynamic_Programming
---
## Question
For this Leetcode problem, we are given an array of numbers representing the fluctuating values of an imaginary stock. Each index of the given array represents a new day. Using this array, we must determine the maximum possible profit that can be achieved. The profit is determined by choosing ONE day to buy the stock, and one future day to sell the stock. In other words, a key constraint of this specific 'buying stocks' problem is the fact we are limited to only one sell and one buy operation.

## Solving
To solve this problem, we can use Kadane's algorithm as a template to find the maximum possible profit. This algorithm is used for many problems involving finding the max subarray sum. In our case, we can use it to find the highest profit peak for buying and selling the stock.

We use a for loop to keep track of our stock's profits for each given day. To keep track of our current possible profit, each iteration we add the difference between the current Ith day's value minus the previous day's price. We use a Math.max(0,curProfit) to greedily ensure our current potential profit never dips below zero. Lastly, we use a variable maxProfit to keep track of the largest potential profit we have seen throughout the array.

## TLDR:
I used Kadane's algorithm as a template to create a maxProfit function, for finding the maximum possible profit achieved by buying and selling a stock.


