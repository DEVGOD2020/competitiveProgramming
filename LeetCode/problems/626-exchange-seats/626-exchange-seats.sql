SELECT rank() over (ORDER BY id) as id,student FROM(
    SELECT id-1 as id,student
    FROM Seat
    WHERE id%2=0
    UNION
    SELECT id+1 as id,student
    FROM Seat
    WHERE id%2=1
) t
ORDER BY id
