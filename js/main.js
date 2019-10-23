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

const isInViewport = (elem) => {
	const bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom-200 <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

const loopImages = () => {
	[...document.getElementsByTagName("img")].forEach(function name(ele) {
		if (isInViewport(ele)) {
			ele.classList.add("animate")
		}
	})
}

window.addEventListener("load", (event) => {
	setInterval(() => {
		setRandomClass();
	}, 500);

	document.getElementById("menu").addEventListener("click", (ele) => {
		
		if (ele.target.getAttribute("src").indexOf("close") === -1) {
			ele.target.setAttribute("src", "./imgs/close.svg");
		} else {
			ele.target.setAttribute("src", "./imgs/bars.svg");
		}
		
		document.getElementsByTagName("nav")[0].classList.toggle("open")
	})

	window.addEventListener("scroll", () => {
		loopImages();
	});
	window.addEventListener("resize", () => {
		loopImages();
	});

	loopImages();
});


