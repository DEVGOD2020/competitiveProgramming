(
    SELECT name as results
    FROM Users
    JOIN MovieRating
    USING(user_id)
    GROUP BY user_id
    ORDER BY COUNT(*) desc, name
    LIMIT 1
)
UNION ALL
(
    SELECT title as results
    FROM Movies
    JOIN MovieRating USING(movie_id)
    WHERE created_at >= '2020-02-01' AND created_at <= '2020-02-29'
    GROUP BY movie_id
    ORDER BY avg(rating)  DESC, title
    LIMIT 1
)
