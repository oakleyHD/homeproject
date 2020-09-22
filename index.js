const slide = document.querySelectorAll("#slides .slide");
const slideTime = 5000;
const slides = document.getElementById("slides");
const toggleRadio = document.getElementById("toggleRadio");
const toggleInput = toggleRadio.querySelectorAll("input");


let slideInterval;
let currentSlide = 0;



slides.addEventListener("mouseover", stopSlide);
slides.addEventListener("mouseout", continueSlideInterval)

toggleRadio.addEventListener("input", toggleSlide)

function stopSlide(){
	clearInterval(slideInterval);
}
function continueSlideInterval(){
	slideInterval = setInterval(nextSlide, slideTime);
}
function nextSlide(){
	slideReset();
	currentSlide = ++currentSlide % slide.length;
	slideSet();
}
function toggleSlide(){
	stopSlide();
	slideReset();
	currentSlide = event.target.value;
	slideSet();
	
}
function slideReset(){
	slide[currentSlide].className = 'slide';
}
function slideSet(){
	slide[currentSlide].className = 'slide showing';
}
continueSlideInterval();
