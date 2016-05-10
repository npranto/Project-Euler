/* longestCollatzSequence() function:
   The following iterative sequence is defined for the set of positive integers:
		n → n/2 (n is even)
		n → 3n + 1 (n is odd)

	Using the rule above and starting with 13, we generate the following sequence:
		13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
	It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 
	terms. Although it has not been proved yet (Collatz Problem), it is thought that 
	all starting numbers finish at 1.

	Which starting number, under one million, produces the longest chain?
	NOTE: Once the chain starts the terms are allowed to go above one million.

	https://projecteuler.net/problem=14
*/

function longestCollatzSequence(start,end) {
	var startsWith;
	var longestSeq = [];
	var longestSeqSize = 0;
	for (var i = start; i <= end; i++) {
		var final = i;
		var currSeq = [];
		while(final !== 1){
			currSeq.push(final);
			if (isEven(final)) {
				final = final/2;
			} else {
				final = (3*final) + 1;
			}
		}
		if (currSeq.length > longestSeqSize) {
			longestSeq = currSeq;
			longestSeqSize = currSeq.length;
			startsWith = i;
		}
	}
	longestSeq.push(1);
	return startsWith + "; " + "Size: " + longestSeqSize + " -> " + "["+longestSeq+"]";
}

function isEven(number) {
	return number % 2 === 0;
}
