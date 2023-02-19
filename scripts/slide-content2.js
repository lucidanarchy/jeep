
var slideIndexm = 1;
showSlidesm(slideIndexm);

function plusSlidesm(n) {
  showSlidesm(slideIndexm += n);
}

function currentSlidem(n) {
  showSlidesm(slideIndexm = n);
}

function showSlidesm(n) {
  var m;
  var slidesm = document.getElementsByClassName("mySlides2");
  var dotsm = document.getElementsByClassName("dot2");
  if (n > slidesm.length) {slideIndexm = 1}    
  if (n < 1) {slideIndexm = slidesm.length}
  for (m = 0; m < slidesm.length; m++) {
      slidesm[m].style.display = "none";
	  
  }
  for (m = 0; m < dotsm.length; m++) {
      dotsm[m].className = dotsm[m].className.replace(" active2", "");
  }
  slidesm[slideIndexm-1].style.display = "block";  
  dotsm[slideIndexm-1].className += " active2";
  
}
 