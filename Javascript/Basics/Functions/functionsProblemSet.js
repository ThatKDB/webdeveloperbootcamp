//isEven (Problem 1)
console.log("isEven");

// Refactored to be shorter 

function isEven(num){
	return num % 2 === 0;
}


// function isEven(num){
// 	if (num % 2 === 0) {
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }

//factorial() (Problem 2)
console.log("factorial()");

// function factorial(num) {
// 	if (num === 0) {
// 		return 1;
// 	}
// 	else {
// 		return num * factorial(num - 1);
// 		}
// }

function factorial(num) {
	//define a result variable
	var result = 1;
	//caculate factorial and store value in result
	for (var i = 2; i <= num; i++) {
		result *= i;
	}
	//return the result variable
	return result;
}

//kebabToSnake() (Problem 3)
console.log("kebabToSnake()");

function kebabToSnake(str) {
	//replace all '-' with "_" 's
	var newStr =  str.replace(/-/g, "_");
	//return str
	return newStr;
}
