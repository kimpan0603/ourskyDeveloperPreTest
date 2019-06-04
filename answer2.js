function minus(originalNumber, count){
	let result = originalNumber;
	const factor = count < 0? count: negate(count);
	
	result = add(result, factor);
	
	return result;
}

function multiply(originalNumber, factor){
	let times = factor >= 0? factor: negate(factor);
	let result = originalNumber >= 0? originalNumber: negate(originalNumber);

	while(times != 0){
		result = add(result, originalNumber);
		times = add(times, negative_one);
	}
	
	if(originalNumber < 0 && factor > 0 || originalNumber > 0 && factor < 0) {
		return negate(result);
	} else {
		return result;
	}	
}

function divide(originalNumber, factor){
	let times = 0;
	let result = originalNumber >= 0? originalNumber: negate(originalNumber);
	let negativeFactor = factor < 0? factor: negate(factor);
	const positiveFactor = negate(negativeFactor);
	
	if(factor = 0){
		return error;
	}
	
	while(result >= positiveFactor){
		result = add(result, negativeFactor);
		times = add(times, one)
	}
	
	if(result != 0){
		return error;
	}
	
	if(originalNumber < 0 && factor > 0 || originalNumber > 0 && factor < 0) {
		return negate(times);
	} else {
		return times;
	}	
}