const wayneslide = document.querySelectorAll('.wayneslide'),
	  dotti = document.querySelectorAll('.dotti');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function addSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function thistSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<wayneslide.length;i++){
		wayneslide[i].style.display = "none";
	}
	for(i = 0;i<dotti.length;i++) {
		dotti[i].className = dotti[i].className.replace(' active4', '');
	}
	if(n > wayneslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = wayneslide.length;
	   }
	wayneslide[counter - 1].style.display = "block";
	dotti[counter - 1].className += " active4";
}