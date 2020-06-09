
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

var cart = [];


function addToCart(product){
	cart.push(product)
	console.log(cart)
}

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	//evt.currentTarget.className += " active";

	document.getElementById(tabName+"Tab").className += " active"

}

function test(id) {
	let test = document.getElementById(id);
	console.log(test);
}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkboxes

function populateListProductChoices(catagory, slct2) {
	
	
	//Drop down list
	var select = document.getElementById("dietSelect");

	var checkbox1 = document.getElementById("vegetarian");
	var checkbox2 = document.getElementById("glutenFree");
	var checkbox3 = document.getElementById("organic");

	let vegetarian = checkbox1.checked;
	let glutenFree = checkbox2.checked;
	let organic = checkbox3.checked;
	
	//Display product div
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";
	

		
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, vegetarian, glutenFree, organic);
	
	let optionArrayCopy = optionArray

	if(catagory){
		optionArrayCopy = optionArray.filter((product) => {
			return product.catagory === catagory;
		})
	}
	

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArrayCopy.length; i++) {
			
		let product = optionArrayCopy[i];

		let div = document.createElement('div');
		div.setAttribute('class','productCard');
		s2.appendChild(div)

		let wrapper = document.createElement('div');
		wrapper.setAttribute('class','wrapper');
		div.appendChild(wrapper)


		let oImg = document.createElement("img");
		oImg.setAttribute('src', product.img);
		oImg.setAttribute('alt', 'na');
		oImg.setAttribute('height', '125px');
		oImg.setAttribute('width', '100%');
		oImg.setAttribute('class','productImage');

		wrapper.appendChild(oImg);

		let productInfo = document.createElement('div');
		productInfo.setAttribute('class','productInfo');
		wrapper.appendChild(productInfo)

		// create a label for the checkbox, and also add in HTML DOM
		let name = document.createElement('h2')
		name.appendChild(document.createTextNode(product.name));
		productInfo.appendChild(name);



		//Preferences
		if(product.vegetarian){
			let preference = document.createElement('p')
			preference.appendChild(document.createTextNode("Vegetarian"));
			productInfo.appendChild(preference);
		}
		if(product.glutenFree){
			let preference = document.createElement('p')
			preference.appendChild(document.createTextNode("Gluten Free"));
			productInfo.appendChild(preference);
		}
		if(product.organic){
			let preference = document.createElement('p')
			preference.appendChild(document.createTextNode("Organic"));
			productInfo.appendChild(preference);
		}

		//Price
		let price = document.createElement('p')
		price.appendChild(document.createTextNode("$" + product.price));
		productInfo.appendChild(price);

		//Add to Cart
		let btn = document.createElement("BUTTON");
		const addToCardHandler =(e) => {
			addToCart(product)
		}

		btn.onclick = addToCardHandler.bind(product);
		btn.innerHTML = "Add to Cart";
		btn.setAttribute('class', 'addToCartBtn');
		div.appendChild(btn);
		
		
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var sum = 0;
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");

	console.log(cart)

	for (i = 0; i < cart.length; i++) { 

		let product = cart[i]
		
		para.appendChild(document.createTextNode(product.name+" $"+product.price));
		para.appendChild(document.createElement("br"));
		sum+=product.price;
		
	}

	let newPara = document.createElement("h2")
	newPara.innerHTML = "Total Price is $" + sum;
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(newPara)		
}

