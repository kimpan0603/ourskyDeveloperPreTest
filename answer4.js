1. There must be a function name follow the function tag.
2. There is missing syntax(;) at the end of the row of arr[i].
3. There is missing syntac(()) around x+i due to the instant function.
4. There should be defined function first and arr[i] equals to the function name so arr[i] is defined as function.


function createArrayOfFunctions(y){
	var arr = [];
	for(var i=0; i<y; i++){
		cosnt createElement = x => x+i;
		arr[i] = createElement;
	}
	return arr;
}
