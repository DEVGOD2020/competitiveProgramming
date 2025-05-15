---
title: The k-th Lexicographical String of All Happy Strings of Length n
date: 2025-02-18
tags:
  - Backtracking
  - String
---

Another backtracking problem where you are given some letter options to choice from to arrange permutations to explore. This one is a bit different cause you are tasked with finding all permutations containing just 'a', 'b' or 'c' letters, with no duplicates. For example a happy permutation is "abc", and a non happy one would be 'aab'.

You are given N for the amount of letters that should be in your generated sequence, and K for finding the Kth seqence if you were to sort all the seqences you found in a list. I like how leetcode's hints tonight casually tried to get you to use more memory then you would need to.

Instead of generating an array of all my possible seqences, I just greedily backtrack using the already lexigraphically sorted string "abc". I then just use a score varible to keep track of which Kth seqence I am currently at. If I have reached the Kth seqence, I just return out of my backtrack function and then return the answer.

Lastly, I know for sure there has to be some really cool math combinatrics trick for this problem, but I just couldn't think of it, EI the backtracking for it just being seqences of 10 letters or less worked pretty well, but im sure if it were harder constraints I would be forced to somehow optimally use math to spit out a seqence.
