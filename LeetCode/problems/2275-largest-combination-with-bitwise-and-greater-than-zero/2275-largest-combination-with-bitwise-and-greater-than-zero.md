---
title: 'Leetcode 2275: Largest Combination With Bitwise AND Greater Than Zero'
description: 'Leetcode 2275 Solution'
date: 2024-11-06
---

## About
This problem focuses on finding combinations of numbers from the given array such that the bitwise & AND of all numbers are greater than or equal to 1. Out of all combinations of elements, we return the size of the largest possible combination length.

For example, [1,2,3,4,5] = 3, since the greatest combination length possible would be 1,3,5. This is because 1&3&5 is equal to 1.

## Thoughts
An important thing to note about using the bitwise AND & operator is that between two numbers, only the ON (1) bits locations can stay one when performing the AND & bitwise operation. For example, 1 AND 2 would equal zero since they do not share any ON (1) bit locations, but 1 AND 3 would equal 1 since both 1 and 3 have the 1 bit turned on.

1. 1 = 01, 2 = 10, 01 & 10 = 00
2. 1 = 01, 3 = 11, 01 & 11 = 01

With this property noted, we can say that for a combination of numbers bitwise AND together have to share ON (1) bit locations among all of them to be greater than zero. In other words, as soon as we reach a number with a bit location that is off, said bit location in the ending result is also turned off.

Seeing this, I decided an optimal way to organize these array elements into valid combinations would be using a hashmap data structure. A hashmap can assign elements into groups based on what bit locations they have flipped on. All elements in a group are in common, as they would all share a specific ON (1) bit location.

## Implementation
To solve this problem, I used the built-in Javascript Map() object to record the frequencies of elements in the array that share a specific bit location. To update both myMap and the answer variable, I created a function named “nya” on each candidate in the candidates' array. The function nya can check each ON(1) bit location a candidate has and update the frequency of that bitmask location if it is on. Lastly, nya can update my ans variable with the maximal length of a valid combination.

For example, for test case [1,2,3,4,5], these are all my valid combinations. To save on memory space, I can update the frequency at a given bit location key instead of maintaining an array of elements at that key. In other words, sorting into buckets, but instead, I keep track of the buckets' lengths.

1. [1,3,5] = 3
2. [2,3] = 2
4. [4,5] = 2

ans = 3

## Closing Thoughts
This is a pretty fun bitwise & hashmap combo problem. While coding this solution, I almost did not go with a frequency map, but instead went with keeping track of all elements in an array inside of the hashmap. Switching to keeping track of the frequency of all elements that shared an ON bit location instead of all the elements in that combo saved my bacon for sure time complexity and memory space-wise.
