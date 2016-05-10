// multOfThreeFive() function requires you to find the sum of all the multiples of num1 or 
// num2 below 1000

function multOfThreeFive(num1, num2, limit) {
	var num1Array = [];
	var num2Array = [];

	var incrementer = 2;
	var newMultiple = num1;

	var sum = 0;
	
	// find mutiples of num1 until 1000, store inside array
	while(newMultiple <= limit){
		num1Array.push(newMultiple);
		newMultiple = num1 * incrementer;
		incrementer++;
	}
	
	incrementer = 2;
	newMultiple = num2;

	// find multiple of num2 until 1000, store inside array
	while(newMultiple <= limit){
		num2Array.push(newMultiple);
		newMultiple = num2 * incrementer;
		incrementer++;
	}

	// compare num1 array and num2 array and delete same multiples out of one
	for (var i = 0; i < num1Array.length; i++) {
		if (!doesContain(num1Array[i], num2Array)) {
			num2Array.push(num1Array[i]);
		}
	}

	// find sum of the all integers in the final array, all non-repeated integers
	for (var i = 0; i < num2Array.length; i++) {
		sum = sum + num2Array[i];
	}
	
	return sum;
}

function doesContain(number, array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === number){
			return true;
		}
	}
	return false;
}

