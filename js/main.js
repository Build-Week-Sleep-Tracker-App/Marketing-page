/* INSPIRATION: https://codepen.io/Paulie-D/pen/vXzjmA */

const colors = ["red", "green", "blue", "grey", "yellow"];

setRandomClass = () => {
	let ul = document.getElementById("world").contentDocument;
	let items = ul.getElementsByTagName("circle");
	let number = items.length;
	let random = Math.floor((Math.random() * number));
	
	setTimeout(() => {
		let items = ul.getElementsByClassName("blink");
		if (items.length > 20) {
			items[Math.floor((Math.random() * 20))].setAttribute("class", "")
		}
	}, 0);

	items[random].setAttribute("class", "blink");
	items[random].setAttribute("class", "blink " + colors[Math.floor(Math.random() * 5)]);
}

window.addEventListener("load", (event) => {
	setInterval(() => {
		setRandomClass();
	}, 500);
});