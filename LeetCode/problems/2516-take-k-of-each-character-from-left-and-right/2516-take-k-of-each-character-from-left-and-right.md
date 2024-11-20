---
title: 'Leetcode 2516: Take K of Each Character From Left and Right'
description: 'Leetcode 2516 Solution'
pubDate: 'November 19 2024'
heroImage: ''
---

## About
This leetcode problem asks use to find the minimal number of operations needed to get AT LEAST k amounts of a, b and c characters. For each operation, you are able to either remove a letter from the beginning or end of the given string.

### Example
"aabaaaacaabc"
k=2

The minimal number of operations needed would be 8. From the left of the given string we can remove letters "aab". From the right of the given string we can remove letters "caabc". With these 8 removal operations, we can get 4 a's, 2 b's and 2 c's, which meet our "AT LEAST" k of each letter requirement.

## Thoughts
At first, I was thinking it was some kind of greedy deque problem. At first glances, It felt like the problem was asking to choose optimally between either the left side vs the right side of the char array.

However, I then realized that it sounded more like finding an optimal prefix and suffix of the string such that you had all the letter you needed. Seeing I was finding a string prefix and suffix, I knew that I would need some kind of Two Pointer approach for this problem.

After getting a little frustrated, I peaked at the topic tags and saw "Sliding Window". Then it clicked, a lot of Leetcode sliding window problems are phrased like, for this continuous sub array in your array of data, find X criteria or frequencies. This problem sounded similar, but the main difference was we are concerned about what is on the outside of the sliding window, versus what's on the inside of the sliding window.

## Implementation
In Javascript, I first find the frequencies of a,b and c present in my given string. If the amount of letters in the whole string are less than K for any of the letters, I then just return a -1. If the amount of letters in the whole string are greater than K, a while loop is used to start building my sliding window.

During each iteration, sliding window's R pointer slides to the right, and for each letter it comes across it subtracts from my frequency map of letters. If at any point a letter's frequency becomes less than K, I start moving the left pointer to the right. For each letter my left pointer hits, I increase the frequency of that letter in the frequency map.

This ensures that my sliding window never takes more letters than it can from the string prefix or suffix. In other words, this makes sure that my sliding window is the largest window of characters that can take up the space between the smallest need prefix and suffix of the string.

Lastly, for each iteration we keep track of the maxRange of our sliding window. We then return the given string length - maximum range of the sliding window. We return this because the minimal of letter removal operations is equal the amount of character not present inside our sliding window. The answer therefor is basically the smallest possible string prefix and string suffix.

## TLDR

1. Find the minimal number of letters from beginning or end of string to remove for "at least" K letters.

2. At first thought it was a greedy problem, but it's actually a slightly unusual sliding window / two pointers problem.

3. Use Sliding window to find the largest range between the smallest needed prefix and suffix of string.

4. The sliding window is valid if your remaining letter frequencies do not go below K elements.

## Closing Thoughts
This is a very interesting sliding window problem. Instead of following the usual pattern of focusing on the internal state of the Sliding window element frequencies, it focuses on how your sliding window impacts the external state of you total frequencies of each letter in the given string.

