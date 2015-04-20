var arr = ['follow', 'the', 'white', 'rabbit'];
var vocales = [];

for (var i = 0; i < arr.length; i++) {
	var sum = 0;
	for (var j = 0; j < arr[i].length; j++) {		
		if ( arr[i].charAt(j).match(/[aeiouAEIOU]/) ){
			sum++;
		};
	};
	vocales.push(sum);
};

console.log(arr);
console.log(vocales);