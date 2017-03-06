//printReverse()
//Write a function printReverse() that takes an
// array as an argument and prints out the elements 
// in the array in reverse order (don't actually 
// reverse the array itself)


//printReverse([1,2,3,4]);

//for loop
function printReverse(arr){
	var temp = [];
	var len = arr.length;
	for(var i = (len - 1); i >=0; i--) {
		console.log (arr[i]);
	}
	return temp;
}

//forEach loop
function printReverse(arr){
	len = arr.length;
	arr.forEach(function(newArr, i){
		console.log(arr[len - i - 1]);
	});
}
printReverse([1,2,3,4,5,6]);


// *** isUniform() ***

// Write a function isUniform() which takes an array as 
// an argument and returns true if all elements in the array 
// are identical

//isUniform([1,1,1,1]);  = true
//isUniform([2,1,1,1]);  = false
//isUniform(["a","b","p"]);  = false
//isUniform(["b","b","b"]);  = true

function isUniform(arr){
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== arr[0])
			return false;
	}
	return true;
}
isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["b","b","b"]);
isUniform(["a","b","p"]);

//*** sumArray() ***

// write a function sumArray() that accepts an array of numbers
// and returns the sum of all numbers in the array

// sumArray([1,2,3]);   returns 6
// sumArray([10,3,10,4]);   returns 27
// sumArray([-5,100]);   returns 95

function sumArray(arr){
	for(var i = 0, sum = 0; i < arr.length; sum += arr[i++]);
		return sum;
}

//*** max() ***

// Write a function max() that accepts an array of numbers and
// returns the maximum number in the array

// max([1,2,3]);   returns 3
// max([10,30,10,4]);   returns 10
// max([-5,100]);   returns 100

function max(numArray){
	return Math.max.apply(null, numArray);
}









