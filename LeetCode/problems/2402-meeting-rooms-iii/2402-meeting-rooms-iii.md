---
title: "Leetcode 2402: Meeting Rooms III"
description: Leetcode 2402 Solution
date: 2025-12-26
tags:
 - Array
 - Hash_Table
---
## About
Given an integer n representing the total amount of rooms, and meetings including unique start times, and end times, find the room with the largest amount of held meetings & lowest room number.

If all n rooms are in use, we have to start delaying meetings. If a meeting is delayed, we still keep its original time duration consistant with its new delayed start time. For example, a meeting originally scheduled at [1,5] delayed two hours would be [3,7].

Unlike other meeting interval / range problems, this problem does not include the end time. This is known as half closed, which in other words means the next meeting can start at the same time as a meetings ending time.

Other big note is that in the event there are multiple unattended rooms, then the room with the smallest room number must be choosen. For example, if you are evaulating a meeting time, and rooms 1,2,3 are open, you MUST choose room 1.

## Solution
Used a Priority Queue to track the order at which rooms will become available at given end times. Then sort the meetings by their unique start times, before iterating through each one. The roomScores array tracks the amount of times a room is used so I can find the room with the largest amount of meetings, and the smallest room number if multiple most meetings rooms exists.

We iterate through the sorted meetings, grabbing the start time and duration of each. Checks how many of the currently occupied rooms can be "marked as empty / available", really this is just reassigning them to the rooms priority queue with the current meeting's start time. This symbolizes / rearrenge which items are up next to use.

Push back into the rooms Priority queue with either the previous end time or the current meetings start time, then add the duration of the meeting. If we can start at the given start time great, else were gonna need to use prevTime and duration to simulate a delayed meeting due to all rooms being full.

Lastly, I just end the forloop interation by updating the roomScores frequency array with the total number of meetings at room numbers. Last if statements help keep track of the max and the room number answer to return.
