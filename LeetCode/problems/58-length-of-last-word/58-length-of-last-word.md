---
title: "Leetcode 58: Length Of Last Word"
description: Leetcode 58 Solution
date: 2025-07-07
tags:
  - String
---
## Question
In this Leetcode question, we are given a string representing a sentence. Each word is separated by the " " space character. Our goal is to return the length of the last word in the string. An important observation to note is that our given string could have white space characters before the start, as well as after the end. Additionally, more than one white space character could also separate each word in the string.

## Solving
To solve this Leetcode problem, I start by using the built-in JS .trim() method. This trim method is able to remove all white space at the beginning and end of the string. By using trim on the given string, I can proceed with my JS methods knowing the end of the string is just the last word, and no additional space characters.

Next I use the string .split(" ") method to split in-between space characters. This method transforms our trimmed string into an array of strings, separated by the space characters. As a side note, this method does leave some empty elements, but that is alright since the last element will just be our full last word. Since we are only concerned about the last element of this split array, any empty strings present in this string array can just be ignored. There is a way to use regular expressions to more accurately split the given string to avoid empty strings. However since I was more interested in code brevity, I instead used just a " " single space character instead.

After splitting our trimmed string into an array of strings, we can now pop() to return the last element. The pop method is a built-in JS array method, that removes and returns the last word of the split string array. Another way to retrieve the last element would have been with [s.trim().split(" ").length - 1]. While this is the slightly more time efficient way, the .pop() method just took less characters. Given the small constraints regarding the given string's length, I preferred the least amount of code vs the most time efficient code. 

Lastly, now that we have trimmed the original string, split it into an array of strings and popped the last element, we can now just return the .length property to answer the question.

## TLDR:
I used built-in Javascript array and string methods to return the length of the last word in the given string.

