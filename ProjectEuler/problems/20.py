score = 1
for I in range(1, 100):
    score *= I

ans = 0
for chr in str(score):
    ans += int(chr)

print(ans)
