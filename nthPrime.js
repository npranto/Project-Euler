// nthPrime() function requires you to find the nth prime number

function nthPrime(nth) {
	var primeNumber = 0;
	var curr = 2;
	while(primeNumber !== nth){
		if(isPrime(curr)){
			primeNumber++;
		}
		curr++;
	}
	return curr - 1;
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
