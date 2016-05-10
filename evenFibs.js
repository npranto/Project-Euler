// evenFibs() function find the sum of the even Fibonacci numbers in sequence until limit

function evenFibs(limit) {
	var fibsArray = fibonacci(limit);
	var evenFibs = [];
	var evenSum = 0;
	for (var i = 0; i < fibsArray.length; i++) {
		if (fibsArray[i] % 2 === 0) {
			evenFibs.push(fibsArray[i]);
		}
	}
	for (var i = 0; i < evenFibs.length; i++) {
		evenSum = evenSum + evenFibs[i];
	}
	return evenSum;
}

function fibonacci(limit) {
	var fibsArray = [1];
	var newVal = 2;
	while(newVal <= limit){
		fibsArray.push(newVal);
		newVal = fibsArray[fibsArray.length-1] + fibsArray[fibsArray.length-2];
	}
	return fibsArray;
}





