function isSubset(array1, array2){
	let isIncluded = true;
	for(let i of array2){
		if(isIncluded){
			isIncluded = array1.includes(i);			
		} else {
			break;
		}
	}
	return isIncluded;
}

I have no idea about Big-O notation.