function fibonacci(num) {
// your code here
	if(num == 0) {
		return 0;
	}

	if(num ==1) {
		return 1;
	}

	return (num - 1) + (num - 2);
}

module.exports = fibonacci;
