var userInput = prompt("Please enter phone number containing dashes (ex. 832-922-2053). This will not be used as spam!");
if (userInput.charAt(3) === "-" && userInput.charAt(7) === "-") {
	alert("Valid");
} else {
	alert("Please reenter your phone number. Remember to use dashes!");
}

var birthDate = prompt("Please enter your birth date. Format is xx/xx/xx"); 
if (birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/") {
	alert("Valid");
} else {
	alert("Invalid");
}

var postalCode = prompt("Postal Code (format is xxxxx or xxxxx-xxxx)");
if (postalCode.length === 5 || (postalCode.charAt(5) === "-" && postalCode.length === 10)) {
	alert("Valid");
} else {
	alert("Invalid");
}

var stateAbbreviation = prompt("state (abbriviation)");
if (stateAbbreviation.length === 2 && stateAbbreviation === stateAbbreviation.toUpperCase()) {
	alert("Valid");
} else {
	alert("Invalid");
}

var married = prompt("Married: yes or no");
if (married === married.toUpperCase() || married === married.toLowerCase() || married === "Yes" || married === "No") {
	alert("Valid");
} else {
	alert("Invalid");
}
