---
title: "Leetcode 88: Merge Sorted Array"
description: Leetcode 88 Solution
date: 2025-05-15
tags:
  - Array
  - Two_Pointers
  - Sorting
---
## Question
In this Leetcode Problem, we are given two already sorted arrays, as well as their expected sizes in the m and n variables. The Nums1 array is also filled with zeros at the end to ensure the Nums2 array can fit inside of Nums1. 

Our task is to merge both of these presorted arrays together **Inplace** inside of Nums1, while maintaining a sorted ordering. Inplace is different from most Leetcode problems, as we are only required to edit the given nums1 array. Instead of checking a specific function return value, the Leetcode Judge instead checks what we have done with the given nums1.

Additional, the Follow Up challenge specifies we want to solve this problem in O(m+n) time. The easy (m+n) log(n) solution would be to concatenate the given arrays together, then sort them using a built-in sort function. However, because most built-in sorting methods are log(n) time complexity, this would break our follow up challenge. Instead, we can use a more optimal two pointer approach.
## Solving
To solve this problem, we use an I variable to iterate from right to left on the nums1 array. We then use two pointers named a,b as a way to check values from the two given arrays. The pointer a is used to look up values in nums1, and the pointer b is used for numbers in nums2. So where the I variable is just for iterating through nums1, a and b are actually used for performing our comparisons.

If nums1[a] is greater then nums2[b], then we can keep that value at nums1 the same. Note that we only check this if our a pointer is still at a valid slot in nums1. Otherwise, we can safely assume that the current I th position in nums1 needs to be replaced with nums2[b]. Since nums2 is guaranteed to be the smaller length of the two given arrays, we can exit out of our while loop.

Instead of returning an array, we can just let the code end at the while loop, as the Leetcode Judge is only concerned with what nums1 is equal to.
## TLDR:
We must merge two given sorted arrays together inplace. To solve the follow up challenge of O(m+n) time complexity, we can easily do this using a two pointer solutions instead of relying on built in sorting methods.



