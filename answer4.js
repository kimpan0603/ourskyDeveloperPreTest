1. There must be a function name follow the function tag.
2. There is missing syntax(;) at the end of the row of arr[i].
3. There is missing syntac(()) around x+i due to the instant function.


function createArrayOfFunctions(y){
	var arr = [];
	for(var i=0; i<y; i++){
		arr[i] = function createElement(x){return (x+i);};
	}
	return arr;
}