	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.75
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 2.75
	},
	{
		name: "bacon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.75
	},
	{
		name: "kale",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.75
	},
	{
		name: "doughnuts",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 6.75
	},
	{
		name: "coffee",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 9.75
	},
	{
		name: "milk",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 4.40
	},
	{
		name: "chips",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.25
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.25
	}
];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {

	console.log(restriction, organic)
	let tempProducts = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			tempProducts.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			tempProducts.push(prods[i]);
		}
		else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			tempProducts.push(prods[i]);
		}
		else if (restriction == "None"){
			tempProducts.push(prods[i]);
		}
	}


	if(organic){
		tempProducts = tempProducts.filter((e)=>e.organic);
	}

	tempProducts.sort((a,b)=>b.price-a.price)
	console.log(tempProducts)

	return tempProducts;
	
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}
