// largestPalindromeProduct() method requires you to find the largest palindrome made 
// from the product of two 3-digit numbers

function largestPalindromeProduct() {
	var start = 100;
	var end = 999;
	var palindromeProducts = [];

	// find all palindrome product values and store inside palindromeProducts array
	for (var i = start; i <= end; i++) {
		for (var j = start; j <= end; j++) {
			var product = i*j;
			if (isPalindrome(product)){
				palindromeProducts.push(product);
			}
		}
	}

	// fine the largest value in the palindromeProducts array
	var largestPalindromeProduct = 0;
	for (var i = 0; i < palindromeProducts.length; i++) {
		if (palindromeProducts[i] > largestPalindromeProduct){
			largestPalindromeProduct = palindromeProducts[i];
		}
	}

	return largestPalindromeProduct;
}

function isPalindrome(product) {
	var productToString = "" + product;
	for (var i = 0; i <= productToString.length/2; i++) {
		if (productToString.charAt(i) !== 
			productToString.charAt(productToString.length-i-1)) {
			return false;
		}
	}
	return true;
}