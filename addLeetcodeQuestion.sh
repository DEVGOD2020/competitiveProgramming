#!/usr/bin/env bash

echo "Add Leetcode Answer"
read -e -p "Question: " question
mkdir -p LeetCode/problems/$question/
nvim LeetCode/problems/$question/$question.js
echo "Added Successfully"
