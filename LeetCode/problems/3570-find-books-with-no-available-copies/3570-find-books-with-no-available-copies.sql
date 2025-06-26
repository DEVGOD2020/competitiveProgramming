SELECT A.book_id, 
A.title, 
A.author, 
A.genre, 
A.publication_year, C.current_borrowers
FROM library_books as A
JOIN
(SELECT book_id,
COUNT(book_id) as current_borrowers
FROM borrowing_records as B
WHERE return_date IS NULL
GROUP BY book_id) as C
USING (book_id)
WHERE C.current_borrowers = A.total_copies
ORDER BY C.current_borrowers desc, A.title

