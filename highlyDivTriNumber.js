// highlyDivTriNumber() function requires you to find the value of the first triangle 
// number to have limit value divisors

function highlyDivTriNumber(limit) {
	var curr = 1;
	var triNumber;
	var totalFactors = 0;
	var finalFactors = [];
	while(totalFactors < limit){
		triNumber = sumFactorial(curr);
		var factorArray = factorsOf(triNumber);
		totalFactors = factorArray.length;
		finalFactors = factorArray;
		curr++;
	}
	return triNumber + ": " + finalFactors; 
}

function sumFactorial(number) {
	var curr = number;
	var total = 0;
	if (curr === 1) {
		return 1;
	}else{
		while(curr >= 1){
			total = total + curr;
			curr--;
		}
	}
	return total;
}

function factorsOf(number) {
	var returnedArray = [];
	returnedArray.push(1);
	for (var i = 2; i <= number/2; i++) {
		if ((number % i) === 0) {
			returnedArray.push(i);
		}
	}
	if (number !== 1) {
		returnedArray.push(number);
	}
	return returnedArray;
}

console.log(highlyDivTriNumber(100));