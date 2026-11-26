function countOneBits(n) {
    return n.toString(2).split('1').length - 1;
}