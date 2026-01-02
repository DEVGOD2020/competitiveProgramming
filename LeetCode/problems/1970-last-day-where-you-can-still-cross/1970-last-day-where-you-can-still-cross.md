---
title: "Leetcode 1970: Last Day Where You Can Still Cross"
description: Leetcode 1970 Solution
date: 2025-12-30
difficulty: Hard
tags:
 - Array
 - Binary_Search
 - Depth-First_Search
 - Breadth-First_Search
 - Union_Find
 - Matrix
---

## About
The main idea was to check for a "Horizontal River" of connected water tiles that split the top and bottom land rows. I read the hints and saw that DFS with binary search for the days was also an option, but I really wanted to mix UnionFind with the horizontal river idea. It's extremely messy but shockingly works for tonight.

Other notes that the river could consist of a completely horizontal line of water tiles, or include many diagonal cell connections. This is why unionFind is needed, and I can't just check each row for a straight line of water tiles.

My first thought was to unionFind together all the starting land cells, then cut connections between them as water tiles are added. Instead, treating water tiles as unionFind connected components was a much easier thought process. Instead of having to constantly rerun DFS/BFS from top row cells to bottom row tiles, I could just check for this "horizontal river" of water tiles instead. Surprisingly, I didn't even need to binary search through the "cells" coordinate array; I passed the LeetCode judge using only my UnionFind-based solution.

## Solution
Uses Union find, with a custom method named floodCell. Also added a custom array this.flood for tracking the boolean status of whether a given cell is land or water. Also, instead of a traditional rank array for path compression/find optimization, I made this into a messy "unique column" tracking sets.

The thought is that if my number of unique columns for a connected water tile grouping is equal to the total number of columns in my pretend matrix, then I have formed a full-length horizontal river of water tiles.

The floodCell method sets this.flood with water/land status, updates "rank sets" with the new unique column values for the given connected water group, then, for the day's event coordinates, checks around for fellow flooded neighbors.

If the neighbors are already flooded, then it unions them together and updates the neighbors' unique column set ranking as well.

At the end, floodCell returns true if the act of watering the current day tile creates a full-length horizontal river bisecting the top and bottom row, otherwise returns false/

## TLDR
Wasted so much time on UnionFind, this hard daily problem.
Also wrote when sleepy, oof.
