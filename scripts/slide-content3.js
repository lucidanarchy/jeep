
var slideIndexp = 1;
showSlidesp(slideIndexp);

function plusSlidesp(v) {
  showSlidesp(slideIndexp += v);
}

function currentSlidep(v) {
  showSlidesp(slideIndexp = v);
}

function showSlidesp(v) {
  var u;
  var slidesp = document.getElementsByClassName("mySlides3");
  var dotsp = document.getElementsByClassName("dot8");
  if (v > slidesp.length) {slideIndexp = 1}    
  if (v < 1) {slideIndexp = slidesp.length}
  for (u = 0; u < slidesp.length; u++) {
      slidesp[u].style.display = "none";
	  
  }
  for (u = 0; u < dotsp.length; u++) {
      dotsp[u].className = dotsp[u].className.replace(" active8", "");
  }
  slidesp[slideIndexp-1].style.display = "block";  
  dotsp[slideIndexp-1].className += " active8";
  
}
 
 
 
 