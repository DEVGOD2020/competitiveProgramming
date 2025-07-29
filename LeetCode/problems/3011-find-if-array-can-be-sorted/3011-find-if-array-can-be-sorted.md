---
title: 'Leetcode 3011: Find if Array Can Be Sorted'
description: 'Leetcode 3011 Solution'
date: 2024-11-05
tags:
 - Array
 - Bit_Manipulation
 - Sorting
---

## About
There are two main parts to this problem. First, we need to be able to preform a sort on the array of values. Second, we must evaluate whether two elements in the array need to be swapped, and whether they are swappable given their count of on (1) in their binary representation of themselves. If the given array is already sorted, we can return true. If the given array is unsorted, then we must return whether it can become sorted by swapping elements when their bit counts are equal to each other. Returning false means that we have reached a point where the array is unsorted, and elements are different bit counts from each other, meaning it's impossible to complete the swap operation.

For example:

1. [1,5,2] = false, 5 and 2 can't be swapped, even though they need to be swapped
2. [1,2,3,4,5] = true, sure some numbers can't be swapped, but since its already sorted we don't need to worry

## Thoughts
Since this is a bitwise problem, a while loop can find the number of on (1) bits a number has. Also, an ideal sorting algorithm to use would be bubble sort, since the problem specifies you are preforming swaps between elements. Since the main idea is to test for bit counts and whether elements in the array are less than each other, bubble sort is the first thing that popped into my head. With bubble sort, I could check how elements values differ from each other, as well as how their bit counts differ from each other.

## Implementation
For my solution I went with a bubble sort approach, since bubble sort is well known for being a sort algorithm that preforms a bunch of swaps between a left and right pointer. By using a bubble sort to implement a solution, I could also include a check during swaps to check if the two elements I'm swapping at the time are different bit counts. If at any point they are different bit counts and need to be swapped, I can simply exit early and return false. Otherwise, I continue on with my business until the array is fully sorted and return true.

For finding the bit count of on (1) bits of a number, I simply use a while loop that counts the & of each first bit. Then to iterate down, I just do an arithmetic shift right, >> 1, to effectively half and floor the number each iteration until the number I am checking reaches zero.

## Closing Thoughts
After rereading the question, I noticed that leetcode did specify that only two ADJACENT elements can be swapped in one operation. While my solution passes all test cases, my solution does technically break the only ADJACENT elements rule. https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/ The bubble sort algorithm template on geeksforgeeks actually follows this rule a bit better, but at the end of the day still gets the job done :p
