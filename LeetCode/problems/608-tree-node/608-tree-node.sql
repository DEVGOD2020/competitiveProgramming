SELECT id,
    CASE
        WHEN p_id IS NULL THEN "Root"
        when id NOT IN(
            SELECT DISTINCT p_id FROM Tree WHERE p_id IS NOT NULL
        ) THEN "Leaf"
        ELSE "Inner"
        END AS TYPE
    FROM Tree
GROUP BY id
