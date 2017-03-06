var nums = [45,65,77,34]
nums.forEach(function(num){
console.log(num);
});




myForEach(arr, func) {
	console.log(num);
};

//forEach function
function myForEach(arr, func) {
	//loop through array
	for( var i = 0; i < arr.length; i++){
		//call func for each item in array
		func();

	}
}

//Prototype For Each Method
Array.prototype.myForEach = function(func){
	for(var i = 0; i< this.length; i++){
		func(this[i]);
	}
}