import sys
import math

data = sys.stdin.read().split(" ")

n = int(data[0])
m = int(data[1])
a = int(data[2])

print(  math.ceil(n/a)*math.ceil(m/a) )
