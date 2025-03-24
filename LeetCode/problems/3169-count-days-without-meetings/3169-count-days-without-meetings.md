---
title: 'Leetcode 3169: Count Days Without Meetings'
description: 'Leetcode 3169 Solution'
date: 2025-03-23
authors:
  name: DevGod
  title: Vtuber
  picture: "https://assets.leetcode.com/users/DevGod2020/avatar_1710603076.png"
  url: "https://vtuber-devgod.com/"
tags:
  - Array
  - Sorting
---

For today's daily problem, I created a line sweep-themed solution using LeetCode’s provided JavaScript Min Priority Queue, also known as a Min Heap, data structure. Meetings are given in an array in the form [start time, end time], making this problem a perfect fit for the line sweep technique.

I used a for loop to store both the start and end times of meeting ranges. A brute-force approach would be to iterate over each day, counting whether or not a meeting is taking place at that point. However, since days can range from 0 to 1,000,000, this would be highly inefficient. Instead, by storing only the exact days when meetings start and end, we can efficiently determine the number of meeting-free days.

Our MinPriorityQueue PQ data structure will store pairs of two numbers.
* The first number represents the day on which a meeting either starts or ends.

* The second number represents the event type:

    * 1 indicates the start of a meeting range.

    * -1 indicates the end of a meeting range.

The priority queue automatically sorts these pairs by day number, in increasing order, ensuring that earlier events are processed first. For example, the pair [20, 1] (a meeting starting on day 20) will appear before [100, 1] (a meeting starting on day 100).

Sorting by day number allows us to process events in chronological order, creating a structured timeline of meeting activity for us to sweep through—hence the name line sweep.

Once we have these meeting times stored in a MinPriorityQueue (also known as a min heap), we can begin popping the sorted meeting times and calculating the meeting-free days until our data structure is empty. The key observation is to determine the first day of a meeting-free period and the last day of that period. We can track this by maintaining a prefix sum of active meetings.

* If our prefix sum reaches zero, it means the worker has entered a meeting-free period.

* If the prefix sum is already zero, it means the worker is currently in a meeting-free period but is about to leave it due to an assigned meeting.

The total number of meeting-free days for a given period is calculated as:

```js
score += currDay - lastLuckyDay
```

I considered lucky days as the critical points where the prefix sum of currently assigned meetings transitions from zero to one or from one to zero. These points mark the start and end of meeting-free periods for the worker. So by keeping track of the 'lastLuckyDay' / the previous start of the meeting free period, we can subtract from our current day number to add the number of meeting free days to our score varible.

A few other details to consider:

1. Meeting Ranges are Inclusive – If we are given the range [1, 3], this means days 1, 2, and 3 all have scheduled meetings.

2. Days Beyond the Last Meeting – The worker may have more total workdays than the last scheduled meeting. For example, if meetings only occur on days 1, 2, and 3, but the worker is assigned 10 days of work, we must also count the meeting-free days 4 through 10.

To account for this final case, we perform one last update before we can return the answer:

```js
score += (total workdays - lastLuckyDay);
```

This approach allows us to efficiently determine the total number of meeting-free days while keeping our solution optimal.