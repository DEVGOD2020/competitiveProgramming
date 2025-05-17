---
title: "Leetcode 191: Number of 1 Bits"
description: Leetcode 191 Solution
date: 2025-05-16
tags:
  - Bit_Manipulation
  - Divide_Conquer
---
## Question
In this leetcode problem, we are given a 32 bit integer which we must find the hamming weight of. The hamming weight is the amount of ones present in the binary representation of the given integer. Lastly, the binary representation of a number is basically using zeros and ones to symbolize the number. Our goal is to return this hamming weight of the given integer n.
## Solved
To solve this question, we can use bitwise operators and a while loop to optimally find the amount of ones / ON bits. Our while loop continuously runs until given integer n is zero. Each iteration, add the &1 of n to our current sum. The &1 operation adds a 1 to our sum, if the least significant bit inside of n is also set. Also during each iteration, our n integer is bitwise shifted to the right by 1. This has the same affect as dividing n by two before flooring. In terms of binary representation, this shift to the right physically shifts all numbers to the right by one. The last digit after running this operation simply disappears. Once my while loop finishes executing, I use my sum variable to return the answer.
## TLDR
Used bitwise operators and a while loop to efficiently iterate through each binary digit of the given n integer. While iterating through my while loop, I add to my sum variable before returning the answer.