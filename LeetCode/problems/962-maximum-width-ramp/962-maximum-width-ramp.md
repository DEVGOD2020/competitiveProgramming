---
title: 'Leetcode 962: Maximum Width Ramp'
description: 'Leetcode 962 Solution'
pubDate: 'October 9 2024'
heroImage: ''
---

## About
So this problem is basically asking about finding the longest distance between two indexs of an array such that the left index is lower then the right index, and that the value at the left index is smaller then the value at the right index. 

Another way to look at this problem is to pick two indexs, I and J, such that the index I appears before index J, as well as the number at nums index of I being smaller then the value at nums index of J.

In other words, Number I must appear before J in the array, and number I must be smaller than number J in the array.

For example
[(1),2,3,4,(5)] = Minimal distance between elements 5 and 1 is 4
[(1),0,2,(3)] = Minimal distance between elements 1 and 3 is 3
[6,3,(2),1,5,(3)] = Minimal distance between the last 3 and the middle 2 is 4

## Thoughts
I immediately misread the questions and assumed it was talking about finding the largest increasing monotonic stack by traversing left to right in the test case array. However, even after realizing this wasn't the case, I was still determined to use a monotomic stack for this problem.

Rethinking about the problem, I realized that for each right most index, the distance value that would be returned was the distance between itself and the leftmost index of any element that is smaller then the right most index's value. For example, for a testcase like [200,5,4,3,2,1,100] at the index for element 100, you would consider only 5,4,3,2,1 since those are values that are smaller then 100. the 200 can then be ingnored.

Also I realized that the way to get a maximal distance would be using classic monostack popping until you reach a point where you can no longer pop. For example, with testcase [200,5,4,3,2,1,100], you could have a monostack like [200,5,4,3,2,1], and then pop elements 5,4,3,2,1 you are left with 200.

For testcases like [10,1,2,3,11], your monostack that you start with initally should just elements such that each element is less then its prevous elements. For example, you would only need to have [10,1] to evaluate from the 11 element. This is due to being 2 and 3 being larger then 1, but also appearing after 1 in the array. Since 1 is already smaller then the next elements, 2 and 3, and can greedily say that 2 and 3 are not good choices, since 1 is already smaller then thoose two values.

Lastly, with a problem like this I am sure that while my monoStack is going to use the values of the array for comparisons, I am storing indexs inside of the monoStack itself. This way, I am able to do a distance calculation between two different points in the array if certian conditions are meet.

## Implementation
First, I use a for loop to form a decreasing monoStack in Javascript like I usually do. However, I dont preform any popping operations, only pushs when I find numbers that are smaller then the previous number on the top of the stack.

I then a second for loop, this time moving from right to left, to remove elements from my monoStack if they are smaller or equal to my current number. I also update my max varible with the max possible distance between the index. This is simply done my taking my current Rightmost index on my, and then subtracting the index on the top of the stack, which represents the rightmost index of the next element in the array that is smaller than my rightmost index's value.

Finally, I just return max which after the second for loop runs, contains my maximal distance / maximal ramp width to leetcode.

