var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addToListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addToListAfterKeypress(event) {
	if(inputLength()> 0 && event.keyCode === 13) {
		createListElement();
    }
}

button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);
