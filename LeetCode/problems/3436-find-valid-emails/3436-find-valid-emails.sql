SELECT user_id, email
FROM Users
WHERE REGEXP_LIKE(email, '^([[:alnum:]]|_)+@[[:alpha:]]+\.com$')
ORDER BY user_id