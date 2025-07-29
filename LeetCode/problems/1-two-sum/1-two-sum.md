---
title: "Leetcode 1: Two Sum"
description: Leetcode 1 Solution
date: 2025-05-03
tags:
 - Array
 - Hash_Table
---
## About
Two Sum is the first ever Leetcode problem published. In this problem, we are given an array of numbers, and a target integer. We must find two points in the given array who's values added together are equal to the given target value. At the end, we return the indexes of where these two points exist in the given array.

To solve this problem, we can use a data structure known as a Hash Table. Basically, Hash Tables are used for optimally searching, setting, and getting key value pairs. In this problem, using a Hash Table is important for storing past results that we can use later in our for loop. By sacrificing this extra little bit of memory, we can write an O(N) time complexity solution for the problem.

Specifically, we want to find the difference between the target and the current value we're evaluating in the given array. This difference value is a number we need to find in the future to form a pair that equals the given target. Our Hash Table's keys will be set to this difference, while our values will be set to our current index for use later. For example, if our first element in the array is 1, and our target is 5, then we would store {4:1}.

We continue scanning through the given array, whilst recording our difference key and our index values along the way. If we ever come across a value in the given array that happens to equal a key stored inside of our hash table, we then know we have found a matching pair that equals target. We can then return the current index we are checking, alongside our previous index already stored inside of our Hash Table. Back to our above example, if we have {4:1} in our Hash Table, and we found a 4 further in the array, we can return our current index along with the past index we've stored in the Hash Table.
## TLDR:
Using a Hash Table to store the needed future value along with the past Index. Then if we hit the required future value further in the array, we can return our past Index, along with the current index.



