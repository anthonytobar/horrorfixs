// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// document.getElementById("").classList.remove("");

//we need the element because the element is what tells the function what to do, we are changing the div we just clicked on
function changeColor(elem){
	elem.classList.toggle("tan");
}

//we can delete the "elem" be the part we are clicking isn't being change
//this function takes no input (argument)
function resetAll(){
	document.getElementById("one").classList.remove("tan");
	document.getElementById("two").classList.remove("tan");
	document.getElementById("three").classList.remove("tan");
	document.getElementById("four").classList.remove("tan");
}