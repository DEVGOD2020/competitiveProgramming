import itertools

digits = list(range(10))
perms = itertools.permutations(digits)

for i, p in enumerate(perms):
    if i == 999999:
        print( ''.join( map(str,p) ) )
        break
