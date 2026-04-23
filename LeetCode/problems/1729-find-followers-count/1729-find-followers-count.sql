SELECT user_id, COUNT(distinct follower_id) as followers_count
FROM Followers
GROUP BY user_id
