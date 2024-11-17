---
title: 'Leetcode 1106: Parsing A Boolean Expression'
description: 'Leetcode 1106 Solution'
pubDate: 'October 19 2024'
heroImage: ''
---

## About
The goal of this problem is to take a string representation of booleans and functions, then return the expected boolean value after completing the function. For example, we could have a "t" symbol for a true boolean, a "f" symbol for a false boolean, a ! for a not function, and a & and | for functions that take all elements inside of a () and return the boolean of bitwise anding and bitwise or ing all elements respectively.

For example:
1. &(|(f)) = Return the bitwise or of one false, then return the bitwise & of one false
2. |(f,f,f,t) = Return the bitwise or of three falses and one true
3. !(&(f,t)) = Find the bitwise and of both false and true, then return the flipped / inverted result.


## Thoughts
After reading the problem, I stopped panicking about its high difficulty rating and thought back to reading up on JSFuck and BrainFuck, so decided to just make an eval statement do the work for me. I knew this would be like implementing a very minimal programming language interpreter, since "t" and "f" are like boolean constants, and the !&| symbols are like functions that accept input and return an output value.

## Implementation
First I use a series of replaceAll commands to slightly edit the given expression. A big reason for replacing these symbols is due to the fact that JS functions can not be just one special character like !&|, since those characters are reserved for bitwise operations. Once I have my expression edited, I then append some string representations of JS functions for returning the flipped value of a given boolean, as well as returning the bitwise OR / AND of all elements given in the function's args. Lastly, I then return the result given by running the JS eval command with my slightly modified string.

