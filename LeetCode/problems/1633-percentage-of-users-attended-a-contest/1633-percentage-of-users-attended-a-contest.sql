SELECT contest_id, ROUND(100*COUNT(DISTINCT user_id)/(SELECT COUNT(DISTINCT user_id) as cnt FROM Users),2) as percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage desc, contest_id
