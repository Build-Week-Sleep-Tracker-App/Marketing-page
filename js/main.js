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

	document.getElementById("menu").addEventListener("click", (ele) => {
		console.log(ele.target);
		
		if (ele.target.getAttribute("src").indexOf("close") === -1) {
			console.log(ele.target.setAttribute("src", "./imgs/close.svg"));
		} else {
			console.log(ele.target.setAttribute("src", "./imgs/bars.svg"));
		}
		
		
		console.log(document.getElementsByTagName("nav")[0].classList);
		document.getElementsByTagName("nav")[0].classList.toggle("open")
	})
});

