---
title: Product of the Last K Numbers
date: 2025-02-13
authors:
  name: DevGod
  title: Vtuber
  picture: https://assets.leetcode.com/users/DevGod2020/avatar_1710603076.png
  url: https://vtuber-devgod.com/coding
---

Cool so looks like we get another System Design problem today. As usual, Leetcode just casually gives us the defualt JS prototyping functions together like a madlad template. This time we accepting numbers in a sort of data stream in one method. The other method being for taking the previous K values recieved, and returning the product of all of them multiplied together.

At first I didnt even care about the follow up, I just wanted to do it fast and pass it so I didnt have to worry about ruining my daily streak. So I just did an array push for my add() method, and then for my getProduct() method I just took a slice of my array at the ending depending on the k size given and then reduced using multiplacation to return the answer. This worked out good, but was pretty gross with a 1000ms being used. Definately not the O(1) goal that follow up sets us up for.

After that, and after some messing around with the testcase that a zero happens, I ended up instead keeping an array of multiplied prefix sums of my values, and a current prefix sum varible to just quickly take the current prefix sum value dividied by the past prefix sum value based on K offset to quickly get the answer.