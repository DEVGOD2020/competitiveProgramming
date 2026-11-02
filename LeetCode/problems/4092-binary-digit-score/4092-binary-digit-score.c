int calculateScore(int a, int b) {
    if(__builtin_popcount(a)>=__builtin_popcount(b)){
        return __builtin_popcount(a)*__builtin_popcount(b);
    }
    return __builtin_popcount(b)/__builtin_popcount(a);
}
