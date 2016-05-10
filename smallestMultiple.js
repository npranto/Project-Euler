// smallestMultiple() function finds the smallest positive number that is evenly 
// divisible by all of the numbers from fromNum1 to toNum2

function smallestMultiple(fromNum1, toNum2) {
	var currMultiple = 1;
	var allWorks = false;
	while(allWorks !== true){
		var now = currMultiple;
		for (var i = fromNum1; i <= toNum2; i++) {
			if ((currMultiple % i) !== 0) {
				allWorks = false;
				currMultiple = currMultiple + 1;
				break;
			}
		}
		if (now === currMultiple) {
			allWorks = true;
		}
	}
	return currMultiple;
}

