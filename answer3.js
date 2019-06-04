function nextFibonacci(array){
	const calc = val =>{
		let a = 1;
		let b = 1;
		let c = 0;
		while(c <= val && val >= 2){			
			c = b + a;
			
			a = b;
			b = c;
		}
		return c;
	};

	const newArray = array.map(i=>calc(i));
	return newArray;
}