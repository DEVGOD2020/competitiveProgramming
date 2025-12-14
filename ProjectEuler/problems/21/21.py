import math

ans = 0
mySet = dict()

for I in range(1,10000):
    sum = 1
    for Z in range(2, int(math.sqrt(I))+1 ):
        if I%Z == 0:
            sum += Z
            sum += I // Z
    if(sum in mySet and mySet[sum] == I and I != sum):
        ans += I + sum
    mySet[I] = sum

print(ans)
