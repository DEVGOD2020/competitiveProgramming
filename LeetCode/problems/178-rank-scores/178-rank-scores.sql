SELECT score, dense_rank() 
OVER (order by score desc) as 'rank'
FROM Scores
