// summationOfPrimes() function requires you to find the sum of all the primes below 
// the limit value

function summationOfPrimes(limit) {
	var totalSum = 0;
	for (var i = 2; i <= limit; i++) {
		if (isPrime(i)) {
			totalSum = totalSum + i;
		}
	}
	return totalSum;
}

function isPrime(number) {
	var sqrt = Math.sqrt(number);
	for (var i = 2; i <= sqrt; i++) {
		if ((number % i) === 0) {
			return false;
		}
	}
	return true;
}

