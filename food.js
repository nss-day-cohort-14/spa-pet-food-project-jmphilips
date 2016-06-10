

var outputDiv = document.getElementById("big-div");
var catDiv = document.getElementById("cat-div")

function onLoaded(eventObject) {
	var foods = JSON.parse(eventObject.target.response);	

	for (brands in foods.dog_brands){
		var currentBrand = foods.dog_brands[brands];
		outputDiv.innerHTML += `<h1>${currentBrand.name}</h1>`
		// for (flavors in foods.dog_brands.types) {

		for (var p = 0; p < currentBrand.types.length; p++) {
				outputDiv.innerHTML += `<p>${currentBrand.types[p].type}</p>`

				for (var j = 0; j < currentBrand.types[p].volumes.length; j++) {
					outputDiv.innerHTML += `<p>${currentBrand.types[p].volumes[j].name}</p>`
					outputDiv.innerHTML += `<p>${currentBrand.types[p].volumes[j].price}</p>`	
				}				
		};
	};
};

function catLoaded(eventObject) {
	var foods = JSON.parse(eventObject.target.response);
	var brandArray = []

	for (brands in foods.cat_brands) {
		var currentBrand = foods.cat_brands[brands] 
		catDiv.innerHTML += `<h1>${currentBrand.Brand}</h1>`

		for (var i = 0; i < currentBrand.breeds.length; i++) {
			catDiv.innerHTML += `<p >${currentBrand.breeds[i].breed}</p>`

			for (var j = 0; j < currentBrand.breeds[i].volumes.length; j++) {
				catDiv.innerHTML += `<p>${currentBrand.breeds[i].volumes[j].name}: `;
				catDiv.innerHTML += `${currentBrand.breeds[i].volumes[j].price}</p>`
			}
		}
	}
};



function ifFail(xhrEvent) {
	console.log("not working")
};


var catRequest = new XMLHttpRequest();
var myRequest = new XMLHttpRequest();

catRequest.addEventListener("load", catLoaded);

myRequest.addEventListener("load", onLoaded);
myRequest.addEventListener("error", ifFail)

catRequest.open("GET", "catfood.json")
catRequest.send();

myRequest.open("GET", "dogfood.json");
myRequest.send();






