function bitCount(n) {
	let count = 0;
	while (n) {
		n &= (n - 1);
		count++;
	}
	return count;
}
