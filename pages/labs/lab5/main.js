var tab = 1;

function openTab(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	let tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	let tabButtons = document.getElementsByClassName(tabName);
	for (i = 0; i < tabButtons.length; i++) {
		tabButtons[i].style.display = "block";
	}


	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		console.log(tablinks[i].className)
		tablinks[i].className = tablinks[i].className.replace(" disabled", "");
		console.log(tablinks[i].className)
	}

	console.log(tabName)

	document.getElementById(tabName+"Link").className += " disabled";

}



function validate(event) {
	let form = document.getElementById("bookingForm")
	console.log(event)
	event.preventDefault();
	event.stopPropagation();
	console.log(form.reportValidity());
	if(validatePhone("phone") && form.checkValidity()){
		openTab(event,'step2')
	}
}

function validatePage2(event){
	let form = document.getElementById("bookingForm2")
	console.log(event)
	event.preventDefault();
	event.stopPropagation();
	console.log(form.reportValidity());
	console.log(form.checkValidity());
	console.log(validateCredit("debit"))
	if(validateCredit("debit") && form.checkValidity()){
		console.log("here")
	  //openTab(event,'step2')
	  $("#debit").removeClass("is-invalid");
	  alert("Successfully booked");
	}else{
	  $("#debit").addClass("is-invalid");    
	}
}

function validateContact(event) {
	let form = document.getElementById("contactForm")
	console.log(event)
	event.preventDefault();
	event.stopPropagation();
	console.log(form.reportValidity());
	console.log(form.checkValidity())
}


