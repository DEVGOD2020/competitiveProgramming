---
title: "Leetcode 169: Majority Element"
description: Leetcode 169 Solution
date: 2025-06-15
tags:
 - Array
 - Hash_Table
 - Divide_Conquer
 - Sorting
 - Counting
---

### Shout out Solaris428 for help

## Question
This Leetcode problem asks us to find the "Majority Element" from a given array of numbers. The majority element is the element of the array that appears > N/2 times. Basically, the majority element is the only absolute mode in this given array. Leetcode will only give you input arrays guaranteed to have one majority element. We must find and return the majority element to solve this problem.

### Follow up
We must solve this question using linear O(n) time complexity and O(1) constant space complexity. In other words, any solutions that use sorting algorithms would break this follow up's time complexity rule. This is because sorting algorithms, Wether implemented or using language's built in sorting methods, will result in at best nlogn time complexity. Secondly, we can not use data structures such as frequency Arrays or Hash tables, as these would be n space complexity at best.

## Solving
Since there is only at most one majority element present in our given array, we can use a running frequency of elements. This is because the majority element appears more often then all other values of the array. In other words, if we were to take the frequency of the majority element, subtracted by the sum of all the other frequencies of the non majority elements, the total would be more than zero. This only occurs for the majority element, as that is going to be the only element in the array that appears more often then all of the other elements.

We start by initializing a score variable used for tracking the current frequency, as well as the current "potential answer" we are investigating. We use a for loop to iterate through all of the numbers of the given array. If the num of the for loop is equal to the potential answer we are currently investigating, then we increment the current frequency score, else we decrease the score. If our frequency score ever reaches zero, then we change our current ans we are investigating to the current num of the for loop. This is because if our frequency is zero, at that point in time our current potential answer is <= the frequency of other values.

In other words, whenever our currently investigated potential ans running frequency is equal to zero, we must start investigating a new value at that time. Continuing with this pattern of investigating potential majority elements as they become suspects, and then once they get cleared we investigate the next value.

Lastly, once we have reached the end of our for loop, then our answer that is left should be the majority element we are looking for, so we return the ans. This solution fits our follow up, as we use constant space, and we use liner time complexity.

## TLDR:
We use an approach similar to a running prefix sum, where we keep track of the majority element by returning the element who's frequency at the end of array traversal is greater then zero.

