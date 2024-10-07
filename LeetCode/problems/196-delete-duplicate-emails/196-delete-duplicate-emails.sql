delete from Person using Person,Person p1
where Person.id > p1.id AND Person.email = p1.email
