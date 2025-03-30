---
title: 'Leetcode 763: Partition Labels'
description: 'Leetcode 763 Solution'
date: 2025-03-29
authors:
  name: DevGod
  title: Vtuber
  picture: "https://assets.leetcode.com/users/DevGod2020/avatar_1710603076.png"
  url: "https://vtuber-devgod.com/"
tags:
  - Hash Table
  - Two Pointers
  - String
  - Greedy
---

For today's daily leetcode problem, we are given a string and need to split it into as many partitions as possible, ensuring that each letter appears in at most one partition. Additionally, the partitions must preserve the order of letters as they appear in the original string. However, we don’t need to store the actual substrings—our task is simply to return the lengths of these partitions.

Example Walkthrough
Consider the string "pizzatime". The optimal partitions would be [1,6,1,1]. Here’s why:

* The letters p, m, and e each form their own single-letter partitions since they don't share any letter with another partition.

* The substring "izzati" forms a partition because it contains multiple occurrences of i and z, and we need to ensure that all instances of a letter belong to a single partition.

* Since the letters must remain in order and cannot belong to multiple partitions, "zzati" is grouped together with i to form a partition of length 6.

Another example is "partitionlabels", which results in [1,13,1]:

* The letters p and s form their own separate partitions.

* The middle partition, "artitionlabel", must include all occurrences of a and l.

* Since l appears late in the string, we must extend the partition to ensure all ls are included, resulting in a large middle partition.

Implementation Approach
Since I was in a hurry and the constraints were small, I used JavaScript's built-in .lastIndexOf() method to determine the last occurrence of each letter in real time. The key insight is that a letter’s last occurrence dictates where a partition must end. While this approach runs in 𝑂(n^2) time due to repeated .lastIndexOf() calls, an optimized solution could use a hashmap for 𝑂(1) lookups.

To efficiently track when to end a partition, I maintain a max variable, representing the farthest last occurrence seen so far. As I iterate through the string, I update max using:

```js
max = Math.max(max, s.lastIndexOf(s[L]));
```

This ensures that if a previous letter has a later last occurrence, we extend the current partition accordingly. This is crucial for cases like "partitionlabels", where encountering l extends the partition beyond a’s last occurrence.

I iterate through the string using a loop and keep track of partitionSize. Whenever I reach max, I add partitionSize to the result array, reset it, and continue. Instead of constructing substrings, I only track partition lengths, as that’s all the problem requires.

This greedy approach ensures an optimal partitioning of the string while keeping the implementation simple and efficient.


