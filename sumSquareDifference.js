// sumSquareDifference() function requires you to find the difference between the sum 
// of the squares of the first one hundred natural numbers and the square of the sum

function sumSquareDifference(limit) {
	var squareOfSum = 0;
	var sumOfSquares = 0

	// squareOfSum portion
	for (var i = 1; i <= limit; i++) {
		var curr = i*i;
		sumOfSquares = sumOfSquares + curr;
	}

	// sumOfSquares portion
	for (var i = 1; i <= limit; i++) {
		squareOfSum = squareOfSum + i;
	}
	squareOfSum = squareOfSum * squareOfSum;

	return squareOfSum - sumOfSquares;
}