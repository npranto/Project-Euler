// largestPrimeFactor() function requires you to find the largest prime factor of the 
// parameter value

function largestPrimeFactor(largeNumber) {
	var allFactors = [1];
	var primeFactors = [];

	//find all factors of largeNumber and store in allFactors
	for (var i = 2; i <= largeNumber/2; i++) {
		if ((largeNumber % i) == 0) {
			allFactors.push(i);
		}
	}

	// find all the prime factors out of the allFactors array and store in an primeFactors
	if (allFactors.length === 1){
		return largeNumber + " does NOT have prime factors";
	}else{
		for (var i = 1; i < allFactors.length; i++) {
			if (isPrime(allFactors[i])){
				primeFactors.push(allFactors[i]);
			}
		}
	}
	return primeFactors[primeFactors.length-1];
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
