---
title: 'Leetcode 1963: Minimum Number of Swaps to Make the String Balanced'
description: 'Leetcode 1963 Solution'
date: 2024-10-07
---

## About
This leetcode problem is basically us to find the minimum number of swap operations are needed to make a string of "[]" symbols balanced. Balanced being if each opening "["" symbol also has a closing "]" symbol. For example, the following would be examples of balanced strings.

1. []
2. [[]]
3. [][][]

## Thoughts
One thing to notice off the bat is when considering certain testcases, it is already possible that a string already contains a balanced string. For example, testcase ]][][[ already has a balanced string in the middle, so it is the same as ]][[.
For example, all testcases either eventually become testcases such as ][, ]][[, ]]][[[ ect.

After we see this, it is now about finding a remainder inside our testcase string of extra unmatched chars. For example, in ][ the remained would be one, which can be viewed either as having one unmatched opening char, or one unmatched closed char.

After drawing out these certain testcases, I saw a certain pattern involving the remaining total of unmatched charecters in the sring.

1. ][ = 1 Swaps needed
2. ]][[ = 1 Swaps needed
3. ]]][[[ = 2 Swaps needed
4. ]]]][[[[ = 2 Swaps needed
5. ]]]]][[[[[ = 3 Swaps needed

The pattern being, that for the remaining amount of unmatched symbols at the end of the string is then Math Ceil (remaining amount of unmatched chars / 2) is the number of swaps needed.

## Implementation
There are two ways you can solve this problem. One way is to use a stack data structure to keep track of previous symbols, and then pushing and popping accordingly. However, what I ended up doing to save memory usage was to simulate the stack size instead. Since we only need to return the minimal amount of swaps needed, we don't need to have a stack, only the state of the would be stack's size / length. Once I for loop to simulate the stack size, I simply just return the Math.ceil(remainder / 2) to return the minimal amount of swaps needed.
