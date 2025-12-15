mySet = set()

for I in range(1, 1000):
    if I%3 == 0 or I%5 == 0:
        mySet.add(I)

print( sum(mySet) )
