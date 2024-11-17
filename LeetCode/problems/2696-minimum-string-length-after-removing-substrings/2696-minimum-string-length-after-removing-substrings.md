---
title: 'Leetcode 2696: Minimum String Length After Removing Substrings'
description: 'Leetcode 2696 Solution'
pubDate: 'October 6 2024'
heroImage: ''
---

## About
This problem is basically asking after you replace every occurrence of a substring "AB" or "CD" in your testcase string, return the length of the new string. For example:

1. "ABCDZ" => "Z" => return 1;
2. "QABABABQ" => "QQ" => return 2;
3. "ACDB" => "" return 0;

## Thoughts
The first two example testcases are pretty straight forward. Just remove "AB" substrings, then remove all "CD" substrings. However, the third testcase gets interesting where we remove "AB", then remove "CD". However, after removing the "CD" we are left with "AB", which can then be removed again to return a blank string "" / a return string length of 0. After seeing this I immediately just wanted to use regular expressions, as that would be perfect for finding substrings present in my main string, as well as for preforming replaceAll operations to remove "AB" and "CD" substrings from the main testcase string.

## Implementation
I simply just made a while loop that only ends once my given String s no longer has a "AB" or a "CD" substring present inside of itself. This is done by using the regular expression /AB|CD/, which just checks for any occurrence of an "AB" or "CD". The .test(s) then just takes my regular expressions, searches the string using said regular expression, then returns true or false.

Inside my while loop, I then use s.repalceAll and /AB|CD/g to replace all occurrences of ABs and CDs from my current string. The regular expression is pretty similar to the top, I just use G to make sure its global since it's a replace all.

Lastly, once my String S no longer has any occurrences of substrings "AB" or "CD", I exit my while loop and then just return the length of my now AB and CD substring freed string.

